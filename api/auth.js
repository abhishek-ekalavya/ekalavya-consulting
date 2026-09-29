export default function handler(req, res) {
  const { host } = req.headers;
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const base = `${proto}://${host}`;
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${base}/api/callback&scope=repo`);
}
