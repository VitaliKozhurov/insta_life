import { useForm } from 'react-hook-form'

import { LocalesType } from '@/shared/locales'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type Props = LocalesType['forgotPasswordPage']['formError']

const forgotPasswordSchema = (t: Props) =>
  z.object({
    email: z.string().email({ message: t.emailVerification }).trim(),
    recaptcha: z.literal(true),
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
