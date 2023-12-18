import { ReactElement, useState } from 'react'

import { usePasswordRecoveryResendingMutation } from '@/features'
import { RootLayout } from '@/pages'
import { HeadMeta, Modal, Routes, useTranslation } from '@/shared'
import { CreateNewPassword, ExpiredLink } from '@/widgets'
import { Router, useRouter } from 'next/router'

import s from './CreateNewPassword.module.scss'

export const CreateNewPasswordPage = () => {
  const [resendLinkHandler] = usePasswordRecoveryResendingMutation()
  const [isErrorFetch, setIsErrorFetch] = useState(false)
  const { text } = useTranslation()
  const router = useRouter()
  const { code } = router.query

  const classNames = {
    main: s.main,
  }
  const onResendLink = () => {
    const confirmCode = Array.isArray(code) ? code[0] : code

    resendLinkHandler({ code: confirmCode || '' })
  }

  return (
    <>
      <HeadMeta title={text.pageTitle.createNewPassword} />
      <main className={classNames.main}>
        <Modal onOpenChange={} open={} title={} />
        {!isErrorFetch && <CreateNewPassword setIsErrorFetch={setIsErrorFetch} />}
        {isErrorFetch && <ExpiredLink onResendLink={onResendLink} />}
      </main>
    </>
  )
}

CreateNewPasswordPage.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
