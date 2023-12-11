import { useState } from 'react'

import { ForgotPasswordForm, ModalOnEmail } from '@/features'
import { Card, Typography, TypographyVariant, useTranslation } from '@/shared'

import s from './ForgotPassword.module.scss'
export const ForgotPassword = () => {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const {
    text: { forgotPasswordPage: t },
  } = useTranslation()
  const classNames = {
    root: s.root,
    title: s.title,
  }
  const onSendFormData = (email: string) => {
    setEmail(email)
    setOpen(true)
  }

  return (
    <>
      <ModalOnEmail email={email} onOpenChange={setOpen} open={open} />
      <Card className={s.root}>
        <Typography as={'h1'} className={classNames.title} variant={TypographyVariant.H1}>
          {t.title}
        </Typography>
        <ForgotPasswordForm onSendFormData={onSendFormData} />
      </Card>
    </>
  )
}
