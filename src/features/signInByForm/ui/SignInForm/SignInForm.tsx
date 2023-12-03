import { ControlledInput } from '@/shared/controlledUI'
import { LocalesType } from '@/shared/locales'
import { ButtonVariant, TypographyVariant } from '@/shared/types'
import { Button, Typography } from '@/shared/ui'
import clsx from 'clsx'
import Link from 'next/link'

import s from './SignInForm.module.scss'

import { SignInFormValuesType, useSignInForm } from '../../lib'

type Props = {
  formErrors: LocalesType['signInPage']['formErrors']
  formText: LocalesType['signInPage']['form']
}

export const SignInForm = ({ formErrors, formText }: Props) => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useSignInForm(formErrors)

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
        label={formText.emailInputLabel}
        name={'email'}
      />
      <ControlledInput
        autoComplete={'off'}
        className={classNames.formInput(errors.password?.message)}
        control={control}
        label={formText.passwordInputLabel}
        name={'password'}
        type={'password'}
      />
      <Typography
        as={Link}
        className={classNames.forgotText}
        href={'forgot-password'}
        variant={TypographyVariant.Regular_14}
      >
        {formText.questionAboutPassword}
      </Typography>
      <Button disabled={!isValid} fullWidth variant={ButtonVariant.PRIMARY}>
        {formText.signInBtn}
      </Button>
    </form>
  )
}
