import {
  Button,
  ButtonVariant,
  ControlledInput,
  Routes,
  Typography,
  TypographyVariant,
  useTranslation,
} from '@/shared'
import clsx from 'clsx'
import Link from 'next/link'

import s from './SignInForm.module.scss'

import { SignInFormValuesType, useSignInForm } from '../../lib'

export const SignInForm = () => {
  const {
    text: { signInPage: t },
  } = useTranslation()
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useSignInForm(t.formErrors)

  const classNames = {
    forgotText: s.forgotText,
    form: s.form,
    formInput(error?: string) {
      return clsx(s.formInput, error && s.formInputWithError)
    },
  }

  const onSubmitHandler = (data: SignInFormValuesType) => {
    console.log(data)
    reset()
  }

  return (
    <form className={classNames.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <ControlledInput
        className={classNames.formInput(errors.email?.message)}
        control={control}
        label={t.form.emailInputLabel}
        name={'email'}
      />
      <ControlledInput
        autoComplete={'off'}
        className={classNames.formInput(errors.password?.message)}
        control={control}
        label={t.form.passwordInputLabel}
        name={'password'}
        type={'password'}
      />
      <Typography
        as={Link}
        className={classNames.forgotText}
        href={Routes.FORGOT_PASSWORD}
        variant={TypographyVariant.Regular_14}
      >
        {t.form.questionAboutPassword}
      </Typography>
      <Button disabled={!isValid} fullWidth variant={ButtonVariant.PRIMARY}>
        {t.form.signInBtn}
      </Button>
    </form>
  )
}
