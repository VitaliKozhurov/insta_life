import { useState } from 'react'

import { AddingPhotoModal } from '@/features/profile/addPhotoModal/ui/AddingPhotoModal'
import { Button, ImageIcon } from '@/shared'

import s from './AddProfilePhoto.module.scss'

export const AddProfilePhoto = () => {
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState(null)
  const classNames = {
    button: s.button,
    photo: s.photo,
    root: s.root,
  }

  const openPhotoUploader = () => {
    setOpen(true)
  }

  const onSelectPhoto = (photo: File) => {
    console.log(photo)

    setOpen(false)
  }

  return (
    <>
      <AddingPhotoModal
        error={'Error! Photo size must be less than 10 MB!'}
        onOpenChange={setOpen}
        onSelectPhoto={onSelectPhoto}
        open={open}
      />
      <div className={classNames.root}>
        <div className={classNames.photo}>{!image && <ImageIcon size={4.8} />}</div>
        <Button className={classNames.button} onClick={openPhotoUploader}>
          Add a Profile Photo
        </Button>
      </div>
    </>
  )
}
