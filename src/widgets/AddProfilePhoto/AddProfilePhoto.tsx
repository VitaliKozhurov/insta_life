import { useState } from 'react'

import { AddingPhotoModal } from '@/features/profile/addPhotoModal/ui/AddingPhotoModal'
import { Button, ImageIcon, useTranslation } from '@/shared'
import clsx from 'clsx'

import s from './AddProfilePhoto.module.scss'

type Props = {
  className?: string
}

export const AddProfilePhoto = ({ className }: Props) => {
  const {
    text: {
      profilePage: {
        management: { photoUploader: t },
      },
    },
  } = useTranslation()
  const [open, setOpen] = useState(false)
  // TODO add request for image useUserMe
  const image = false
  const classNames = {
    button: s.button,
    photo: s.photo,
    root: clsx(s.root, className),
  }

  const openPhotoUploader = () => {
    setOpen(true)
  }

  return (
    <>
      <AddingPhotoModal onOpenChange={setOpen} open={open} />
      <div className={classNames.root}>
        <div className={classNames.photo}>{!image && <ImageIcon size={4.8} />}</div>
        <Button className={classNames.button} onClick={openPhotoUploader}>
          {t.addPhotoButton}
        </Button>
      </div>
    </>
  )
}
