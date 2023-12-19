import { useEffect } from 'react'

import { useLoginByGoogleQuery } from '@/features/auth/loginByGoogle/api/loginByGoogle'
import { Routes, getToast } from '@/shared'
import { useRouter } from 'next/router'

export default function () {
  const router = useRouter()
  const { code } = router.query as { code: string }

  const { data, error, isLoading } = useLoginByGoogleQuery({ code: code }, { skip: !code })

  useEffect(() => {
    if (data?.accessToken) {
      router.push('/')
    }
    if (error) {
      getToast({ text: 'Failed to fetch', variant: 'error' })
      router.push(Routes.SIGN_IN)
    }
  }, [data?.accessToken, error])

  if (isLoading) {
    return <h1>Loading.......</h1>
  }

  /*return <h1>{`google page ${data?.accessToken}`}</h1>*/
}
