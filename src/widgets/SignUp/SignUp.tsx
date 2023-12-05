import { useState } from 'react'

import { ModalOnEmail, SignUpForm } from '@/features'
import {
  Button,
  ButtonVariant,
  Card,
  GitHubIcon,
  GoogleIcon,
  Routes,
  Typography,
  TypographyVariant,
  useTranslation,
} from '@/shared'
import Link from 'next/link'

import s from './SignUp.module.scss'

export const SignUp = () => {
  const [email, setEmail] = useState('')
  const [open, setOpen] = useState(false)
  const { text } = useTranslation()
  const t = text.signUpPage

  const classNames = {
    card: s.formCard,
    formTitle: s.formTitle,
    providers: s.providers,
    questionText: s.questionText,
  }
  const onSendFormData = (email: string) => {
    setEmail(email)
    setOpen(true)
  }

  return (
    <>
      <ModalOnEmail email={email} onOpenChange={setOpen} open={open} />
      <Card className={classNames.card}>
        <Typography as={'h1'} className={classNames.formTitle} variant={TypographyVariant.H1}>
          {t.title}
        </Typography>
        <div className={classNames.providers}>
          <Link href={'https://accounts.google.com/o/oauth2/v2/auth'} target={'_blank'}>
            <GoogleIcon />
          </Link>
          <Link href={'https://github.com/login/oauth/authorize'} target={'_blank'}>
            <GitHubIcon />
          </Link>
        </div>
        <SignUpForm onSendFormData={onSendFormData} />
        <Typography className={classNames.questionText} variant={TypographyVariant.Regular_16}>
          {t.questionAboutAccount}
        </Typography>
        <Button as={Link} href={Routes.SIGN_IN} variant={ButtonVariant.LINK}>
          {t.signInLink}
        </Button>
      </Card>
    </>
  )
}
