import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import { useTranslation } from '@/shared'

import s from './Recaptcha.module.scss'

type Props = {
  onRecaptchaChange: (token: null | string) => void
}

export const Recaptcha = ({ onRecaptchaChange }: Props) => {
  const {
    router: { locale },
  } = useTranslation()
  const recaptchaLocale = locale === 'ru' ? 'ru-Ru' : 'en-GB'

  return (
    <div className={s.root}>
      <ReCAPTCHA
        hl={recaptchaLocale}
        onChange={onRecaptchaChange}
        sitekey={`${process.env.NEXT_PUBLIC_SITE_KEY as string}`}
        size={'normal'}
        theme={'dark'}
      />
    </div>
  )
}
