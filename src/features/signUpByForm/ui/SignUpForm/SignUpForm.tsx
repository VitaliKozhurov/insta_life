import { ControlledCheckbox, ControlledInput } from '@/shared/controlledUI'
import { ButtonVariant, TypographyVariant } from '@/shared/types'
import { Button, Typography } from '@/shared/ui'
import clsx from 'clsx'
import Link from 'next/link'

import s from './SignUpForm.module.scss'

import { SignUpFormValuesType, useSignUpForm } from '../../lib'

export const SignUpForm = () => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch,
  } = useSignUpForm()

  const classNames = {
    checkboxWrapper: s.checkboxWrapper,
    form: s.form,
    formInput(error?: string) {
      return clsx(s.formInput, error && s.formInputWithError)
    },
  }

  const onSubmitHandler = (data: SignUpFormValuesType) => {
    console.log(data)
    reset()
  }
  const isDisabledButton = !isValid || !watch('policyAgreement')

  return (
    <form className={classNames.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <ControlledInput
        className={classNames.formInput(errors.username?.message)}
        control={control}
        label={'Username'}
        name={'username'}
      />
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
      <ControlledInput
        autoComplete={'off'}
        className={classNames.formInput(errors.passwordConfirmation?.message)}
        control={control}
        label={'Password confirmation'}
        name={'passwordConfirmation'}
        type={'password'}
      />
      <div className={classNames.checkboxWrapper}>
        <ControlledCheckbox control={control} name={'policyAgreement'} />
        <Typography as={'span'} variant={TypographyVariant.Small_text}>
          I agree to the{' '}
          <Typography as={Link} href={'/term-of-service'} variant={TypographyVariant.Link_small}>
            Terms of Service
          </Typography>{' '}
          and{' '}
          <Typography as={Link} href={'privacy-policy'} variant={TypographyVariant.Link_small}>
            Privacy Policy
          </Typography>
        </Typography>
      </div>
      <Button disabled={isDisabledButton} fullWidth variant={ButtonVariant.PRIMARY}>
        Sign Up
      </Button>
    </form>
  )
}
