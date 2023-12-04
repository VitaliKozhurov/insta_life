import { useForm } from 'react-hook-form'

import { LocalesType, PASSWORD_PATTERN } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type Props = LocalesType['createNewPasswordPage']['formErrors']

const createNewPasswordSchema = (t: Props) =>
  z
    .object({
      newPassword: z
        .string()
        .min(6, t.minPasswordLength)
        .max(20, t.maxPasswordLength)
        .regex(PASSWORD_PATTERN, t.passwordVerification)
        .trim(),
      passwordConfirmation: z.string().trim(),
    })
    .refine(data => data.newPassword === data.passwordConfirmation, {
      message: t.confirmPassword,
      path: ['passwordConfirmation'],
    })

export type CreateNewPasswordValuesType = z.infer<ReturnType<typeof createNewPasswordSchema>>

export const useCreateNewPassword = (t: Props) =>
  useForm<CreateNewPasswordValuesType>({
    defaultValues: {
      newPassword: '',
      passwordConfirmation: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(createNewPasswordSchema(t)),
  })
