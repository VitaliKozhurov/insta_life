import { Button, ControlledInput, Typography, TypographyVariant, useTranslation } from '@/shared'
import clsx from 'clsx'

import s from './CreateNewPasswordForm.module.scss'

import { CreateNewPasswordValuesType, useCreateNewPassword } from '../../lib'

export const CreateNewPasswordForm = () => {
  const {
    text: { createNewPasswordPage: t },
  } = useTranslation()
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useCreateNewPassword(t.formErrors)
  const classNames = {
    form: s.form,
    formInput(error?: string) {
      return clsx(s.formInput, error && s.formInputWithError)
    },
    instructionText: s.instructionText,
  }

  const onSubmitHandler = (data: CreateNewPasswordValuesType) => {
    console.log(data)
    reset()
  }

  return (
    <form className={classNames.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <ControlledInput
        className={classNames.formInput(errors.newPassword?.message)}
        control={control}
        label={t.form.newPasswordInputLabel}
        name={'newPassword'}
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
