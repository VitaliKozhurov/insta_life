import { ReactNode, createContext } from 'react'

import { Loader, PRIVATE_ROUTES, PUBLIC_ROUTES, Routes, useMeQuery } from '@/shared'
import { useRouter } from 'next/router'
export const AuthContext = createContext({ isAuth: false })

export const AuthProvider = ({ children }: { children: ReactNode }) => {
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

  return <AuthContext.Provider value={{ isAuth }}>{children}</AuthContext.Provider>
}
