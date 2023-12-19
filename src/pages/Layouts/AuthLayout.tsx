import { ReactNode } from 'react'

import s from './AuthLayout.module.scss'
type Props = { children: ReactNode }

export const AuthLayout = ({ children }: Props) => {
  return (
    <div className={s.root}>
      <nav>NavBar</nav>
      <main>{children}</main>
    </div>
  )
}
