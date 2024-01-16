import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const GET_COUNTRIES_URL = 'https://countriesnow.space/api/v0.1/countries/info?returns=countries'

type GetCountriesResponseType = {
  data: {
    cities: string[]
    country: string
  }[]
  error: boolean
  msg: string
}

export const countriesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: GET_COUNTRIES_URL,
  }),
  endpoints: build => ({
    getCountries: build.query<GetCountriesResponseType, void>({
      query: () => ({
        method: 'GET',
        url: '',
      }),
    }),
  }),
  reducerPath: 'countriesApi',
})

export const { useGetCountriesQuery } = countriesApi
