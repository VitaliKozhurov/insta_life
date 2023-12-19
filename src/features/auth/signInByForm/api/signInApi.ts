import { baseApi } from '@/shared'

export type SignInRequestType = {
  email: string
  password: string
}

export type SignInResponseType = {
  accessToken: string
}

const signInApi = baseApi.injectEndpoints({
  endpoints: build => ({
    signIn: build.mutation<SignInResponseType, SignInRequestType>({
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/login',
      }),
    }),
  }),
})

export const { useSignInMutation } = signInApi
