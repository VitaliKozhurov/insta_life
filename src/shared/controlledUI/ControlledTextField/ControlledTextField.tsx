import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/shared/ui'

type ControlledTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues>({
  control,
  name,
  ...restProps
}: ControlledTextFieldProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({ control, name })

  return <TextField {...restProps} onChange={onChange} value={value} />
}
