const BASE_URL = 'https://ft-inctagram.site/'
const GOOGLE_CLIENT_ID = '1054565512290-ao2v9c9vubhqj7vs90jssm7j9rbomp9o.apps.googleusercontent.com'

export const BASE_API_URL = `${BASE_URL}api/v1`
export const FRONTEND_REDIRECT_URL =
  (process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : BASE_URL) + 'auth/google'

export const GOOGLE_URL = `https://accounts.google.com/o/oauth2/v2/auth?scope=email profile&response_type=code&redirect_uri=${FRONTEND_REDIRECT_URL}&client_id=${GOOGLE_CLIENT_ID}`
