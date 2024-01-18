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
import { DevTool } from '@hookform/devtools'
import clsx from 'clsx'

import s from './PhotoUploader.module.scss'

import { UploadFileValuesType, useUploadFile } from '../lib'

type Props = {
  children: ReactNode
  className?: string
  croppedImage: Nullable<Blob>
  onCloseModal: (isOpen: boolean) => void
  onPhotoUpload: (photo: Nullable<File>) => void
  onPhotoUploadError: (error: Nullable<string>) => void
}

export const PhotoUploader = ({
  children,
  className,
  croppedImage,
  onCloseModal,
  onPhotoUpload,
  onPhotoUploadError,
}: Props) => {
  const { text } = useTranslation()
  const t = text.profilePage.general.photoUploader.modal
  const [uploadAvatar] = useUploadAvatarMutation()
  const { control, formState, handleSubmit, setError, watch } = useUploadFile(t.errors)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const userProfileImage = watch('image')
  const inputError = formState.errors.image?.message
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
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }, [userProfileImage, inputError])

  const onButtonClickHandler = () => fileInputRef.current?.click()

  const onSubmitHandler = (data: UploadFileValuesType) => {
    const formData = new FormData()

    formData.append('file', croppedImage ? croppedImage : data.image)
    uploadAvatar(formData)
      .unwrap()
      .then(() => {
        onCloseModal(false)
      })
      .catch(e => {
        const errorMessage = onUploadPhotoErrorHandler(e)

        setError('image', { message: errorMessage, type: 'custom' })
      })
  }

  return (
    <>
      <DevTool control={control} />
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
    </>
  )
}
