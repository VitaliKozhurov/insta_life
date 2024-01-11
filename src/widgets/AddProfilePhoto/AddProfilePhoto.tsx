import { useState } from 'react'

import { AddingPhotoModal } from '@/features/profile/addPhotoModal/ui/AddingPhotoModal'
import { Button, ImageIcon, useMeQuery, useTranslation } from '@/shared'
import clsx from 'clsx'
import Image from 'next/image'

import s from './AddProfilePhoto.module.scss'

type Props = {
  avatarUrl?: string
  className?: string
}

export const AddProfilePhoto = ({ className }: Props) => {
  const { data } = useMeQuery()
  const avatarUrl = data?.avatarUrl
  const {
    text: {
      profilePage: {
        management: { photoUploader: t },
      },
    },
  } = useTranslation()
  const [open, setOpen] = useState(false)

  const classNames = {
    button: s.button,
    image: s.image,
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
        <div className={classNames.photo}>
          {!avatarUrl && <ImageIcon size={4.8} />}
          {avatarUrl && (
            <Image
              alt={'User avatar'}
              className={classNames.image}
              height={200}
              priority
              src={avatarUrl}
              width={200}
            />
          )}
        </div>
        <Button className={classNames.button} onClick={openPhotoUploader}>
          {t.addPhotoButton}
        </Button>
      </div>
    </>
  )
}
