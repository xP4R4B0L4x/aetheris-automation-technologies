export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const RESEND_KEY = process.env.RESEND_KEY;
  if (!RESEND_KEY) return res.status(500).json({ error: 'Resend key not configured' });

  try {
    const { firstName, email, subject } = req.body;

    const https = require('https');
    const postData = JSON.stringify({
      from: 'Aetheris Automation Technologies <onboarding@resend.dev>',
      to: email,
      subject: 'Thank you for contacting Aetheris Automation Technologies',
      html: '<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0C1018;color:#F2F5F7;padding:2rem;border:1px solid rgba(177,31,42,0.3);border-radius:8px">' +
        '<div style="text-align:center;margin-bottom:1.5rem">' +
        '<div style="display:inline-block;width:40px;height:40px;background:#B11F2A;clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);line-height:40px;color:white;font-weight:bold;font-size:18px">AE</div>' +
        '<h2 style="margin:0.5rem 0 0;color:#F2F5F7;font-size:1.2rem">Aetheris Automation Technologies</h2>' +
        '<p style="color:#8C9BAB;font-size:0.8rem;margin:0">Sentinels of the Wild &bull; Protecting Every Life</p>' +
        '</div>' +
        '<p>Hello ' + (firstName || 'there') + ',</p>' +
        '<p>Thank you for reaching out to Aetheris Automation Technologies regarding <strong>"' + (subject || 'your inquiry') + '"</strong>.</p>' +
        '<p>We have received your message and our team will review it promptly. You can expect a response within <strong>24-48 hours</strong>.</p>' +
        '<p>In the meantime, feel free to explore our VALKYRIE Corridor Intelligence Platform and learn how we are working to protect every life on America\'s roadways.</p>' +
        '<p style="margin-top:1.5rem">' +
        '<a href="https://www.aetherisautomationtechnologies.com" style="display:inline-block;background:#B11F2A;color:white;padding:0.6rem 1.5rem;text-decoration:none;font-weight:bold;border-radius:4px">Visit Our Website</a>' +
        '</p>' +
        '<hr style="border:none;border-top:1px solid rgba(177,31,42,0.3);margin:1.5rem 0">' +
        '<p style="color:#8C9BAB;font-size:0.75rem">Aetheris Automation Technologies LLC<br>Tyler, Texas<br>contact@aetherisautomationtechnologies.com</p>' +
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

    if (data.status === 200 || data.status === 201) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ error: 'Email send failed', details: data.data });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Server error: ' + error.message });
  }
}
