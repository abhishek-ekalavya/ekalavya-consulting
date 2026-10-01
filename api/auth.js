export default function handler(req, res) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID || process.env.GITHUB_CLIENT_ID || process.env.OAUTH_CLIENT_ID;
  const redirectUri = `https://www.ekalavyaconsulting.com/api/callback`;
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo,user`;

  res.redirect(302, url);
}
