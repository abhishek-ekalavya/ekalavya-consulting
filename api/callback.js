export default async function handler(req, res) {
  const code = req.query.code;
  const r = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code
    })
  });
  const data = await r.json();
  const token = data.access_token;
  const script = `<script> (function(){ function send(){ window.opener.postMessage('authorization:github:success:'+JSON.stringify({token:'${token}', provider:'github'}), '*'); window.close(); } send(); })(); </script>`;
  res.setHeader('Content-Type', 'text/html');
  res.send(script);
}
