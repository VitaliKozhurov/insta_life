import { useForm } from 'react-hook-form'

const MAX_FILE_SIZE = 10000000
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png']

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const uploadFileSchema = () =>
  z.object({
    image: z
      .custom<File>()
      .refine(file => file?.size <= MAX_FILE_SIZE, `The photo size must be less than 10 Mb`)
      .refine(
        file => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'The photo must have JPEG or PNG format'
      ),
  })

export type UploadFileValuesType = z.infer<ReturnType<typeof uploadFileSchema>>

export const useUploadFile = () =>
  useForm<UploadFileValuesType>({
    defaultValues: {
      image: undefined,
    },
    mode: 'onChange',
    resolver: zodResolver(uploadFileSchema()),
  })
