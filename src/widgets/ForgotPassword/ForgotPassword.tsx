import { ForgotPasswordForm } from '@/features'
import { Card, Typography, TypographyVariant, useTranslation } from '@/shared'

import s from './ForgotPassword.module.scss'
export const ForgotPassword = () => {
  const {
    text: { forgotPasswordPage: t },
  } = useTranslation()
  const classNames = {
    root: s.root,
    title: s.title,
  }

  return (
    <Card className={s.root}>
      <Typography as={'h1'} className={classNames.title} variant={TypographyVariant.H1}>
        {t.title}
      </Typography>
      <ForgotPasswordForm />
    </Card>
  )
}
