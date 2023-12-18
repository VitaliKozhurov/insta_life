import { baseApi } from '@/shared'

export type EmailConfirmationRequestType = {
  code: string
}

const registrationConfirmationApi = baseApi.injectEndpoints({
  endpoints: build => ({
    registrationConfirmation: build.mutation<void, EmailConfirmationRequestType>({
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/registration-confirmation',
      }),
    }),
  }),
})

export const { useRegistrationConfirmationMutation } = registrationConfirmationApi
