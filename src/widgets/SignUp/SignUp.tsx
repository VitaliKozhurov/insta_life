import { SignUpForm } from '@/features'
import { GitHubIcon, GoogleIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/lib'
import { ButtonVariant, TypographyVariant } from '@/shared/types'
import { Button, Card, Typography } from '@/shared/ui'
import Link from 'next/link'

import s from './SignUp.module.scss'

export const SignUp = () => {
  const { text } = useTranslation()
  const t = text.signUpPage

  const classNames = {
    card: s.formCard,
    formTitle: s.formTitle,
    providers: s.providers,
    questionText: s.questionText,
  }

  return (
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
      <SignUpForm formErrors={t.formErrors} formText={t.form} />
      <Typography className={classNames.questionText} variant={TypographyVariant.Regular_16}>
        {t.questionAboutAccount}
      </Typography>
      <Button as={Link} href={'sign-in'} variant={ButtonVariant.LINK}>
        {t.signInLink}
      </Button>
    </Card>
  )
}
