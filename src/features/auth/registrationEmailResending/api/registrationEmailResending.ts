import { baseApi } from '@/shared'

export type RegistrationEmailResendingRequestType = {
  code: string
}

const registrationEmailResendingApi = baseApi.injectEndpoints({
  endpoints: build => ({
    registrationEmailResending: build.mutation<void, RegistrationEmailResendingRequestType>({
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/registration-email-resending',
      }),
    }),
  }),
})

export const { useRegistrationEmailResendingMutation } = registrationEmailResendingApi
