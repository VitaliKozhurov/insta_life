import { getFromLocalStorage } from '@/shared'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_API_URL } from '../constants'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    credentials: 'include',
    prepareHeaders: headers => {
      const token = getFromLocalStorage('token')

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
    },
  }),
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Me'],
})
