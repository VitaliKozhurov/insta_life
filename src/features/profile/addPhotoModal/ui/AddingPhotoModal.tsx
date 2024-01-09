import { useEffect, useState } from 'react'
import Cropper, { Area, Point } from 'react-easy-crop'
import { ReactCrop } from 'react-image-crop'
// eslint-disable-next-line no-duplicate-imports
import { type Crop } from 'react-image-crop'

import { ImageIcon, Modal, Nullable, PhotoUploader } from '@/shared'
import { clsx } from 'clsx'

import 'react-image-crop/src/ReactCrop.scss'

import s from './AddingPhotoModal.module.scss'

type Props = {
  onOpenChange: (value: boolean) => void
  open: boolean
}

export const AddingPhotoModal = ({ onOpenChange, open }: Props) => {
  const [image, setImage] = useState<Nullable<File>>(null)
  const [error, setError] = useState<Nullable<string>>(null)
  const imagePreview = image && !error ? URL.createObjectURL(image) : null
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

  const onOpenChangeHandler = (value: boolean) => {
    if (!value) {
      setError(null)
      setImage(null)
    }
    onOpenChange(value)
  }

  return (
    <Modal
      className={classNames.content}
      onOpenChange={onOpenChangeHandler}
      open={open}
      title={'Add a Profile Photo'}
    >
      <div className={classNames.root}>
        {error && <p className={classNames.error}>{error}</p>}
        <div className={classNames.photo}>
          {imagePreview && <Crop2 imagePreview={imagePreview} />}
          {!imagePreview && <ImageIcon size={4.8} />}
        </div>
        <PhotoUploader className={classNames.button} onError={setError} onSelectPhoto={setImage}>
          Select from Computer
        </PhotoUploader>
      </div>
    </Modal>
  )
}

// const Crop = ({ imagePreview }: any) => {
//   const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
//   const [zoom, setZoom] = useState(1)
//   const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
//     console.log(croppedArea, croppedAreaPixels)
//   }
//
//   return (
//     <Cropper
//       aspect={1}
//       crop={crop}
//       cropShape={'round'}
//       image={imagePreview}
//       objectFit={'cover'}
//       onCropChange={setCrop}
//       onCropComplete={onCropComplete}
//       onZoomChange={setZoom}
//       showGrid={false}
//       style={{ containerStyle: { height: '100%' } }}
//       zoom={zoom}
//     />
//   )
// }

const Crop2 = ({ imagePreview }: any) => {
  const [crop, setCrop] = useState<Crop>()

  return (
    <ReactCrop
      aspect={1}
      circularCrop
      crop={crop}
      keepSelection
      minHeight={48}
      minWidth={48}
      onChange={c => setCrop(c)}
      style={{ minHeight: '100%' }}
    >
      <img alt={'asd'} src={imagePreview} />
    </ReactCrop>
  )
}
