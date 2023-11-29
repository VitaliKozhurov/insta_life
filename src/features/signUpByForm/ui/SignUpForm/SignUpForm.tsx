import { ControlledCheckbox, ControlledInput } from '@/shared/controlledUI'
import { ButtonVariant, TypographyVariant } from '@/shared/types'
import { Button, Typography } from '@/shared/ui'
import Link from 'next/link'

import s from './SignUpForm.module.scss'

import { SignUpFormValuesType, useSignUpForm } from '../../lib'

export const SignUpForm = () => {
  const { control, handleSubmit } = useSignUpForm()

  const classNames = {
    checkboxWrapper: s.checkboxWrapper,
  }
  const onSubmitHandler = (data: SignUpFormValuesType) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <ControlledInput control={control} label={'Username'} name={'username'} />
      <ControlledInput control={control} label={'Email'} name={'email'} />
      <ControlledInput control={control} label={'Password'} name={'password'} type={'password'} />
      <ControlledInput
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
      <Button fullWidth variant={ButtonVariant.PRIMARY}>
        Sign Up
      </Button>
    </form>
  )
}
