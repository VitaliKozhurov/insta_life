import { Button, Routes, Typography, TypographyVariant, useTranslation } from '@/shared'
import Image from 'next/image'
import Link from 'next/link'

import s from './ConfirmEmail.module.scss'

import successEmailConfirmation from '/public/confirm_email.png'

export const ConfirmEmail = () => {
  const { text } = useTranslation()
  const t = text.emailConfirmation
  const classNames = {
    imageWrapper: s.imageWrapper,
    link: s.link,
    root: s.root,
    text: s.text,
    title: s.title,
  }

  return (
    <section className={classNames.root}>
      <Typography as={'h1'} className={classNames.title} variant={TypographyVariant.H1}>
        {t.title}
      </Typography>
      <Typography className={classNames.text} variant={TypographyVariant.Regular_16}>
        {t.text}
      </Typography>
      <Button as={Link} className={classNames.link} href={Routes.SIGN_IN}>
        {t.signInLink}
      </Button>
      <div className={classNames.imageWrapper}>
        <Image
          alt={'Email confirmed'}
          priority
          src={successEmailConfirmation}
          style={{ height: '100%', objectFit: 'cover', width: '100%' }}
        />
      </div>
    </section>
  )
}
