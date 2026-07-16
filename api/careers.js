import { readJson, isEmail, clean, sendEmail } from './_lib.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!process.env.RESEND_API_KEY) return res.status(500).json({ error: 'Email service not configured' });

  const body = await readJson(req);
  const name = clean(body.name, 200);
  const email = clean(body.email, 200);
  const discipline = clean(body.discipline, 200);
  const links = clean(body.links, 500);
  const message = clean(body.message, 5000);

  if (!name || !isEmail(email) || !message) {
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }

  const attachments = [];
  const cv = body.cv;
  if (cv && cv.content && cv.filename) {
    const approxBytes = Math.floor((String(cv.content).length * 3) / 4);
    if (approxBytes > 5 * 1024 * 1024) return res.status(413).json({ error: 'CV too large' });
    attachments.push({ filename: clean(cv.filename, 200), content: String(cv.content) });
  }

  const text = [
    'New career application from insightive.io',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Discipline: ${discipline || '-'}`,
    `Links: ${links || '-'}`,
    '',
    "Hardest thing they've done:",
    message,
    '',
    attachments.length ? '(CV attached)' : '(No CV attached)',
  ].join('\n');

  const result = await sendEmail({
    to: process.env.CAREERS_TO || 'careers@insightive.io',
    from: process.env.RESEND_FROM || 'Insightive Website <noreply@insightive.io>',
    replyTo: email,
    subject: `Career application: ${name}${discipline ? ` (${discipline})` : ''}`,
    text,
    attachments,
  });

  if (!result.ok) {
    console.error('careers send failed', result.error);
    return res.status(502).json({ error: 'Send failed' });
  }
  return res.status(200).json({ ok: true });
}
