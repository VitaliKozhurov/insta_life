import { ReactElement, useContext } from 'react'

import { AuthContext } from '@/application'
import { RootLayout } from '@/pages'
import { HeadMeta, Routes, useTranslation } from '@/shared'
import { SignIn } from '@/widgets'

import s from './SignInPage.module.scss'

export const SignInPage = () => {
  const { isAuth } = useContext(AuthContext)
  const { router, text } = useTranslation()
  const classNames = {
    main: s.main,
  }

  if (isAuth) {
    router.push(Routes.HOME)

    return null
  }

  return (
    <>
      <HeadMeta title={text.signInPage.title} />
      <main className={classNames.main}>
        <SignIn />
      </main>
    </>
  )
}

SignInPage.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
