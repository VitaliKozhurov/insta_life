import { ControlledInput } from '@/shared/controlledUI'
import { useTranslation } from '@/shared/lib'
import { TypographyVariant } from '@/shared/types'
import { Button, Typography } from '@/shared/ui'

import { useCreateNewPassword } from '../lib'

export const CreateNewPasswordForm = () => {
  const {
    text: { createNewPasswordPage: t },
  } = useTranslation()
  const { control } = useCreateNewPassword(t.formErrors)

  return (
    <form>
      <ControlledInput
        control={control}
        label={t.form.newPasswordInputLabel}
        name={'newPassword'}
      />
      <ControlledInput
        control={control}
        label={t.form.passwordConfirmationInputLabel}
        name={'passwordConfirmation'}
      />
      <Typography variant={TypographyVariant.Regular_14}>
        {t.form.instructionAboutPasswordLength}
      </Typography>
      <Button type={'submit'}>{t.form.createNewPasswordBtn}</Button>
    </form>
  )
}
