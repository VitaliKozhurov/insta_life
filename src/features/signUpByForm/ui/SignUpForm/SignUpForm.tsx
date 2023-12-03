import { ControlledCheckbox, ControlledInput } from '@/shared/controlledUI'
import { LocalesType, Trans } from '@/shared/locales'
import { ButtonVariant, TypographyVariant } from '@/shared/types'
import { Button, Typography } from '@/shared/ui'
import clsx from 'clsx'
import Link from 'next/link'

import s from './SignUpForm.module.scss'

import { SignUpFormValuesType, useSignUpForm } from '../../lib'

type Props = {
  formErrors: LocalesType['signUpPage']['formErrors']
  formText: LocalesType['signUpPage']['form']
}
export const SignUpForm = ({ formErrors, formText }: Props) => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch,
  } = useSignUpForm(formErrors)

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
        label={formText.userNameInputLabel}
        name={'username'}
      />
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
      <ControlledInput
        autoComplete={'off'}
        className={classNames.formInput(errors.passwordConfirmation?.message)}
        control={control}
        label={formText.passwordConfirmationInputLabel}
        name={'passwordConfirmation'}
        type={'password'}
      />
      <div className={classNames.checkboxWrapper}>
        <ControlledCheckbox control={control} name={'policyAgreement'} />
        <Typography as={'span'} variant={TypographyVariant.Small_text}>
          <Trans
            tags={{
              1: () => (
                <Typography
                  as={Link}
                  href={'/term-of-service'}
                  variant={TypographyVariant.Link_small}
                >
                  {formText.service}
                </Typography>
              ),
              2: () => (
                <Typography
                  as={Link}
                  href={'privacy-policy'}
                  variant={TypographyVariant.Link_small}
                >
                  {formText.policy}
                </Typography>
              ),
            }}
            text={formText.policyAgreement}
          />
        </Typography>
      </div>
      <Button disabled={isDisabledButton} fullWidth variant={ButtonVariant.PRIMARY}>
        {formText.signUpBtn}
      </Button>
    </form>
  )
}
