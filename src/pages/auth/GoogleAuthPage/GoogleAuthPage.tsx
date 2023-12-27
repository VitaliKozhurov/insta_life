import { useEffect } from 'react'

import { useLoginByGoogleQuery } from '@/features'
import { Loader, Routes, getToast, onGoogleOauthErrorHandler, saveToLocalStorage } from '@/shared'
import { useRouter } from 'next/router'

export const GoogleAuthPage = () => {
  const router = useRouter()
  const { code } = router.query as { code: string }

  const { data, error, isLoading } = useLoginByGoogleQuery({ code: code }, { skip: !code })

  useEffect(() => {
    if (data?.accessToken) {
      saveToLocalStorage('accessToken', data.accessToken)
      router.push(Routes.HOME)
    }
    if (error) {
      onGoogleOauthErrorHandler(error)
      router.push(Routes.SIGN_IN)
    }
  }, [data?.accessToken, error])

  if (isLoading) {
    return <Loader />
  }

  return null
}