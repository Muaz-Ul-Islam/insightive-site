import { useState, type FormEvent } from 'react';

// Posts JSON to the careers endpoint (handled by /api/careers via Resend).
// The CV is read client-side and sent as a base64 attachment.
const ENDPOINT = import.meta.env.PUBLIC_CAREERS_ENDPOINT || '/api/careers';
const MAX_CV_BYTES = 4 * 1024 * 1024; // 4MB

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result);
      resolve(result.slice(result.indexOf(',') + 1)); // strip "data:...;base64,"
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function CareersForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorText, setErrorText] = useState('Something went wrong. Please try again, or reach us on WhatsApp.');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const file = data.get('cv') as File | null;

    if (file && file.size > MAX_CV_BYTES) {
      setErrorText('That CV is over 4MB. Please upload a smaller PDF or Word file.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      let cv: { filename: string; contentType: string; content: string } | null = null;
      if (file && file.size > 0) {
        cv = { filename: file.name, contentType: file.type, content: await fileToBase64(file) };
      }
      const payload = {
        name: data.get('name'),
        email: data.get('email'),
        discipline: data.get('discipline'),
        links: data.get('links'),
        message: data.get('message'),
        cv,
      };
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setErrorText('Something went wrong. Please try again, or reach us on WhatsApp.');
        setStatus('error');
      }
    } catch {
      setErrorText('Something went wrong. Please try again, or reach us on WhatsApp.');
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-done">
        <h3>Got it.</h3>
        <p>
          Thanks for sending your work. If there is a fit we will be in touch and strong
          profiles stay on file for when the right role opens.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="contact-form careers-form">
      <label>
        <span>Name</span>
        <input name="name" type="text" required autoComplete="name" />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        <span>What you do</span>
        <input name="discipline" type="text" required placeholder="e.g. Full-stack engineer, AI/ML, Product design" />
      </label>
      <label>
        <span>Portfolio or LinkedIn</span>
        <input name="links" type="url" placeholder="https://" />
      </label>
      <label>
        <span>The hardest thing you've done</span>
        <textarea name="message" rows={5} required placeholder="Tell us what you owned and what it took." />
      </label>
      <label>
        <span>CV (PDF or Word, up to 4MB)</span>
        <input name="cv" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" required />
      </label>
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send your work'}
      </button>
      {status === 'error' && <p className="form-error">{errorText}</p>}
    </form>
  );
}
