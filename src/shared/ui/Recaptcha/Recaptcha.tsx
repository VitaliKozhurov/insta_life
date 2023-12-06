import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import { Nullable, Typography, TypographyVariant, useTranslation } from '@/shared'
import clsx from 'clsx'

import s from './Recaptcha.module.scss'

type Props = {
  onRecaptchaChange: (token: Nullable<string>) => void
}

export const Recaptcha = ({ onRecaptchaChange }: Props) => {
  const [error, setError] = useState(false)
  const {
    router: { locale },
    text: { recaptcha: t },
  } = useTranslation()
  const recaptchaLocale = locale === 'ru' ? 'ru-Ru' : 'en-GB'

  const onChangeHandler = (token: Nullable<string>) => {
    if (token) {
      setError(false)
      onRecaptchaChange(token)
    }
  }

  const onErrorHandler = () => {
    setError(true)
  }

  return (
    <div className={clsx(s.root, error && s.error)}>
      <ReCAPTCHA
        hl={recaptchaLocale}
        onChange={onChangeHandler}
        onErrored={onErrorHandler}
        sitekey={`${process.env.NEXT_PUBLIC_SITE_KEY as string}`}
        size={'normal'}
        theme={'dark'}
      />
      {error && (
        <Typography as={'span'} className={s.errorText} variant={TypographyVariant.ERROR}>
          {t.errorText}
        </Typography>
      )}
    </div>
  )
}
