import { ReactNode, useRef } from 'react'
import { Controller } from 'react-hook-form'

import { Button, ButtonVariant } from '@/shared'

import { useUploadFile } from './lib'

type Props = {
  children: ReactNode
  className?: string
  onSelectPhoto: (photo: File) => void
}

export const PhotoUploader = ({ children, className, onSelectPhoto }: Props) => {
  const {
    control,
    formState: { defaultValues, errors },
    getValues,
  } = useUploadFile()

  // console.log(getValues('image'))
  // console.log(errors.image?.message)
  // console.log(defaultValues)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const onButtonClickHandler = () => fileInputRef.current?.click()

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (!e.target.files?.length) {
  //     return
  //   }
  //   const fileUploaded = e.target.files[0]
  //
  //   onSelectPhoto(fileUploaded)
  // }

  return (
    <form>
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
        render={({ field: { name, onChange, value } }) => (
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
