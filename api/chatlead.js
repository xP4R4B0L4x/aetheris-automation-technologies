export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const RESEND_KEY = process.env.RESEND_KEY;
  if (!RESEND_KEY) return res.status(500).json({ error: 'Key not configured' });

  try {
    const { email, chatHistory } = req.body;

    const https = require('https');
    const postData = JSON.stringify({
      from: 'Aetheris Chatbot <onboarding@resend.dev>',
      to: 'contact@aetherisautomationtechnologies.com',
      subject: '[Aetheris Chatbot] Lead: ' + email,
      html: '<div style="font-family:Arial,sans-serif;max-width:600px;background:#0C1018;color:#F2F5F7;padding:2rem;border:1px solid rgba(177,31,42,0.3);border-radius:8px">' +
        '<h2 style="color:#B11F2A;margin-top:0">New Chatbot Lead</h2>' +
        '<p><strong>Email:</strong> ' + email + '</p>' +
        '<hr style="border:none;border-top:1px solid rgba(177,31,42,0.3)">' +
        '<h3 style="color:#D9A400">Chat History</h3>' +
        '<div style="background:#111820;padding:1rem;border-radius:4px;font-size:0.85rem;white-space:pre-wrap">' + (chatHistory || 'No history available') + '</div>' +
        '<hr style="border:none;border-top:1px solid rgba(177,31,42,0.3)">' +
        '<p style="color:#8C9BAB;font-size:0.75rem">Captured by Aetheris Chatbot on ' + new Date().toISOString() + '</p>' +
        '</div>'
    });

    const data = await new Promise((resolve, reject) => {
      const options = {
        hostname: 'api.resend.com',
        path: '/emails',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + RESEND_KEY,
          'Content-Length': Buffer.byteLength(postData)
        }
      };
      const request = https.request(options, (response) => {
        let body = '';
        response.on('data', (chunk) => body += chunk);
        response.on('end', () => {
          try { resolve({ status: response.statusCode, data: JSON.parse(body) }); }
          catch (e) { resolve({ status: response.statusCode, data: body }); }
        });
      });
      request.on('error', reject);
      request.write(postData);
      request.end();
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
}
