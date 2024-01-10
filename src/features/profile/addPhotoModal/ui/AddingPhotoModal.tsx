import { useEffect, useMemo, useState } from 'react'
import Cropper, { Area, Point } from 'react-easy-crop'

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

  const onOpenChangeHandler = (value: boolean) => {
    if (!value) {
      setError(null)
      setImage(null)
    }
    onOpenChange(value)
  }
  const onCropImage = (imageFile: Blob) => {
    setCroppedImage(imageFile)
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
          {imagePreview && <Crop imagePreview={imagePreview} onCropImage={onCropImage} />}
          {!imagePreview && <ImageIcon size={4.8} />}
        </div>
        <PhotoUploader
          className={classNames.button}
          croppedImage={croppedImage}
          onError={setError}
          onSelectPhoto={setImage}
        >
          Select from Computer
        </PhotoUploader>
      </div>
    </Modal>
  )
}

type CropType = {
  imagePreview: string
  onCropImage: (imageFile: Blob) => void
}

const Crop = ({ imagePreview, onCropImage }: CropType) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  const onCropComplete = async (croppedArea: Area, croppedAreaPixels: Area) => {
    try {
      const imageFile = await getCroppedImg(imagePreview ?? '', croppedAreaPixels)

      imageFile && onCropImage(imageFile)
    } catch (e) {
      // Todo add error toast
      console.log(e)
    }
  }

  return (
    <>
      <Cropper
        aspect={1}
        crop={crop}
        cropShape={'round'}
        image={imagePreview}
        objectFit={'cover'}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
        showGrid={false}
        zoom={zoom}
      />
    </>
  )
}

export const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image()

    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', error => reject(error))
    image.setAttribute('crossOrigin', 'anonymous')
    image.src = url
  })

export function getRadianAngle(degreeValue: number) {
  return (degreeValue * Math.PI) / 180
}

export function rotateSize(width: number, height: number, rotation: number) {
  const rotRad = getRadianAngle(rotation)

  return {
    height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
    width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
  }
}

export default async function getCroppedImg(
  imageSrc: string,
  pixelCrop: Area,
  rotation = 0,
  flip = { horizontal: false, vertical: false }
): Promise<Blob | null> {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    return null
  }

  const rotRad = getRadianAngle(rotation)

  const { height: bBoxHeight, width: bBoxWidth } = rotateSize(image.width, image.height, rotation)

  canvas.width = bBoxWidth
  canvas.height = bBoxHeight

  ctx.translate(bBoxWidth / 2, bBoxHeight / 2)
  ctx.rotate(rotRad)
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1)
  ctx.translate(-image.width / 2, -image.height / 2)

  ctx.drawImage(image, 0, 0)

  const data = ctx.getImageData(pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height)

  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height

  ctx.putImageData(data, 0, 0)

  return new Promise((resolve, reject) => {
    try {
      canvas.toBlob(file => {
        if (file) {
          resolve(file)
        }
        resolve(null)
      }, 'image/jpeg')
    } catch (e) {
      reject(e)
    }
  })
}
