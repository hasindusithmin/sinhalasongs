// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const {url} = req.query;
  res.redirect(url)
}
