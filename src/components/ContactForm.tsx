import { useEffect, useState, type FormEvent } from 'react';

const SERVICES = [
  { value: 'advisory', label: 'Advisory — decide what fits' },
  { value: 'build', label: 'Build — Process · System · Platform' },
  { value: 'careers', label: 'Careers' },
  { value: 'undecided', label: 'Not sure yet' },
];

const SCALES = [
  { value: 'process', label: 'Process — one workflow, one team' },
  { value: 'system', label: 'System — runs a department' },
  { value: 'platform', label: 'Platform — runs the business' },
  { value: 'undecided', label: 'Not sure yet' },
];

// Growth-engine integration point: set PUBLIC_FORMS_ENDPOINT at build time.
const ENDPOINT = import.meta.env.PUBLIC_FORMS_ENDPOINT || '/api/contact';

export default function ContactForm() {
  const [service, setService] = useState('');
  const [scale, setScale] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get('service');
    const sc = params.get('scale');
    if (s && SERVICES.some((o) => o.value === s)) setService(s);
    if (sc && SCALES.some((o) => o.value === sc)) setScale(sc);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-done">
        <h3>Received.</h3>
        <p>We read every message and reply within two business days, usually faster.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="contact-form">
      <label>
        <span>Name</span>
        <input name="name" type="text" required autoComplete="name" />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        <span>Company</span>
        <input name="company" type="text" autoComplete="organization" />
      </label>
      <label>
        <span>What brings you here?</span>
        <select name="service" required value={service} onChange={(e) => setService(e.target.value)}>
          <option value="" disabled>Select…</option>
          {SERVICES.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </label>
      {service === 'build' && (
        <label>
          <span>Scale of the misfit (optional)</span>
          <select name="scale" value={scale} onChange={(e) => setScale(e.target.value)}>
            <option value="">Select…</option>
            {SCALES.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </label>
      )}
      <label>
        <span>Message</span>
        <textarea name="message" rows={6} required placeholder="What's bending and what would 'fixed' look like?" />
      </label>
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send'}
      </button>
      {status === 'error' && (
        <p className="form-error">
          Something went wrong. Please try again, or reach us on WhatsApp.
        </p>
      )}
    </form>
  );
}
