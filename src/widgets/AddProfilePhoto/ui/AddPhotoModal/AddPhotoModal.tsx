import { useEffect, useMemo, useState } from 'react'

import { PhotoUploader } from '@/features'
import { Crop, ImageIcon, Modal, Nullable, useTranslation } from '@/shared'
import { clsx } from 'clsx'

import s from './AddPhotoModal.module.scss'

type Props = {
  onOpenChange: (value: boolean) => void
  open: boolean
}

export const AddPhotoModal = ({ onOpenChange, open }: Props) => {
  const { text } = useTranslation()
  const t = text.profilePage.general.photoUploader.modal
  const [image, setImage] = useState<Nullable<File>>(null) // image after upload from PC
  const [croppedImage, setCroppedImage] = useState<Nullable<Blob>>(null) // image after cropped
  const [error, setError] = useState<Nullable<string>>(null) // errors after upload image from PC
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
          onCloseModal={onOpenChangeHandler}
          onPhotoUpload={setImage}
          onPhotoUploadError={setError}
        >
          {t.selectPhotoButton}
        </PhotoUploader>
      </div>
    </Modal>
  )
}
