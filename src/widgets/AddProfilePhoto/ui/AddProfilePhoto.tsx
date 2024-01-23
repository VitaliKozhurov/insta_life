import { Button, ButtonVariant, CrossIcon, ImageIcon } from '@/shared'
import clsx from 'clsx'
import Image from 'next/image'

import s from './AddProfilePhoto.module.scss'

import { useAddProfilePhoto } from '../lib'
import { AddPhotoModal } from './AddPhotoModal'
import { DeletePhotoModal } from './DeletePhotoModal'

type Props = {
  className?: string
}

export const AddProfilePhoto = ({ className }: Props) => {
  const {
    avatarUrl,
    openDeletePhotoModal,
    openPhotoUploader,
    setOpenDeletePhotoModal,
    setOpenPhotoUploader,
    text,
  } = useAddProfilePhoto()

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
      <AddPhotoModal onOpenChange={setOpenPhotoUploader} open={openPhotoUploader} />
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
          {text.addPhotoButton}
        </Button>
      </div>
    </>
  )
}
