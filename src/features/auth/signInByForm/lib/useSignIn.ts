import { useForm } from 'react-hook-form'

import { LocalesType, PASSWORD_PATTERN } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type Props = LocalesType['signInPage']['formErrors']

const signInSchema = (t: Props) =>
  z.object({
    email: z.string().email({ message: t.emailVerification }).trim(),
    password: z
      .string()
      .min(6, t.minPasswordLength)
      .max(20, t.maxPasswordLength)
      .regex(PASSWORD_PATTERN, t.passwordVerification)
      .trim(),
  })

export type SignInFormValuesType = z.infer<ReturnType<typeof signInSchema>>

export const useSignIn = (t: Props) =>
  useForm<SignInFormValuesType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(signInSchema(t)),
  })
