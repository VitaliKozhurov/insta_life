import { useForm } from 'react-hook-form'

import { PASSWORD_PATTERN, USERNAME_PATTERN } from '@/shared/constants'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const signUpSchema = z
  .object({
    email: z.string().email({ message: 'email' }).trim(),
    password: z.string().min(3, '3').max(20, '20').regex(PASSWORD_PATTERN, 'regex').trim(),
    passwordConfirmation: z
      .string()
      .min(3, '3')
      .max(20, '20')
      .regex(PASSWORD_PATTERN, 'regex')
      .trim(),
    policyAgreement: z.boolean().optional(),
    username: z.string().min(3, '3').max(30, '30').regex(USERNAME_PATTERN, 'regex').trim(),
  })
  .refine(data => data.password === data.passwordConfirmation, {
    message: 'Those passwords didn’t match. Try again.',
    path: ['passwordConfirmation'],
  })

export type SignUpFormValuesType = z.infer<typeof signUpSchema>

export const useSignUpForm = () =>
  useForm<SignUpFormValuesType>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
      policyAgreement: false,
      username: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(signUpSchema),
  })
