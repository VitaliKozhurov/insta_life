import {
  profileFormDataCreator,
  useMeQuery,
  useTranslation,
  useUpdateUserProfileMutation,
} from '@/shared'

export const useProfile = () => {
  const { text } = useTranslation()
  const { profileInfoForm, profileInfoFormErrors, profileNotifications } = text.profilePage.general
  const { data } = useMeQuery()
  const formData = profileFormDataCreator(data)
  const [updateProfile, { isLoading }] = useUpdateUserProfileMutation()

  return {
    formData,
    formErrorsText: profileInfoFormErrors,
    formNotificationsText: profileNotifications,
    formText: profileInfoForm,
    loadingOnUpdate: isLoading,
    updateProfile,
  }
}
