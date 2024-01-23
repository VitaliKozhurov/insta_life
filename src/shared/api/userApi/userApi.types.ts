import { Nullable } from '@/shared'

export type UserResponseType = {
  aboutMe: Nullable<string>
  avatarUrl: Nullable<string>
  city: Nullable<string>
  country: Nullable<string>
  createdAt: string
  dateOfBirth: Nullable<string>
  email: string
  firstName: Nullable<string>
  id: string
  lastName: Nullable<string>
  updatedAt: string
  username: string
}

export type UserProfileRequestType = {
  aboutMe?: string
  city?: string
  country?: string
  dateOfBirth?: Date
  firstName: string
  lastName: string
  username: string
}
