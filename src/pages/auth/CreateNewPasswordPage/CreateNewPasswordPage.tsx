import { ReactElement, useState } from 'react'

import { ModalOnEmail } from '@/features'
import { RootLayout } from '@/pages'
import {
  HeadMeta,
  checkConfirmationCodeError,
  usePasswordRecoveryResendingMutation,
  useTranslation,
} from '@/shared'
import { CreateNewPassword, ExpiredLink } from '@/widgets'
import { useRouter } from 'next/router'

import s from './CreateNewPassword.module.scss'

export const CreateNewPasswordPage = () => {
  const [resendLinkHandler] = usePasswordRecoveryResendingMutation()
  const [isErrorFetch, setIsErrorFetch] = useState(false)
  const [open, setOpen] = useState(false)
  const { text } = useTranslation()
  const router = useRouter()
  const { code } = router.query

  const classNames = {
    main: s.main,
  }
  const onResendLink = () => {
    const confirmCode = Array.isArray(code) ? code[0] : code

    resendLinkHandler({ code: confirmCode || '' })
      .unwrap()
      .then(() => setOpen(true))
      .catch(error => {
        checkConfirmationCodeError(error)
      })
  }

  return (
    <>
      <HeadMeta title={text.createNewPasswordPage.title} />
      <main className={classNames.main}>
        <ModalOnEmail onOpenChange={setOpen} open={open} />
        {!isErrorFetch && <CreateNewPassword setIsErrorFetch={setIsErrorFetch} />}
        {isErrorFetch && <ExpiredLink onResendLink={onResendLink} />}
      </main>
    </>
  )
}

CreateNewPasswordPage.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
