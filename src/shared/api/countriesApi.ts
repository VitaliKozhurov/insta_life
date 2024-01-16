import { SelectOptions } from '@/shared'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const GET_COUNTRIES_URL = 'https://countriesnow.space/api/v0.1/countries'

type BaseResponseType<T> = {
  data: T
  error: boolean
  msg: string
}
type GetCountriesResponseType = BaseResponseType<{ name: string }[]>
type GetCitiesResponseType = BaseResponseType<string[]>
type GetCitiesRequestType = {
  country: string
}

export const countriesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: GET_COUNTRIES_URL,
  }),
  endpoints: build => ({
    getCities: build.mutation<any, GetCitiesRequestType>({
      query: body => ({
        body,
        method: 'POST',
        url: '/cities',
      }),
      transformResponse: (result: GetCitiesResponseType) => {
        if (result.error) {
          return []
        }

        return result.data.map(city => ({
          title: city,
          value: city,
        }))
      },
    }),
    getCountries: build.query<SelectOptions[], void>({
      query: () => ({
        method: 'GET',
        url: '/info?returns=countries',
      }),
      transformResponse: (result: GetCountriesResponseType) => {
        if (result.error) {
          return []
        }

        return result.data.map(country => ({
          title: country.name,
          value: country.name,
        }))
      },
    }),
  }),
  reducerPath: 'countriesApi',
})

export const { useGetCitiesMutation, useGetCountriesQuery } = countriesApi
