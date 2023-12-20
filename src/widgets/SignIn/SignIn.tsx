import { SignInForm } from '@/features'
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

import s from './SignIn.module.scss'

export const SignIn = () => {
  const { text } = useTranslation()
  const t = text.signInPage

  const classNames = {
    card: s.formCard,
    formTitle: s.formTitle,
    providers: s.providers,
    questionText: s.questionText,
  }
  const loginByGoogle = () => {
    window.location.assign(GOOGLE_URL)
  }

  return (
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
      <SignInForm />
      <Typography className={classNames.questionText} variant={TypographyVariant.Regular_16}>
        {t.questionAboutAccount}
      </Typography>
      <Button as={Link} href={Routes.SIGN_UP} variant={ButtonVariant.LINK}>
        {t.signUpLink}
      </Button>
    </Card>
  )
}
