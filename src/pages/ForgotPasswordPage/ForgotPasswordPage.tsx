import { ReactElement } from 'react'

import { RootLayout } from '@/pages'
import { HeadMeta, useTranslation } from '@/shared'
import { ForgotPassword } from '@/widgets'

import s from './ForgotPasswordPage.module.scss'

export const ForgotPasswordPage = () => {
  const { text } = useTranslation()
  const classNames = {
    main: s.main,
  }

  return (
    <>
      <HeadMeta title={text.pageTitle.forgotPassword} />
      <main className={classNames.main}>
        <ForgotPassword />
      </main>
    </>
  )
}

ForgotPasswordPage.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
