import React, { useState, type FormEvent, Component, type ErrorInfo, type ReactNode } from 'react';

// Error boundary to prevent hydration/runtime errors from unmounting the form
class FormErrorBoundary extends Component<{ fallback?: ReactNode; children: ReactNode }, { hasError: boolean }> {
  constructor(props: { fallback?: ReactNode; children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[DynamicForm Error]:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="form-error">
          <p>Something went wrong loading the form. Please <a href="https://wa.me/+971586978728">contact us on WhatsApp</a> instead.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export interface FormFieldOption {
  label: string;
  value: string;
  id?: string | null;
}

export interface FormField {
  id?: string | null;
  name: string;
  label?: string | null;
  defaultValue?: any;
  required?: boolean | null;
  blockType: 'text' | 'textarea' | 'email' | 'select' | 'checkbox' | 'number' | 'country' | 'state' | 'message' | 'upload';
  options?: FormFieldOption[] | null;
  width?: number | null;
  message?: any; // Lexical structure if blockType is message
  uploadCollection?: string | null;
  maxFileSize?: number | null;
  mimeTypes?: { mimeType: string }[] | null;
  multiple?: boolean | null;
}

export interface FormStructure {
  id: number | string;
  title: string;
  fields?: FormField[] | null;
  submitButtonLabel?: string | null;
  confirmationType?: 'message' | 'redirect' | null;
  confirmationMessage?: any;
  redirect?: {
    url?: string | null;
  } | null;
}

interface DynamicFormProps {
  form: FormStructure;
  cmsUrl?: string;
}

// Simple Lexical parser to render form intro/confirmation rich text dynamically without external modules
function renderLexical(node: any): React.ReactNode {
  if (!node) return null;

  if (node.type === 'text') {
    let content: React.ReactNode = node.text;
    const format = node.format || 0;
    // Lexical text formats: IS_BOLD=1, IS_ITALIC=2, IS_STRIKETHROUGH=4, IS_UNDERLINE=8
    if (format & 1) content = <strong key="b">{content}</strong>;
    if (format & 2) content = <em key="i">{content}</em>;
    if (format & 8) content = <u key="u">{content}</u>;
    if (format & 4) content = <del key="d">{content}</del>;
    return content;
  }

  if (node.children) {
    const children = node.children.map((child: any, i: number) => (
      <React.Fragment key={i}>{renderLexical(child)}</React.Fragment>
    ));

    switch (node.type) {
      case 'root':
        return <div className="lexical-root">{children}</div>;
      case 'paragraph':
        return <p>{children}</p>;
      case 'heading':
        const Tag = node.tag || 'h2';
        return <Tag>{children}</Tag>;
      case 'list':
        return node.listType === 'number' ? <ol>{children}</ol> : <ul>{children}</ul>;
      case 'listitem':
        return <li>{children}</li>;
      case 'link':
        return (
          <a
            href={node.fields?.url || '#'}
            target={node.fields?.newTab ? '_blank' : undefined}
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      default:
        return <span>{children}</span>;
    }
  }

  return null;
}

const MAX_UPLOAD_BYTES = 4 * 1024 * 1024; // 4 MB client-side limit

function DynamicForm({ form, cmsUrl = 'http://127.0.0.1:3000' }: DynamicFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  if (!form) return null;

  const { id: rawFormID, fields, submitButtonLabel = 'Send', confirmationType = 'message', confirmationMessage, redirect } = form;
  const formID = String(rawFormID);

  const hasUploadFields = (fields || []).some((f) => f.blockType === 'upload');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const nativeFormData = new FormData(e.currentTarget);

    // Client-side file size validation
    for (const field of (fields || [])) {
      if (field.blockType !== 'upload') continue;
      const maxBytes = field.maxFileSize || MAX_UPLOAD_BYTES;
      const fileList = nativeFormData.getAll(field.name);
      for (const file of fileList) {
        if (file instanceof File && file.size > maxBytes) {
          const maxMB = (maxBytes / (1024 * 1024)).toFixed(0);
          setErrorMsg(`${field.label || field.name}: File exceeds ${maxMB}MB limit. Please upload a smaller file.`);
          setStatus('error');
          return;
        }
      }
    }

    // Build submissionData for non-upload fields
    const dataToSend = (fields || [])
      .filter((field) => field.blockType !== 'upload')
      .map((field) => {
        const value = nativeFormData.get(field.name);
        return {
          field: field.name,
          value: field.blockType === 'checkbox' ? (value === 'on' ? true : false) : value || '',
        };
      });

    try {
      let res: Response;

      if (hasUploadFields) {
        // Use multipart FormData so files land in req.files for Payload's handleUploads hook
        const multipart = new FormData();
        multipart.append('form', formID);
        multipart.append('submissionData', JSON.stringify(dataToSend));

        // Attach actual files by field name
        for (const field of (fields || [])) {
          if (field.blockType !== 'upload') continue;
          const fileList = nativeFormData.getAll(field.name);
          for (const file of fileList) {
            if (file instanceof File && file.size > 0) {
              multipart.append(field.name, file);
            }
          }
        }

        res = await fetch(`${cmsUrl}/api/form-submissions`, {
          method: 'POST',
          body: multipart,
          // Do NOT set Content-Type — the browser sets the multipart boundary automatically
        });
      } else {
        // No upload fields — use plain JSON (original behaviour)
        res = await fetch(`${cmsUrl}/api/form-submissions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            form: formID,
            submissionData: dataToSend,
          }),
        });
      }

      if (res.ok) {
        setStatus('sent');
        if (confirmationType === 'redirect' && redirect?.url) {
          window.location.href = redirect.url;
        }
      } else {
        const errorData = await res.json().catch(() => ({}));
        setErrorMsg(errorData.errors?.[0]?.message || 'Server error. Please try again.');
        setStatus('error');
      }
    } catch (err) {
      console.error('[DynamicForm Submission Error]:', err);
      setErrorMsg('Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'sent' && confirmationType === 'message') {
    return (
      <div className="form-done">
        {confirmationMessage && confirmationMessage.root ? (
          renderLexical(confirmationMessage.root)
        ) : (
          <p>We read every message and reply within two business days, usually faster.</p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="contact-form">
      {(fields || []).map((field) => {
        const { blockType, name, label, required, defaultValue, options } = field;

        if (blockType === 'message') {
          return (
            <div key={field.id || name} className="form-message-block">
              {field.message && field.message.root && renderLexical(field.message.root)}
            </div>
          );
        }

        const inputId = `field-${name}`;

        return (
          <label key={field.id || name} htmlFor={inputId}>
            <span>
              {label || name}
              {required && <span style={{ color: 'var(--royal)', marginLeft: '2px' }}>*</span>}
            </span>

            {blockType === 'textarea' ? (
              <textarea
                id={inputId}
                name={name}
                required={!!required}
                defaultValue={defaultValue || ''}
                rows={6}
                placeholder={`Enter your ${label?.toLowerCase() || name}...`}
              />
            ) : blockType === 'select' ? (
              <select
                id={inputId}
                name={name}
                required={!!required}
                defaultValue={defaultValue || ''}
              >
                <option value="" disabled>Select...</option>
                {(options || []).map((opt) => (
                  <option key={opt.id || opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : blockType === 'checkbox' ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                <input
                  id={inputId}
                  type="checkbox"
                  name={name}
                  required={!!required}
                  defaultChecked={!!defaultValue}
                  style={{ width: 'auto', margin: 0 }}
                />
                <span style={{ textTransform: 'none', font: 'inherit', letterSpacing: 'normal', color: 'inherit' }}>
                  {label}
                </span>
              </div>
            ) : blockType === 'upload' ? (
              <div className="upload-field-wrapper">
                <input
                  id={inputId}
                  type="file"
                  name={name}
                  required={!!required}
                  multiple={!!field.multiple}
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
              
              </div>
            ) : (
              <input
                id={inputId}
                type={blockType === 'email' ? 'email' : blockType === 'number' ? 'number' : 'text'}
                name={name}
                required={!!required}
                defaultValue={defaultValue || ''}
                autoComplete={name === 'email' ? 'email' : name === 'name' ? 'name' : undefined}
              />
            )}
          </label>
        );
      })}

      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : submitButtonLabel}
      </button>

      {(status === 'error' || errorMsg) && (
        <p className="form-error">
          {errorMsg || 'Something went wrong. Please try again, or reach us on WhatsApp.'}
        </p>
      )}
    </form>
  );
}

// Wrapped export with error boundary
export default function DynamicFormWithBoundary(props: DynamicFormProps) {
  return (
    <FormErrorBoundary>
      <DynamicForm {...props} />
    </FormErrorBoundary>
  );
}
