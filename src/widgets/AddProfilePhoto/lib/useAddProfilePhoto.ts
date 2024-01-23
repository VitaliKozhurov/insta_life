import { useState } from 'react'

import { useMeQuery, useTranslation } from '@/shared'

export const useAddProfilePhoto = () => {
  const { data } = useMeQuery()
  const avatarUrl = data?.avatarUrl || ''
  const { text } = useTranslation()
  const t = text.profilePage.general.photoUploader
  const [openPhotoUploader, setOpenPhotoUploader] = useState(false)
  const [openDeletePhotoModal, setOpenDeletePhotoModal] = useState(false)

  return {
    avatarUrl,
    openDeletePhotoModal,
    openPhotoUploader,
    setOpenDeletePhotoModal,
    setOpenPhotoUploader,
    text: t,
  }
}
