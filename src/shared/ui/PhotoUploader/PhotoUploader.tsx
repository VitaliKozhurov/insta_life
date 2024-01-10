import { ReactNode, useEffect, useRef } from 'react'
import { Controller } from 'react-hook-form'

import { Button, ButtonVariant, Nullable, useUploadAvatarMutation } from '@/shared'
import clsx from 'clsx'

import s from './PhotoUploader.module.scss'

import { UploadFileValuesType, useUploadFile } from './lib'

type Props = {
  children: ReactNode
  className?: string
  croppedImage: Nullable<Blob>
  onError: (error: Nullable<string>) => void
  onSelectPhoto: (photo: Nullable<File>) => void
}

export const PhotoUploader = ({
  children,
  className,
  croppedImage,
  onError,
  onSelectPhoto,
}: Props) => {
  const [uploadAvatar] = useUploadAvatarMutation()
  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useUploadFile()
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const userProfileImage = watch('image')
  const inputError = errors.image?.message
  const isValidImage = userProfileImage && !inputError
  const classNames = {
    form: clsx(s.form, isValidImage && s.validForm, !isValidImage && s.invalidForm),
  }

  useEffect(() => {
    if (isValidImage) {
      onSelectPhoto(userProfileImage)
      onError(null)
    }
    if (inputError) {
      onError(inputError)
      onSelectPhoto(null)
    }
  }, [userProfileImage, inputError])

  const onButtonClickHandler = () => fileInputRef.current?.click()

  // TODO change data type
  const onSubmitHandler = (data: UploadFileValuesType) => {
    const formData = new FormData()

    formData.append('avatar', croppedImage ? croppedImage : data.image)
    uploadAvatar(formData)
      .unwrap()
      .catch((e: any) => console.log(e))
  }

  return (
    <form className={classNames.form} onSubmit={handleSubmit(onSubmitHandler)}>
      {isValidImage && <Button>Save</Button>}
      {!isValidImage && (
        <Button
          className={className}
          onClick={onButtonClickHandler}
          type={'button'}
          variant={ButtonVariant.PRIMARY}
        >
          {children}
        </Button>
      )}
      <Controller
        control={control}
        name={'image'}
        render={({ field: { name, onChange } }) => (
          <input
            name={name}
            onChange={e => onChange(e.target.files?.[0])}
            ref={fileInputRef}
            style={{ display: 'none' }}
            type={'file'}
          />
        )}
      />
    </form>
  )
}
