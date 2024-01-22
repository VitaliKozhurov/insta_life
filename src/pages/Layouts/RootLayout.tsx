import { ReactNode, useContext } from 'react'

import { AuthContext, inter } from '@/application'
import { Loader } from '@/shared'
import { Header } from '@/widgets'

type Props = { children: ReactNode }

export const RootLayout = ({ children }: Props) => {
  const { isLoading } = useContext(AuthContext)

  return (
    <div className={inter.className}>
      <Header />
      <>
        {isLoading && <Loader />}
        {!isLoading && children}
      </>
    </div>
  )
}
