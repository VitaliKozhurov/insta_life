import { baseApi } from '@/shared'

export type SignInRequestType = {
  email: string
  password: string
}

export type SignInResponseType = {
  token: string
}

const signInApi = baseApi.injectEndpoints({
  endpoints: build => ({
    signUp: build.mutation<SignInResponseType, SignInRequestType>({
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/login',
      }),
    }),
  }),
})

export const { useSignUpMutation } = signInApi
