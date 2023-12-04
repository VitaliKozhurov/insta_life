import { ReactElement } from 'react'

import { RootLayout } from '@/pages'
import { HeadMeta } from '@/shared/config'
import { useTranslation } from '@/shared/lib'
import { SignUp } from '@/widgets'

import s from './SignUpPage.module.scss'

export const SignUpPage = () => {
  const { text } = useTranslation()
  const classNames = {
    main: s.main,
  }

  return (
    <>
      <HeadMeta title={text.pageTitle.signUp} />
      <main className={classNames.main}>
        <SignUp />
      </main>
    </>
  )
}

SignUpPage.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
