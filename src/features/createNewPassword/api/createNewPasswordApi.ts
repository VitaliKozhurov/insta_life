import { baseApi } from '@/shared'
export type CreateNewPasswordRequestType = {
  password: string
  passwordConfirmation: string
  recoveryCode: string
}

const createNewPasswordApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createNewPassword: build.mutation<void, CreateNewPasswordRequestType>({
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/new-password',
      }),
    }),
  }),
})

export const { useCreateNewPasswordMutation } = createNewPasswordApi
