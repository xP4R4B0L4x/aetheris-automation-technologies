export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const WEB3FORMS_KEY = process.env.WEB3FORMS_KEY;
  if (!WEB3FORMS_KEY) return res.status(500).json({ error: 'Form key not configured: ' + (WEB3FORMS_KEY ? 'exists' : 'missing') });

  try {
    const { firstName, lastName, email, subject, message } = req.body;

    // Use https module since fetch may not be available
    const https = require('https');
    const postData = JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject: '[Aetheris] ' + (subject || 'Contact Form'),
      from_name: (firstName || '') + ' ' + (lastName || ''),
      name: (firstName || '') + ' ' + (lastName || ''),
      email: email || '',
      message: message || ''
    });

    const data = await new Promise((resolve, reject) => {
      const options = {
        hostname: 'api.web3forms.com',
        path: '/submit',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData)
        }
      };

      const request = https.request(options, (response) => {
        let body = '';
        response.on('data', (chunk) => body += chunk);
        response.on('end', () => {
          try { resolve(JSON.parse(body)); }
          catch (e) { reject(new Error('Invalid response: ' + body)); }
        });
      });

      request.on('error', reject);
      request.write(postData);
      request.end();
    });

    if (data.success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ error: data.message || 'Submission failed' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Server error: ' + error.message });
  }
}
