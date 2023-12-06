import { useState } from 'react'

import {
  Button,
  ButtonVariant,
  ControlledInput,
  Routes,
  Typography,
  TypographyVariant,
  useTranslation,
} from '@/shared'
import { Recaptcha } from '@/shared/ui/Recaptcha/Recaptcha'
import clsx from 'clsx'
import Link from 'next/link'

import s from './ForgotPasswordForm.module.scss'

import { ForgotPasswordFormValuesType, useForgotPasswordForm } from '../../lib'

export const ForgotPasswordForm = () => {
  const [isLinkWasSend, setIsLinkWasSend] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<null | string>(null)
  const { text } = useTranslation()
  const t = text.forgotPasswordPage.form
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForgotPasswordForm(text.forgotPasswordPage.formErrors)

  const classNames = {
    form: s.form,
    formInput(error?: string) {
      return clsx(s.formInput, error && s.formInputWithError)
    },
    instructionText: s.instructionText,
    instructionTextAfterSendLink: s.instructionTextAfterSendLink,
    link: s.link,
    sendActionButton: s.sendActionButton,
  }

  const onSubmitHandler = (data: ForgotPasswordFormValuesType) => {
    const newData = { ...data, token: recaptchaToken }

    console.log(newData)
    setIsLinkWasSend(true)
    reset()
  }

  const onRecaptchaVerify = (token: null | string) => {
    setRecaptchaToken(token)
  }

  return (
    <form className={classNames.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <ControlledInput
        className={classNames.formInput(errors.email?.message)}
        control={control}
        label={t.emailInputLabel}
        name={'email'}
      />
      <Typography className={classNames.instructionText} variant={TypographyVariant.Regular_14}>
        {t.instructionText}
      </Typography>
      {isLinkWasSend && (
        <Typography
          className={classNames.instructionTextAfterSendLink}
          variant={TypographyVariant.Regular_14}
        >
          {t.sendLinkText}
        </Typography>
      )}
      <Button
        className={classNames.sendActionButton}
        disabled={!isValid || !recaptchaToken}
        type={'submit'}
      >
        {!isLinkWasSend && t.buttonTextBeforeSendLink}
        {isLinkWasSend && t.buttonTextAfterSendLink}
      </Button>
      <Button
        as={Link}
        className={classNames.link}
        href={Routes.SIGN_IN}
        variant={ButtonVariant.LINK}
      >
        {t.link}
      </Button>
      {!isLinkWasSend && <Recaptcha onRecaptchaChange={onRecaptchaVerify} />}
    </form>
  )
}
