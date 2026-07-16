import { readJson, isEmail, clean, sendEmail } from './_lib.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!process.env.RESEND_API_KEY) return res.status(500).json({ error: 'Email service not configured' });

  const body = await readJson(req);
  const name = clean(body.name, 200);
  const email = clean(body.email, 200);
  const company = clean(body.company, 200);
  const service = clean(body.service, 100);
  const scale = clean(body.scale, 100);
  const message = clean(body.message, 5000);

  if (!name || !isEmail(email) || !message) {
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }

  const text = [
    'New enquiry from insightive.io',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || '-'}`,
    `Interest: ${service || '-'}`,
    `Scale: ${scale || '-'}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const result = await sendEmail({
    to: process.env.CONTACT_TO || 'inquiry@insightive.io',
    from: process.env.RESEND_FROM || 'Insightive Website <noreply@insightive.io>',
    replyTo: email,
    subject: `New enquiry from ${name}`,
    text,
  });

  if (!result.ok) {
    console.error('contact send failed', result.error);
    return res.status(502).json({ error: 'Send failed' });
  }
  return res.status(200).json({ ok: true });
}
