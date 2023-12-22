import { ImageIcon, Modal, PhotoUploader } from '@/shared'
import { clsx } from 'clsx'

import s from './AddingPhotoModal.module.scss'

type Props = {
  error?: string
  image?: string
  onOpenChange: (value: boolean) => void
  onSelectPhoto: (photo: File) => void
  open: boolean
}

export const AddingPhotoModal = ({ error, image, onOpenChange, onSelectPhoto, open }: Props) => {
  const classNames = {
    button: s.button,
    content: s.content,
    error: s.error,
    photo: s.photo,
    root: clsx(s.root, !!error && s.withError),
  }

  return (
    <Modal
      className={classNames.content}
      onOpenChange={onOpenChange}
      open={open}
      title={'Add a Profile Photo'}
    >
      <div className={classNames.root}>
        {error && <p className={classNames.error}>{error}</p>}
        <div className={classNames.photo}>{!image && <ImageIcon size={4.8} />}</div>
        <PhotoUploader className={classNames.button} onSelectPhoto={onSelectPhoto}>
          Select from Computer
        </PhotoUploader>
      </div>
    </Modal>
  )
}
