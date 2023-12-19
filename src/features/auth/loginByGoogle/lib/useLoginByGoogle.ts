import { useGoogleLogin } from '@react-oauth/google'

import { useLazyLoginByGoogleQuery } from '../api'

export const useLoginByGoogle = () => {
  const [login, result] = useLazyLoginByGoogleQuery()

  return useGoogleLogin({
    flow: 'auth-code',
    onError: err => console.log(err),
    onSuccess: loginCode => {
      console.log(loginCode)
      login({ code: loginCode.code })
        .unwrap()
        .then(data => {
          console.log('data login ', data)
          console.log('result login ', result)
        })
        .catch(error => alert(JSON.stringify(error)))
    },
    redirect_uri: 'http://localhost:3000/api/v1/auth/google',
  })
}
