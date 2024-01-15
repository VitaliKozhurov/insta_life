import { Nullable, getFileFromFormData } from '@/shared'

import { baseApi } from './baseApi'

type AuthMeResponseType = {
  aboutMe: Nullable<string>
  avatarUrl: Nullable<string>
  city: Nullable<string>
  country: Nullable<string>
  createdAt: string
  dateOfBirth: Nullable<string>
  email: string
  firstName: Nullable<string>
  id: string
  lastName: Nullable<string>
  updatedAt: string
  username: string
}

export type UserProfileRequestType = {
  aboutMe?: string
  city?: string
  country?: string
  dateOfBirth?: Date
  firstName: string
  lastName: string
  username: string
}

export const userApi = baseApi.injectEndpoints({
  endpoints: build => ({
    deleteAvatar: build.mutation<void, void>({
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const result = dispatch(
          userApi.util.updateQueryData('me', _, draft => {
            draft.avatarUrl = ''
          })
        )

        try {
          await queryFulfilled
        } catch {
          result.undo()
        }
      },
      query: body => ({
        body,
        method: 'DELETE',
        url: 'user/avatar',
      }),
    }),
    me: build.query<AuthMeResponseType, void>({
      providesTags: ['Me'],
      query: () => ({
        method: 'GET',
        url: 'user/me',
      }),
    }),
    updateUserProfile: build.mutation<AuthMeResponseType, UserProfileRequestType>({
      invalidatesTags: ['Me'],
      query: body => ({
        body,
        method: 'PUT',
        url: 'user',
      }),
    }),
    uploadAvatar: build.mutation<void, FormData>({
      invalidatesTags: ['Me'],
      async onQueryStarted(body: FormData, { dispatch, queryFulfilled }) {
        let avatarUrl = ''
        const patchResult = dispatch(
          userApi.util.updateQueryData('me', undefined, draft => {
            const avatar = getFileFromFormData(body.get('file'))

            if (avatar) {
              avatarUrl = URL.createObjectURL(avatar)
            }
            draft.avatarUrl = avatarUrl
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        } finally {
          URL.revokeObjectURL(avatarUrl)
        }
      },
      query: body => ({
        body,
        method: 'POST',
        url: 'user/avatar',
      }),
    }),
  }),
})

export const {
  useDeleteAvatarMutation,
  useMeQuery,
  useUpdateUserProfileMutation,
  useUploadAvatarMutation,
} = userApi
