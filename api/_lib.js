// Shared helpers for the form serverless functions.
// Files prefixed with "_" are not routed as endpoints by Vercel, but are importable.

export function isEmail(v) {
  return typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export function clean(v, max) {
  return (v == null ? '' : String(v)).trim().slice(0, max);
}

// Robustly read a JSON body whether or not the platform pre-parsed it.
export async function readJson(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') {
    try { return JSON.parse(req.body); } catch { return {}; }
  }
  const chunks = [];
  for await (const c of req) chunks.push(typeof c === 'string' ? Buffer.from(c) : c);
  const raw = Buffer.concat(chunks).toString('utf8');
  try { return raw ? JSON.parse(raw) : {}; } catch { return {}; }
}

// Send an email through the Resend REST API. No SDK dependency.
export async function sendEmail({ to, from, replyTo, subject, text, attachments }) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false, status: 500, error: 'not_configured' };
  const payload = { from, to, subject, text };
  if (replyTo) payload.reply_to = replyTo;
  if (attachments && attachments.length) payload.attachments = attachments;
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!r.ok) {
      const detail = await r.text().catch(() => '');
      return { ok: false, status: 502, error: detail };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, status: 502, error: String(err) };
  }
}
