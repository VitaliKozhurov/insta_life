import { ReactNode, useContext } from 'react'

import { AuthContext } from '@/application'
import { Routes } from '@/shared'
import { NavBar } from '@/widgets'
import { useRouter } from 'next/router'

import s from './AuthLayout.module.scss'

type Props = { children: ReactNode }

export const AuthLayout = ({ children }: Props) => {
  const { isAuth } = useContext(AuthContext)
  const router = useRouter()

  if (!isAuth) {
    router.push(Routes.SIGN_IN)
  }

  return (
    <div className={s.root}>
      <div className={s.navBar}>
        <NavBar />
      </div>
      <main className={s.main}>{children}</main>
    </div>
  )
}
