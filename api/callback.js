export default async function handler(req, res) {
  const { code } = req.query;

  const client_id = process.env.OAUTH_GITHUB_CLIENT_ID || process.env.GITHUB_CLIENT_ID || process.env.OAUTH_CLIENT_ID;
  const client_secret = process.env.OAUTH_GITHUB_CLIENT_SECRET || process.env.GITHUB_CLIENT_SECRET || process.env.OAUTH_CLIENT_SECRET;

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
      <!doctype html>
      <html>
        <body>
          <script>
            (function() {
              function receiveMessage(e) {
                window.opener.postMessage(
                  'authorization:github:success:{"token":"${data.access_token}","provider":"github"}',
                  e.origin
                );
                window.removeEventListener("message", receiveMessage, false);
              }
              window.addEventListener("message", receiveMessage, false);
              window.opener.postMessage("authorizing:github", "*");
            })();
          </script>
        </body>
      </html>
    `;

    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(content);
  } catch (error) {
    return res.status(500).send(`Server error: ${error.message}`);
  }
}
