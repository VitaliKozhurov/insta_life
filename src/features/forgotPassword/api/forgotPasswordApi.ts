import { baseApi } from '@/shared'

export type ForgotPasswordRequestType = {
  email: string
}

const forgotPasswordApi = baseApi.injectEndpoints({
  endpoints: build => ({
    forgotPassword: build.mutation<void, ForgotPasswordRequestType>({
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/password-recovery',
      }),
    }),
  }),
})

export const { useForgotPasswordMutation } = forgotPasswordApi
