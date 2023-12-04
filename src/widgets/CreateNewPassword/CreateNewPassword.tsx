import { CreateNewPasswordForm } from '@/features'
import { Card, Typography, TypographyVariant, useTranslation } from '@/shared'

import s from './CreateNewPassword.module.scss'
export const CreateNewPassword = () => {
  const {
    text: { createNewPasswordPage: t },
  } = useTranslation()

  const classNames = {
    root: s.root,
    title: s.title,
  }

  return (
    <Card className={classNames.root}>
      <Typography as={'h1'} className={classNames.title} variant={TypographyVariant.H1}>
        {t.title}
      </Typography>
      <CreateNewPasswordForm />
    </Card>
  )
}
