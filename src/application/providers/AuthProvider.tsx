import { ReactNode, createContext } from 'react'

import { useMeQuery } from '@/shared'

export const AuthContext = createContext({ isAuth: false, isLoading: false })

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { isError, isLoading } = useMeQuery()
  const isAuth = !isError

  return <AuthContext.Provider value={{ isAuth, isLoading }}>{children}</AuthContext.Provider>
}
