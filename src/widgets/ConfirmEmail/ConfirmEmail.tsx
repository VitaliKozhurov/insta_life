import { Routes, TypographyVariant } from '@/shared/types'
import { Button, Typography } from '@/shared/ui'
import Image from 'next/image'
import Link from 'next/link'

import s from './ConfirmEmail.module.scss'

import successEmailConfirmation from '/public/confirm_email.png'

export const ConfirmEmail = () => {
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
        Congratulations!
      </Typography>
      <Typography className={classNames.text} variant={TypographyVariant.Regular_16}>
        Your email has been confirmed
      </Typography>
      <Button as={Link} className={classNames.link} href={Routes.SIGN_IN}>
        Sign In
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
