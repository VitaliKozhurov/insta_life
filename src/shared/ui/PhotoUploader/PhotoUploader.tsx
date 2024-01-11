import { ReactNode, useEffect, useRef } from 'react'
import { Controller } from 'react-hook-form'

import {
  Button,
  ButtonVariant,
  Nullable,
  onUploadPhotoErrorHandler,
  useTranslation,
  useUploadAvatarMutation,
} from '@/shared'
import clsx from 'clsx'

import s from './PhotoUploader.module.scss'

import { UploadFileValuesType, useUploadFile } from './lib'

type Props = {
  children: ReactNode
  className?: string
  croppedImage: Nullable<Blob>
  onPhotoUpload: (photo: Nullable<File>) => void
  onPhotoUploadError: (error: Nullable<string>) => void
  onUpdatePhoto: (isOpen: boolean) => void
}

export const PhotoUploader = ({
  children,
  className,
  croppedImage,
  onPhotoUpload,
  onPhotoUploadError,
  onUpdatePhoto,
}: Props) => {
  const {
    text: {
      profilePage: {
        management: {
          photoUploader: { modal: t },
        },
      },
    },
  } = useTranslation()
  const [uploadAvatar] = useUploadAvatarMutation()
  const {
    control,
    formState: { errors },
    handleSubmit,
    resetField,
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
      onPhotoUpload(userProfileImage)
      onPhotoUploadError(null)
    }
    if (inputError) {
      onPhotoUploadError(inputError)
      onPhotoUpload(null)
    }
  }, [userProfileImage, inputError])

  const onButtonClickHandler = () => fileInputRef.current?.click()

  const onSubmitHandler = (data: UploadFileValuesType) => {
    const formData = new FormData()

    formData.append('files', croppedImage ? croppedImage : data.image)
    uploadAvatar(formData)
      .unwrap()
      .then(() => {
        resetField('image')
        onUpdatePhoto(false)
      })
      .catch(e => {
        resetField('image')
        onPhotoUpload(null)
        onUploadPhotoErrorHandler(e, onPhotoUploadError)
      })
  }

  return (
    <form className={classNames.form} onSubmit={handleSubmit(onSubmitHandler)}>
      {isValidImage && <Button>{t.saveButton}</Button>}
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
