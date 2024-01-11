import { ReactNode } from 'react'

import { inter } from '@/application'
import { Loader, PRIVATE_ROUTES, PUBLIC_ROUTES, Routes, useMeQuery } from '@/shared'
import { Header } from '@/widgets'
import { useRouter } from 'next/router'

type Props = { children: ReactNode }

export const RootLayout = ({ children }: Props) => {
  const router = useRouter()
  const path = router.pathname as Routes
  const { isError, isLoading } = useMeQuery()

  if (isLoading) {
    return <Loader />
  }

  const isAuth = !isError

  if (!isAuth && PRIVATE_ROUTES.some(route => route.split('/')[1] === path.split('/')[1])) {
    router.push(Routes.SIGN_IN)

    return <Loader />
  }

  if (isAuth && PUBLIC_ROUTES.includes(path)) {
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
