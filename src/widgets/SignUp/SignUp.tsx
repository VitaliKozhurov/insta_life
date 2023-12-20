import { useState } from 'react'

import { ModalOnEmail, SignUpForm } from '@/features'
import {
  Button,
  ButtonVariant,
  Card,
  GOOGLE_URL,
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
  const loginByGoogle = () => {
    window.location.assign(GOOGLE_URL)
  }

  return (
    <>
      <ModalOnEmail email={email} onOpenChange={setOpen} open={open} />
      <Card className={classNames.card}>
        <Typography as={'h1'} className={classNames.formTitle} variant={TypographyVariant.H1}>
          {t.title}
        </Typography>
        <div className={classNames.providers}>
          <button onClick={loginByGoogle}>
            <GoogleIcon />
          </button>
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
