import { SelectOptions } from '@/shared'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const GET_COUNTRIES_URL = 'https://countriesnow.space/api/v0.1/countries/info?returns=countries'

type GetCountriesResponseType = {
  data: { name: string }[]
  error: boolean
  msg: string
}

export const countriesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: GET_COUNTRIES_URL,
  }),
  endpoints: build => ({
    getCountries: build.query<SelectOptions[], void>({
      query: () => ({
        method: 'GET',
        url: '',
      }),
      transformResponse: (result: GetCountriesResponseType) => {
        if (result.error) {
          return []
        }

        return result.data.map(country => ({
          title: country.name,
          value: country.name.toLowerCase(),
        }))
      },
    }),
  }),
  reducerPath: 'countriesApi',
})

export const { useGetCountriesQuery } = countriesApi
