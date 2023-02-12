// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).json({ name: 'Gelado Compressor', description: 'The best image compressor from web', version: '1.2.4'})
}