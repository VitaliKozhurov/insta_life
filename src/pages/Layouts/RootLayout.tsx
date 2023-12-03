import { ReactNode } from 'react'

import { Header } from '@/widgets'

type Props = { children: ReactNode }

export const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Header isLoggedIn={false} />
      <>{children}</>
    </>
  )
}
