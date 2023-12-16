import { Button, Typography, TypographyVariant, useTranslation } from '@/shared'
import Image from 'next/image'

import s from './ExpiredLink.module.scss'

import expiredVerificationLink from '/public/expired_time.png'

type Props = {
  onResendLink: () => void
}

export const ExpiredLink = ({ onResendLink }: Props) => {
  const { text } = useTranslation()
  const t = text.expiredLink
  const classNames = {
    imageWrapper: s.imageWrapper,
    resendButton: s.resendButton,
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
      <Button className={classNames.resendButton} onClick={onResendLink}>
        {t.resendActionButton}
      </Button>
      <div className={classNames.imageWrapper}>
        <Image
          alt={'Expired Link'}
          priority
          src={expiredVerificationLink}
          style={{ height: '100%', objectFit: 'cover', width: '100%' }}
        />
      </div>
    </section>
  )
}
