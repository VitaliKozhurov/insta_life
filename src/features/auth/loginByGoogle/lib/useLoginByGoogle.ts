import { useGoogleLogin } from '@react-oauth/google'

import { useLazyLoginByGoogleQuery } from '../api'

export const useLoginByGoogle = () => {
  /*  const [login, result] = useLazyLoginByGoogleQuery()*/

  return useGoogleLogin({
    flow: 'auth-code',
    onError: err => console.log(err),
    onSuccess: response => {
      alert('Hello')
      /*  login({ code: response.code })
        .unwrap()
        .then(data => {
          console.log('data login ', data)
        })
        .catch(error => alert(JSON.stringify(error)))*/
    },
    redirect_uri: 'http://localhost:3000/auth/google',
    ux_mode: 'redirect',
  })
}
