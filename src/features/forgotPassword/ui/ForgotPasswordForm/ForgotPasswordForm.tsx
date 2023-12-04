import { useState } from 'react'

import {
  Button,
  ButtonVariant,
  ControlledCheckbox,
  ControlledInput,
  RecaptchaIcon,
  Routes,
  Typography,
  TypographyVariant,
  useTranslation,
} from '@/shared'
import clsx from 'clsx'
import Link from 'next/link'

import s from './ForgotPasswordForm.module.scss'

import { ForgotPasswordFormValuesType, useForgotPasswordForm } from '../../lib'

export const ForgotPasswordForm = () => {
  const [isLinkWasSend, setIsLinkWasSend] = useState(false)
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
    recaptchaWrapper: s.recaptchaWrapper,
    sendActionButton: s.sendActionButton,
  }

  const onSubmitHandler = (data: ForgotPasswordFormValuesType) => {
    console.log(data)
    setIsLinkWasSend(true)
    reset()
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
      <Button className={classNames.sendActionButton} disabled={!isValid} type={'submit'}>
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
      {!isLinkWasSend && (
        <div className={classNames.recaptchaWrapper}>
          <ControlledCheckbox control={control} label={t.checkForRobot} name={'recaptcha'} />
          <RecaptchaIcon />
        </div>
      )}
    </form>
  )
}
