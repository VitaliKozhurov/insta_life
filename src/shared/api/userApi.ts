import { getFileFromFormData } from '@/shared'

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
    deleteAvatar: build.mutation<void, void>({
      invalidatesTags: ['Me'],
      // async onQueryStarted(_, { dispatch, queryFulfilled }) {
      //   const result = dispatch(userApi.util.updateQueryData('me', _, draft => draft))
      //
      //   try {
      //     const { data: createdPost } = await queryFulfilled
      //
      //     // dispatch(userApi.util.invalidateTags(['Me']))
      //   } catch {
      //     result.undo()
      //   }
      // },
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

export const { useDeleteAvatarMutation, useMeQuery, useUploadAvatarMutation } = userApi
