import { useForm } from 'react-hook-form'

const MAX_FILE_SIZE = 10000000
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png']

import { LocalesType } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type Props = LocalesType['profilePage']['general']['photoUploader']['modal']['errors']

const uploadFileSchema = (t: Props) =>
  z.object({
    image: z
      .custom<File>()
      .refine(file => file?.size <= MAX_FILE_SIZE, t.maxSize)
      .refine(file => ACCEPTED_IMAGE_TYPES.includes(file?.type), t.imageType),
  })

export type UploadFileValuesType = z.infer<ReturnType<typeof uploadFileSchema>>

export const useUploadFile = (t: Props) =>
  useForm<UploadFileValuesType>({
    defaultValues: {
      image: undefined,
    },
    mode: 'onChange',
    resolver: zodResolver(uploadFileSchema(t)),
  })
