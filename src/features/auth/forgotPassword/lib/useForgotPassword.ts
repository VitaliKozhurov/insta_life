import { useForm } from 'react-hook-form'

import { LocalesType } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type Props = LocalesType['forgotPasswordPage']['formErrors']

const forgotPasswordSchema = (t: Props) =>
  z.object({
    email: z.string().email({ message: t.emailVerification }).trim(),
  })

export type ForgotPasswordFormValuesType = z.infer<ReturnType<typeof forgotPasswordSchema>>

export const useForgotPasswordForm = (t: Props) =>
  useForm<ForgotPasswordFormValuesType>({
    defaultValues: {
      email: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(forgotPasswordSchema(t)),
  })
