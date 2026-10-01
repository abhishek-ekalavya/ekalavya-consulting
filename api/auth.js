export default function handler(req, res) {
  const client_id = process.env.OAUTH_GITHUB_CLIENT_ID || process.env.GITHUB_CLIENT_ID;
  const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo,user`;
  res.redirect(302, url);
}
