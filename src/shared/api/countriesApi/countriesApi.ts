import { SelectOptions } from '@/shared'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { GetCitiesRequestType, GetCitiesResponseType } from './countriesApi.types'

const GET_COUNTRIES_URL = 'https://countriesnow.space/api/v0.1/countries'

export const countriesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: GET_COUNTRIES_URL,
  }),
  endpoints: build => ({
    getCities: build.mutation<SelectOptions[], GetCitiesRequestType>({
      query: body => ({
        body,
        method: 'POST',
        url: '/cities',
      }),
      transformResponse: (result: GetCitiesResponseType) => {
        if (result.error) {
          return []
        }

        return result.data
          .map(city => ({
            title: city,
            value: city,
          }))
          .sort((a, b) => {
            return a.title > b.title ? 1 : -1
          })
      },
    }),
  }),
  reducerPath: 'countriesApi',
})

export const { useGetCitiesMutation } = countriesApi
