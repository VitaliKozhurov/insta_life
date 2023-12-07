import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_API_URL } from '../constants'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: () => ({}),
  reducerPath: 'baseApi',
})
