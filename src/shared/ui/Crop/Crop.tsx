import { useState } from 'react'
import Cropper, { Area, Point } from 'react-easy-crop'

import { getCroppedImage } from '@/shared'

type Props = {
  imagePreview: string
  onCropImage: (imageFile: Blob) => void
}

export const Crop = ({ imagePreview, onCropImage }: Props) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  const onCropComplete = async (croppedArea: Area, croppedAreaPixels: Area) => {
    try {
      const imageFile = await getCroppedImage(imagePreview ?? '', croppedAreaPixels)

      imageFile && onCropImage(imageFile)
    } catch (e) {
      return
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
