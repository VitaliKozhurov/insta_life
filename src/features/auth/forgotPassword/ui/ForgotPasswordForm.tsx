import { useState } from 'react'

import {
  Button,
  ButtonVariant,
  ControlledInput,
  Recaptcha,
  Routes,
  Typography,
  TypographyVariant,
  onSendFormErrorsHandlers,
  useForgotPasswordMutation,
  useTranslation,
} from '@/shared'
import clsx from 'clsx'
import Link from 'next/link'

import s from './ForgotPasswordForm.module.scss'

import { ForgotPasswordFormValuesType, useForgotPasswordForm } from '../lib'

type Props = {
  onSendFormData: (email: string) => void
}

export const ForgotPasswordForm = ({ onSendFormData }: Props) => {
  const [forgotPasswordHandler, { isLoading }] = useForgotPasswordMutation()
  const [isLinkWasSend, setIsLinkWasSend] = useState(false)
  const [isRecaptchaVerified, setRecaptchaVerified] = useState(false)
  const { text } = useTranslation()
  const t = text.forgotPasswordPage.form
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setError,
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

  const onSubmitHandler = (formData: ForgotPasswordFormValuesType) => {
    forgotPasswordHandler(formData)
      .unwrap()
      .then(() => {
        onSendFormData(formData.email)
        setIsLinkWasSend(true)
        reset()
      })
      .catch(error => onSendFormErrorsHandlers(error, setError))
  }

  const onRecaptchaVerify = (value: boolean) => {
    setRecaptchaVerified(value)
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
        disabled={!isValid || !isRecaptchaVerified}
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
      {!isLinkWasSend && <Recaptcha onRecaptchaVerify={onRecaptchaVerify} />}
    </form>
  )
}
