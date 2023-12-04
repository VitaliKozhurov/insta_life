import { ReactElement } from 'react'

import { RootLayout } from '@/pages'
import { HeadMeta, useTranslation } from '@/shared'
import { CreateNewPassword } from '@/widgets'

import s from './CreateNewPassword.module.scss'

export const CreateNewPasswordPage = () => {
  const { text } = useTranslation()
  const classNames = {
    main: s.main,
  }

  return (
    <>
      <HeadMeta title={text.pageTitle.createNewPassword} />
      <main className={classNames.main}>
        <CreateNewPassword />
      </main>
    </>
  )
}

CreateNewPasswordPage.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
