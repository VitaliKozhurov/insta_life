import { useEffect, useMemo, useState } from 'react'

import { Crop, ImageIcon, Modal, Nullable, PhotoUploader, useTranslation } from '@/shared'
import { clsx } from 'clsx'

import 'react-image-crop/src/ReactCrop.scss'

import s from './AddingPhotoModal.module.scss'

type Props = {
  onOpenChange: (value: boolean) => void
  open: boolean
}

export const AddingPhotoModal = ({ onOpenChange, open }: Props) => {
  const {
    text: {
      profilePage: {
        management: {
          photoUploader: { modal: t },
        },
      },
    },
  } = useTranslation()
  const [image, setImage] = useState<Nullable<File>>(null)
  const [croppedImage, setCroppedImage] = useState<Nullable<Blob>>(null)
  const [error, setError] = useState<Nullable<string>>(null)
  const imagePreview = useMemo(() => (image && !error ? URL.createObjectURL(image) : null), [image])

  const classNames = {
    button: s.button,
    content: s.content,
    error: s.error,
    image: s.image,
    photo: s.photo,
    root: clsx(s.root, !!error && s.withError, image && s.withImage),
  }

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview)
      }
    }
  }, [imagePreview])

  const onOpenChangeHandler = (isOpen: boolean) => {
    if (!isOpen) {
      setError(null)
      setImage(null)
    }
    onOpenChange(isOpen)
  }
  const onCropImage = (imageFile: Blob) => {
    setCroppedImage(imageFile)
  }

  return (
    <Modal
      className={classNames.content}
      onOpenChange={onOpenChangeHandler}
      open={open}
      title={t.title}
    >
      <div className={classNames.root}>
        {error && <p className={classNames.error}>{error}</p>}
        <div className={classNames.photo}>
          {imagePreview && <Crop imagePreview={imagePreview} onCropImage={onCropImage} />}
          {!imagePreview && <ImageIcon size={4.8} />}
        </div>
        <PhotoUploader
          className={classNames.button}
          croppedImage={croppedImage}
          onPhotoUpload={setImage}
          onPhotoUploadError={setError}
          onUpdatePhoto={onOpenChangeHandler}
        >
          {t.selectPhotoButton}
        </PhotoUploader>
      </div>
    </Modal>
  )
}
