import { ReactNode, useEffect, useState } from 'react'

import { inter } from '@/application'
import { Loader, Routes, getFromLocalStorage } from '@/shared'
import { Header } from '@/widgets'
import { useRouter } from 'next/router'

type Props = { children: ReactNode }

export const RootLayout = ({ children }: Props) => {
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  /*  console.log(isLoggedIn)
  useEffect(() => {
    const token = getFromLocalStorage('token')

    if (!token) {
      router.push(Routes.SIGN_IN)
    } else {
      setIsLoggedIn(true)
    }
    setLoading(false)
  }, [])

  if (loading) {
    return <Loader />
  }*/

  return (
    <div className={inter.className}>
      <Header isLoggedIn={isLoggedIn} />
      <>{children}</>
    </div>
  )
}
