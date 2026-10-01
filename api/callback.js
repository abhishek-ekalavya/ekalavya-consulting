export default async function handler(req, res) {
  const { code } = req.query;

  const client_id = process.env.OAUTH_GITHUB_CLIENT_ID || process.env.GITHUB_CLIENT_ID;
  const client_secret = process.env.OAUTH_GITHUB_CLIENT_SECRET || process.env.GITHUB_CLIENT_SECRET;

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id,
        client_secret,
        code,
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(400).send(`Authentication error: ${data.error_description || data.error}`);
    }

    const content = `
      <script>
        (function() {
          function recieveMessage(e) {
            window.opener.postMessage(
              'authorization:github:success:${JSON.stringify({
                token: data.access_token,
                provider: 'github'
              })}',
              e.origin
            );
            window.removeEventListener("message", recieveMessage, false);
          }
          window.addEventListener("message", recieveMessage, false);
          window.opener.postMessage("authorizing:github", "*");
        })()
      </script>
    `;

    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(content);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
