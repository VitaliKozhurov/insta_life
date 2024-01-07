import {
  Button,
  ControlledInput,
  Routes,
  Typography,
  TypographyVariant,
  checkRecoveryCodeError,
  onAuthErrorsHandler,
  useCreateNewPasswordMutation,
  useTranslation,
} from '@/shared'
import clsx from 'clsx'
import { useRouter } from 'next/router'

import s from './CreateNewPasswordForm.module.scss'

import { CreateNewPasswordValuesType, useCreateNewPassword } from '../lib'

type Props = {
  setIsErrorFetch: (value: boolean) => void
}

export const CreateNewPasswordForm = ({ setIsErrorFetch }: Props) => {
  const [createNewPasswordHandler] = useCreateNewPasswordMutation()
  const { query } = useRouter()
  const { code } = query
  const {
    router,
    text: { createNewPasswordPage: t },
  } = useTranslation()
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    setError,
  } = useCreateNewPassword(t.formErrors)
  const classNames = {
    form: s.form,
    formInput(error?: string) {
      return clsx(s.formInput, error && s.formInputWithError)
    },
    instructionText: s.instructionText,
  }

  const onSubmitHandler = (formData: CreateNewPasswordValuesType) => {
    const recoveryCode = Array.isArray(code) ? code[0] : code
    const requestData = { ...formData, recoveryCode: recoveryCode || '' }

    createNewPasswordHandler(requestData)
      .unwrap()
      .then(() => router.push(Routes.SIGN_IN))
      .catch(error => {
        if (checkRecoveryCodeError(error)) {
          setIsErrorFetch(true)
        } else {
          onAuthErrorsHandler(error, setError)
        }
      })
  }

  return (
    <form className={classNames.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <ControlledInput
        className={classNames.formInput(errors.password?.message)}
        control={control}
        label={t.form.newPasswordInputLabel}
        name={'password'}
        type={'password'}
      />
      <ControlledInput
        className={classNames.formInput(errors.passwordConfirmation?.message)}
        control={control}
        label={t.form.passwordConfirmationInputLabel}
        name={'passwordConfirmation'}
        type={'password'}
      />
      <Typography className={classNames.instructionText} variant={TypographyVariant.Regular_14}>
        {t.form.instructionAboutPasswordLength}
      </Typography>
      <Button disabled={!isValid} type={'submit'}>
        {t.form.createNewPasswordBtn}
      </Button>
    </form>
  )
}
