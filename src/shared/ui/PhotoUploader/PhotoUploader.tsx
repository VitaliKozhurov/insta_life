import { ChangeEvent, ReactNode, useRef } from 'react'

import { Button, ButtonVariant } from '@/shared'

type Props = {
  children: ReactNode
  className?: string
  onSelectPhoto: (photo: File) => void
}

export const PhotoUploader = ({ children, className, onSelectPhoto }: Props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const onButtonClickHandler = () => fileInputRef.current?.click()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return
    }
    const fileUploaded = e.target.files[0]

    onSelectPhoto(fileUploaded)
  }

  return (
    <>
      <Button className={className} onClick={onButtonClickHandler} variant={ButtonVariant.PRIMARY}>
        {children}
      </Button>
      <input
        accept={'image/*'}
        multiple={false}
        onChange={handleChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
        type={'file'}
      />
    </>
  )
}
