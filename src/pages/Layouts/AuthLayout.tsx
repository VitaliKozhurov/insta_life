import { ReactNode } from 'react'

import { NavBar } from '@/widgets'

import s from './AuthLayout.module.scss'
type Props = { children: ReactNode }

export const AuthLayout = ({ children }: Props) => {
  return (
    <div className={s.root}>
      <div className={s.navBar}>
        <NavBar />
      </div>
      <main className={s.main}>{children}</main>
    </div>
  )
}
