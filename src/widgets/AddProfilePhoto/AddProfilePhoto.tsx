import { useState } from 'react'

import { Button, ButtonVariant, CrossIcon, ImageIcon, useMeQuery, useTranslation } from '@/shared'
import { DeletePhotoModal } from '@/widgets/AddProfilePhoto/DeletePhotoModal'
import clsx from 'clsx'
import Image from 'next/image'

import s from './AddProfilePhoto.module.scss'

import { AddingPhotoModal } from './AddingPhotoModal'

type Props = {
  avatarUrl?: string
  className?: string
}

export const AddProfilePhoto = ({ className }: Props) => {
  const { data } = useMeQuery()
  const avatarUrl = data?.avatarUrl || ''
  const { text } = useTranslation()
  const t = text.profilePage.general.photoUploader
  const [openPhotoUploader, setOpenPhotoUploader] = useState(false)
  const [openDeletePhotoModal, setOpenDeletePhotoModal] = useState(false)

  const classNames = {
    button: s.button,
    cross: s.cross,
    image: s.image,
    photo: s.photo,
    root: clsx(s.root, className),
  }

  const openPhotoUploaderHandler = () => {
    setOpenPhotoUploader(true)
  }
  const openDeletePhotoModalHandler = () => {
    setOpenDeletePhotoModal(true)
  }

  return (
    <>
      <AddingPhotoModal onOpenChange={setOpenPhotoUploader} open={openPhotoUploader} />
      <DeletePhotoModal onOpenChange={setOpenDeletePhotoModal} open={openDeletePhotoModal} />
      <div className={classNames.root}>
        {avatarUrl && (
          <Button className={classNames.cross} onClick={openDeletePhotoModalHandler}>
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
        <Button
          className={classNames.button}
          onClick={openPhotoUploaderHandler}
          variant={ButtonVariant.TERTIARY}
        >
          {t.addPhotoButton}
        </Button>
      </div>
    </>
  )
}
