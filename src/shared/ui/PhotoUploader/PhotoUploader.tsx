import { ReactNode, useEffect, useRef } from 'react'
import { Controller } from 'react-hook-form'

import { Button, ButtonVariant, Nullable } from '@/shared'

import { useUploadFile } from './lib'

type Props = {
  children: ReactNode
  className?: string
  onError: (error: Nullable<string>) => void
  onSelectPhoto: (photo: File) => void
}

export const PhotoUploader = ({ children, className, onError, onSelectPhoto }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useUploadFile()
  const userProfileImage = watch('image')
  const inputError = errors.image?.message
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (userProfileImage && !inputError) {
      onSelectPhoto(userProfileImage)
      onError(null)
    }
    if (inputError) {
      onError(inputError)
    }
  }, [userProfileImage, inputError])

  const onButtonClickHandler = () => fileInputRef.current?.click()

  // TODO change data type
  const onSubmitHandler = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Button
        className={className}
        onClick={onButtonClickHandler}
        type={'button'}
        variant={ButtonVariant.PRIMARY}
      >
        {children}
      </Button>
      <Controller
        control={control}
        name={'image'}
        render={({ field: { name, onChange } }) => (
          <input
            name={name}
            onChange={e => {
              if (!errors.image?.message) {
                onChange(e.target.files?.[0])
              }
            }}
            ref={fileInputRef}
            style={{ display: 'none' }}
            type={'file'}
          />
        )}
      />
    </form>
  )
}
