import { ControlledInput } from '@/shared/controlledUI'
import { ButtonVariant, TypographyVariant } from '@/shared/types'
import { Button, Typography } from '@/shared/ui'
import clsx from 'clsx'
import Link from 'next/link'

import s from './SignInForm.module.scss'

import { SignInFormValuesType, useSignInForm } from '../../lib'
export const SignInForm = () => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch,
  } = useSignInForm()

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
        label={'Email'}
        name={'email'}
      />
      <ControlledInput
        autoComplete={'off'}
        className={classNames.formInput(errors.password?.message)}
        control={control}
        label={'Password'}
        name={'password'}
        type={'password'}
      />
      <Typography
        as={Link}
        className={classNames.forgotText}
        href={'forgot-password'}
        variant={TypographyVariant.Regular_14}
      >
        Forgot password?
      </Typography>
      <Button disabled={!isValid} fullWidth variant={ButtonVariant.PRIMARY}>
        Sign In
      </Button>
    </form>
  )
}
