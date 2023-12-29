import { ReactNode } from 'react'

import { inter } from '@/application'
import { useAuthMeQuery } from '@/pages/Layouts/authApi'
import { Loader, Routes } from '@/shared'
import { Header } from '@/widgets'
import { useRouter } from 'next/router'

type Props = { children: ReactNode }

export const RootLayout = ({ children }: Props) => {
  const router = useRouter()
  // test for private toute
  const { data, isError, isLoading } = useAuthMeQuery()

  if (isLoading) {
    return <Loader />
  }

  const isAuth = !isError

  console.log(isAuth)
  if (!isAuth && router.pathname !== '/sign-in') {
    router.push(Routes.SIGN_IN)

    return <Loader />
  }

  if (isAuth && router.pathname === '/sign-in') {
    router.push(Routes.HOME)

    return <Loader />
  }

  return (
    <div className={inter.className}>
      <Header isLoggedIn={isAuth} />
      <>{children}</>
    </div>
  )
}
