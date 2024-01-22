import {
  Button,
  ButtonVariant,
  ControlledCheckbox,
  ControlledInput,
  Routes,
  Trans,
  Typography,
  TypographyVariant,
  onSendFormErrorsHandlers,
  useLoader,
  useSignUpMutation,
  useTranslation,
} from '@/shared'
import clsx from 'clsx'
import Link from 'next/link'

import s from './SignUpForm.module.scss'

import { SignUpFormValuesType, useSignUp } from '../lib'

type Props = {
  onSendFormData: (email: string) => void
}

export const SignUpForm = ({ onSendFormData }: Props) => {
  const [signUpHandler, { isLoading }] = useSignUpMutation()

  useLoader(isLoading)
  const {
    text: { signUpPage: t },
  } = useTranslation()
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setError,
    trigger,
    watch,
  } = useSignUp(t.formErrors)

  const classNames = {
    checkboxWrapper: s.checkboxWrapper,
    form: s.form,
    formInput(error?: string) {
      return clsx(s.formInput, error && s.formInputWithError)
    },
  }

  const onSubmitHandler = (formData: SignUpFormValuesType) => {
    signUpHandler(formData)
      .unwrap()
      .then(() => {
        onSendFormData(formData.email)
        reset()
      })
      .catch(error => onSendFormErrorsHandlers(error, setError))
  }
  const isDisabledButton = !isValid || !watch('policyAgreement')

  return (
    <form className={classNames.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <ControlledInput
        className={classNames.formInput(errors.username?.message)}
        control={control}
        label={t.form.userNameInputLabel}
        name={'username'}
      />
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
      <ControlledInput
        autoComplete={'off'}
        className={classNames.formInput(errors.passwordConfirm?.message)}
        control={control}
        label={t.form.passwordConfirmationInputLabel}
        name={'passwordConfirm'}
        onChangeValue={() => trigger('passwordConfirm')}
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
                  href={Routes.TERMS_OF_SERVICE}
                  variant={TypographyVariant.Link_small}
                >
                  {t.form.service}
                </Typography>
              ),
              2: () => (
                <Typography
                  as={Link}
                  href={Routes.PRIVACY_POLICY}
                  variant={TypographyVariant.Link_small}
                >
                  {t.form.policy}
                </Typography>
              ),
            }}
            text={t.form.policyAgreement}
          />
        </Typography>
      </div>
      <Button disabled={isDisabledButton} fullWidth variant={ButtonVariant.PRIMARY}>
        {t.form.signUpBtn}
      </Button>
    </form>
  )
}
