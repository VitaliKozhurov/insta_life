import { ReactNode } from 'react'

import { Header } from '@/widgets'

import s from './Layout.module.scss'

type Props = { children: ReactNode }

export const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Header isLoggedIn={false} />
      <main className={s.main}>{children}</main>
    </>
  )
}
