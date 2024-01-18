import { useEffect, useRef } from 'react'

import { UserProfileFormValuesType } from './useProfileForm'

type Props = {
  country: string
  getCitiesByCountry: ({ country }: { country: string }) => void
  setValue: (name: keyof UserProfileFormValuesType, value: string) => void
}

export const useUpdateCity = ({ country, getCitiesByCountry, setValue }: Props) => {
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
}
