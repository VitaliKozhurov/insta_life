import { useForm } from 'react-hook-form'

import {
  ABOUT_ME_PATTERN,
  USER_FIRST_LAST_NAME_PATTERN,
  USERNAME_PATTERN,
  UserProfileRequestType,
} from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const userProfileSchema = () =>
  z.object({
    aboutMe: z.string().trim().max(200, 'Error max length').regex(ABOUT_ME_PATTERN, 'Regex error'),
    city: z.string(),
    country: z.string(),
    firstName: z
      .string()
      .trim()
      .min(1, 'Error min length')
      .max(50, 'Error max length')
      .regex(USER_FIRST_LAST_NAME_PATTERN, 'Regex error'),
    lastName: z
      .string()
      .trim()
      .min(1, 'Error min length')
      .max(50, 'Error max length')
      .regex(USER_FIRST_LAST_NAME_PATTERN, 'Regex error'),
    username: z
      .string()
      .trim()
      .min(6, 'Error min length')
      .max(30, 'Error max length')
      .regex(USERNAME_PATTERN, 'regex error'),
  })

export type UserProfileFormValuesType = z.infer<ReturnType<typeof userProfileSchema>>

export const useProfileForm = (values: UserProfileRequestType) =>
  useForm<UserProfileFormValuesType>({
    mode: 'onTouched',
    resolver: zodResolver(userProfileSchema()),
    values: values,
  })
