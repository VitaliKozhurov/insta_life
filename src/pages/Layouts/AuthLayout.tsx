import { ReactNode } from 'react'

import s from './AuthLayout.module.scss'
type Props = { children: ReactNode }

export const AuthLayout = ({ children }: Props) => {
  return (
    <div className={s.root}>
      <nav className={s.navBar}>NavBar</nav>
      <main className={s.main}>{children}</main>
    </div>
  )
}
