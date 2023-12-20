import { ReactNode } from 'react'

import { inter } from '@/application'
import { Header } from '@/widgets'

type Props = { children: ReactNode }

export const RootLayout = ({ children }: Props) => {
  return (
    <div className={inter.className}>
      <Header isLoggedIn={false} />
      <>{children}</>
    </div>
  )
}
