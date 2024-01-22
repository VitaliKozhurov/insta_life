import { ReactElement, useContext } from 'react'

import { AuthContext } from '@/application'
import { RootLayout } from '@/pages'
import { HeadMeta, Routes, useTranslation } from '@/shared'
import { SignUp } from '@/widgets'

import s from './SignUpPage.module.scss'

export const SignUpPage = () => {
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
      <HeadMeta title={text.signUpPage.title} />
      <main className={classNames.main}>
        <SignUp />
      </main>
    </>
  )
}

SignUpPage.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
