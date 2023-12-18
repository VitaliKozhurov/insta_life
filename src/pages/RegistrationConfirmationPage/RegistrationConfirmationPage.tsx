import { ReactElement, useEffect } from 'react'

import {
  useRegistrationConfirmationMutation,
  useRegistrationEmailResendingMutation,
} from '@/features'
import { RootLayout } from '@/pages'
import { HeadMeta, checkConfirmationCodeError, getToast, useTranslation } from '@/shared'
import { ConfirmEmail, ExpiredLink } from '@/widgets'
import { useRouter } from 'next/router'

import s from './RegistrationConfirmation.module.scss'

export const RegistrationConfirmationPage = () => {
  const [confirmRegistrationHandler, { isLoading, isSuccess }] =
    useRegistrationConfirmationMutation()
  const [resendLinkHandler] = useRegistrationEmailResendingMutation()
  const { text } = useTranslation()
  const { query } = useRouter()
  const { code } = query

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

  const onResendLink = () => {
    const confirmCode = Array.isArray(code) ? code[0] : code

    resendLinkHandler({ code: confirmCode || '' })
      .unwrap()
      .then(() =>
        getToast({
          text: 'New link has been sent to your email!',
          variant: 'success',
          withClose: true,
        })
      )
      .catch(error => {
        checkConfirmationCodeError(error)
      })
  }

  return (
    <>
      <HeadMeta title={text.registrationConfirmationPage.title} />
      <main className={classNames.main}>
        {isSuccess && <ConfirmEmail />}
        {!isSuccess && <ExpiredLink onResendLink={onResendLink} />}
      </main>
    </>
  )
}

RegistrationConfirmationPage.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
