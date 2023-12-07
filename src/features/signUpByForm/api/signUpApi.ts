import { baseApi } from '@/shared'

export type SignUpRequestType = {
  email: string
  password: string
  passwordConfirm: string
  username: string
}

export type SignUpResponseType = {
  createdAt: string
  email: string
  id: string
  updatedAt: string
  username: string
}

const signUpApi = baseApi.injectEndpoints({
  endpoints: build => ({
    signUp: build.mutation<SignUpResponseType, SignUpRequestType>({
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/registration',
      }),
    }),
  }),
})

export const { useSignUpMutation } = signUpApi
