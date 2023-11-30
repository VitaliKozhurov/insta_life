import { useForm } from 'react-hook-form'

import { PASSWORD_PATTERN, USERNAME_PATTERN } from '@/shared/constants'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const signUpSchema = z
  .object({
    email: z
      .string()
      .email({ message: 'The email must match the format example@example.com' })
      .trim(),
    password: z
      .string()
      .min(6, 'Minimum number of characters 6')
      .max(20, 'Maximum number of characters 20')
      .regex(
        PASSWORD_PATTERN,
        'Password must contain 0-9, a-z, A-Z, ! " # $ % & \' () * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~'
      )
      .trim(),
    passwordConfirmation: z.string().trim(),
    policyAgreement: z.boolean(),
    username: z
      .string()
      .min(6, 'Minimum number of characters 6')
      .max(30, 'Maximum number of characters 30')
      .regex(USERNAME_PATTERN, 'regex')
      .trim(),
  })
  .refine(data => data.password === data.passwordConfirmation, {
    message: 'Password must match',
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
    mode: 'onTouched',
    resolver: zodResolver(signUpSchema),
  })
