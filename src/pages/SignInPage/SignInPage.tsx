import { ReactElement } from 'react'

import { RootLayout } from '@/pages'
import { HeadMeta } from '@/shared/config'
import { useTranslation } from '@/shared/lib'
import { SignIn } from '@/widgets'

import s from './SignInPage.module.scss'

export const SignInPage = () => {
  const { text } = useTranslation()
  const classNames = {
    main: s.main,
  }

  return (
    <>
      <HeadMeta title={text.pageTitle.signIn} />
      <main className={classNames.main}>
        <SignIn />
      </main>
    </>
  )
}

SignInPage.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
