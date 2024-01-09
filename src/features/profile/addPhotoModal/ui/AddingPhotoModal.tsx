import { useEffect, useState } from 'react'

import { ImageIcon, Modal, Nullable, PhotoUploader } from '@/shared'
import { clsx } from 'clsx'
import Image from 'next/image'

import s from './AddingPhotoModal.module.scss'

type Props = {
  onOpenChange: (value: boolean) => void
  onSelectPhoto: (photo: File) => void
  open: boolean
}

export const AddingPhotoModal = ({ onOpenChange, onSelectPhoto, open }: Props) => {
  const [image, setImage] = useState<Nullable<File>>(null)
  const [error, setError] = useState<Nullable<string>>(null)
  const classNames = {
    button: s.button,
    content: s.content,
    error: s.error,
    photo: s.photo,
    root: clsx(s.root, !!error && s.withError),
  }

  const imagePreview = image ? URL.createObjectURL(image) : null

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview)
      }
    }
  }, [imagePreview])

  return (
    <Modal
      className={classNames.content}
      onOpenChange={onOpenChange}
      open={open}
      title={'Add a Profile Photo'}
    >
      <div className={classNames.root}>
        {error && <p className={classNames.error}>{error}</p>}
        <div className={classNames.photo}>
          {imagePreview && (
            <Image alt={'Profile photo'} height={100} src={imagePreview} width={100} />
          )}
          {!image && <ImageIcon size={4.8} />}
        </div>
        <PhotoUploader className={classNames.button} onError={setError} onSelectPhoto={setImage}>
          Select from Computer
        </PhotoUploader>
      </div>
    </Modal>
  )
}
