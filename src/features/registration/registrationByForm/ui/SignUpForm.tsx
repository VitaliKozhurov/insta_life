import { useForm } from 'react-hook-form'

import { ControlledCheckbox, ControlledInput } from '@/shared/controlledUI'
import { Typography } from '@/shared/ui'

export const SignUpForm = () => {
  const { control } = useForm()

  return (
    <form>
      <ControlledInput control={control} label={'Username'} name={'username'} />
      <ControlledInput control={control} label={'Email'} name={'email'} />
      <ControlledInput control={control} label={'Password'} name={'password'} type={'password'} />
      <ControlledInput
        control={control}
        label={'Password confirmation'}
        name={'passwordConfirmation'}
        type={'password'}
      />

      <ControlledCheckbox control={control} name={'agree'} />
      <Typography></Typography>
    </form>
  )
}
