import { ReactElement, useEffect } from 'react'

import { useRegistrationConfirmationMutation } from '@/features'
import { RootLayout } from '@/pages'
import { HeadMeta, useTranslation } from '@/shared'
import { ConfirmEmail, ExpiredLink } from '@/widgets'
import { useRouter } from 'next/router'

import s from './RegistrationConfirmation.module.scss'

export const RegistrationConfirmationPage = () => {
  const { text } = useTranslation()
  const { query } = useRouter()
  const { code } = query
  const [confirmRegistrationHandler, { isLoading, isSuccess }] =
    useRegistrationConfirmationMutation()

  useEffect(() => {
    const confirmCode = Array.isArray(code) ? code[0] : code

    if (confirmCode) {
      confirmRegistrationHandler({ code: confirmCode || '' })
    }
  }, [code])

  const classNames = {
    main: s.main,
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <HeadMeta title={text.registrationConfirmationPage.title} />
      <main className={classNames.main}>
        {isSuccess && <ConfirmEmail />}
        {!isSuccess && <ExpiredLink />}
      </main>
    </>
  )
}

RegistrationConfirmationPage.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
