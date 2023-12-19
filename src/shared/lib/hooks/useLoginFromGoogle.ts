import { useGoogleLogin } from '@react-oauth/google'

export const useLoginFromGoogle = () => {
  return useGoogleLogin({
    flow: 'auth-code',
    onError: err => console.log(err),
    onSuccess: code => console.log(code),
  })
}
