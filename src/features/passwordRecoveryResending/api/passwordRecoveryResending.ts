import { baseApi } from '@/shared'

export type PasswordRecoveryResendingRequestType = {
  code: string
}

const passwordRecoveryResendingApi = baseApi.injectEndpoints({
  endpoints: build => ({
    passwordRecoveryResending: build.mutation<void, PasswordRecoveryResendingRequestType>({
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/password-recovery-resending',
      }),
    }),
  }),
})

export const { usePasswordRecoveryResendingMutation } = passwordRecoveryResendingApi
