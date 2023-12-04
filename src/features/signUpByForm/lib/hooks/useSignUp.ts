import { useForm } from 'react-hook-form'

import { LocalesType, PASSWORD_PATTERN, USERNAME_PATTERN } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type Props = LocalesType['signUpPage']['formErrors']

const signUpSchema = (t: Props) =>
  z
    .object({
      email: z.string().email({ message: t.emailVerification }).trim(),
      password: z
        .string()
        .min(6, t.minPasswordLength)
        .max(20, t.maxPasswordLength)
        .regex(PASSWORD_PATTERN, t.passwordVerification)
        .trim(),
      passwordConfirmation: z.string().trim(),
      policyAgreement: z.boolean(),
      username: z
        .string()
        .min(6, t.minUserNameLength)
        .max(30, t.maxUserNameLength)
        .regex(USERNAME_PATTERN, t.userNameVerification)
        .trim(),
    })
    .refine(data => data.password === data.passwordConfirmation, {
      message: t.confirmPassword,
      path: ['passwordConfirmation'],
    })

export type SignUpFormValuesType = z.infer<ReturnType<typeof signUpSchema>>

export const useSignUp = (t: Props) =>
  useForm<SignUpFormValuesType>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
      policyAgreement: false,
      username: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(signUpSchema(t)),
  })
