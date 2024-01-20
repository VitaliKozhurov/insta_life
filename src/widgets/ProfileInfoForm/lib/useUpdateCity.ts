import { useEffect, useRef } from 'react'

import { useGetCitiesMutation } from '@/shared'

import { UserProfileFormValuesType } from './useProfileForm'

type Props = {
  country: string
  setValue: (name: keyof UserProfileFormValuesType, value: string) => void
}

export const useUpdateCity = ({ country, setValue }: Props) => {
  const [getCitiesByCountry, { data: citiesOptions = [], isLoading: citiesLoading }] =
    useGetCitiesMutation()
  const renderCount = useRef(0)

  useEffect(() => {
    if (!country) {
      return
    }
    renderCount.current && setValue('city', '')
    if (!renderCount.current) {
      renderCount.current += 1
    }

    getCitiesByCountry({ country })

    return () => {}
  }, [country])

  return { citiesLoading, citiesOptions }
}
