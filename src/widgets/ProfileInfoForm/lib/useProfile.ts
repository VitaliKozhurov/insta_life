import {
  profileFormDataCreator,
  useGetCitiesMutation,
  useMeQuery,
  useUpdateUserProfileMutation,
} from '@/shared'

export const useProfile = () => {
  const { data } = useMeQuery()
  const formData = profileFormDataCreator(data)
  const [updateProfile] = useUpdateUserProfileMutation()
  const [
    getCitiesByCountry,
    {
      data: citiesOptions = [{ title: formData.city, value: formData.city }],
      isLoading: citiesLoading,
    },
  ] = useGetCitiesMutation()

  return {
    citiesLoading,
    citiesOptions,
    formData,
    getCitiesByCountry,
    updateProfile,
  }
}
