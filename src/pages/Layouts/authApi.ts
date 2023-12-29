import { getFromLocalStorage } from '@/shared'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// test
export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
    prepareHeaders: headers => {
      const token = getFromLocalStorage('token')

      if (token) {
        headers.set('authorization', `Bearer ${token}`)

        return headers
      }
    },
  }),
  endpoints: builder => ({
    authMe: builder.query<{ isAuth: boolean }, void>({
      query: () => `auth/me`,
    }),
  }),
  reducerPath: 'authApi',
})

export const { useAuthMeQuery } = authApi
