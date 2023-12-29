import type { NextApiRequest, NextApiResponse } from 'next'
// me endpoint test
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { authorization } = req.headers

  if (authorization?.split(' ')[1].length) {
    return res.status(200).json({ isAuth: true })
  } else {
    return res.status(401).json({ isAuth: false })
  }
}
