export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const WEB3FORMS_KEY = process.env.WEB3FORMS_KEY;
  if (!WEB3FORMS_KEY) return res.status(500).json({ error: 'Form key not configured' });

  try {
    const { firstName, lastName, email, subject, message } = req.body;

    // Send to you via Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `[Ætheris] ${subject}`,
        from_name: `${firstName} ${lastName}`,
        name: `${firstName} ${lastName}`,
        email: email,
        message: message,
        // Auto-response to the submitter
        autoresponse: true,
        autoresponse_subject: 'Thank you for contacting Ætheris Automation Technologies',
        autoresponse_from: 'Ætheris Automation Technologies',
        autoresponse_message: `Hello ${firstName},\n\nThank you for reaching out to Ætheris Automation Technologies. We have received your message regarding "${subject}" and will respond within 24-48 hours.\n\nIn the meantime, feel free to explore our VALKYRIE Corridor Intelligence Platform at https://aetheris-automation-technologies.vercel.app\n\nBest regards,\nÆtheris Automation Technologies\nTyler, Texas\ncontact@aetherisautomationtechnologies.com`
      })
    });

    const data = await response.json();

    if (data.success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ error: data.message || 'Form submission failed' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
