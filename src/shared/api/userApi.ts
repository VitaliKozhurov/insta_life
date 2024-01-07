import { baseApi } from './baseApi'

type AuthMeResponseType = {
  aboutMe: string
  avatarUrl: string
  city: string
  country: string
  createdAt: string
  dateOfBirth: string
  email: string
  firstName: string
  id: string
  lastName: string
  updatedAt: string
  username: string
}

export const userApi = baseApi.injectEndpoints({
  endpoints: build => ({
    me: build.query<AuthMeResponseType, void>({
      providesTags: ['Me'],
      query: () => ({
        method: 'GET',
        url: 'user/me',
      }),
    }),
  }),
})

export const { useMeQuery } = userApi
