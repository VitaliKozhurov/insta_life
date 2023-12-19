import { baseApi } from '@/shared'

export type LoginByGoogleResponseType = {
  accessToken: string
}

type LoginByGoogleRequestType = {
  code: string
}

const loginByGoogleApi = baseApi.injectEndpoints({
  endpoints: build => ({
    loginByGoogle: build.query<LoginByGoogleResponseType, LoginByGoogleRequestType>({
      query: ({ code }) => ({
        method: 'GET',
        params: { code },
        url: 'auth/google',
      }),
    }),
  }),
})

export const { useLazyLoginByGoogleQuery } = loginByGoogleApi
