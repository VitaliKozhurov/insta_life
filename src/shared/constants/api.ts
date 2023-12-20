const BASE_URL = 'https://ft-inctagram.site/'
const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID

export const BASE_API_URL = `${BASE_URL}api/v1`
export const FRONTEND_REDIRECT_URL =
  (process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : BASE_URL) + 'auth/google'

export const GOOGLE_URL = `https://accounts.google.com/o/oauth2/v2/auth?scope=email profile&response_type=code&redirect_uri=${FRONTEND_REDIRECT_URL}&client_id=${CLIENT_ID}`
