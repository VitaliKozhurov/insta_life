import {
  Button,
  ButtonVariant,
  ControlledInput,
  Routes,
  Typography,
  TypographyVariant,
  onSendFormErrorsHandlers,
  saveToLocalStorage,
  useSignInMutation,
  useTranslation,
} from '@/shared'
import { useLoader } from '@/shared/lib/hooks/useLoader'
import clsx from 'clsx'
import Link from 'next/link'

import s from './SignInForm.module.scss'

import { SignInFormValuesType, useSignIn } from '../lib'

export const SignInForm = () => {
  const [signInHandler, { isLoading }] = useSignInMutation()

  useLoader(isLoading)
  const {
    router,
    text: { signInPage: t },
  } = useTranslation()
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    setError,
  } = useSignIn(t.formErrors)

  const classNames = {
    forgotText: s.forgotText,
    form: s.form,
    formInput(error?: string) {
      return clsx(s.formInput, error && s.formInputWithError)
    },
  }

  const onSubmitHandler = (formData: SignInFormValuesType) => {
    signInHandler(formData)
      .unwrap()
      .then(data => {
        saveToLocalStorage('token', data.accessToken)
        router.push(Routes.HOME)
      })
      .catch(error => onSendFormErrorsHandlers(error, setError, 'password'))
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
