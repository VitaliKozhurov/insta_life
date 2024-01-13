import { useState } from 'react'

import {
  Button,
  CrossIcon,
  ImageIcon,
  onUploadPhotoErrorHandler,
  useDeleteAvatarMutation,
  useMeQuery,
  useTranslation,
} from '@/shared'
import clsx from 'clsx'
import Image from 'next/image'

import s from './AddProfilePhoto.module.scss'

import { AddingPhotoModal } from './AddingPhotoModal'

type Props = {
  avatarUrl?: string
  className?: string
}

export const AddProfilePhoto = ({ className }: Props) => {
  const { data, fulfilledTimeStamp } = useMeQuery()
  const [deleteAvatar] = useDeleteAvatarMutation()

  let avatarUrl

  if (data?.avatarUrl) {
    avatarUrl = data?.avatarUrl.startsWith('blob')
      ? `${data?.avatarUrl}`
      : `${data?.avatarUrl}?${fulfilledTimeStamp}`
  } else {
    avatarUrl = data?.avatarUrl
  }

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
    cross: s.cross,
    image: s.image,
    photo: s.photo,
    root: clsx(s.root, className),
  }

  const openPhotoUploader = () => {
    setOpen(true)
  }
  const onRemoveAvatarHandler = () => {
    deleteAvatar()
      .unwrap()
      .catch(error => onUploadPhotoErrorHandler(error, true))
  }

  return (
    <>
      <AddingPhotoModal onOpenChange={setOpen} open={open} />
      <div className={classNames.root}>
        {avatarUrl && (
          <Button className={classNames.cross} onClick={onRemoveAvatarHandler}>
            <CrossIcon size={1.6} />
          </Button>
        )}
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
