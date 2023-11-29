import { useForm } from 'react-hook-form'

import { ControlledCheckbox, ControlledInput } from '@/shared/controlledUI'

export const SignUpForm = () => {
  const { control } = useForm()

  return (
    <form>
      <ControlledInput control={control} name={'123'} />
      <ControlledCheckbox control={control} name={'checkbox'} />
    </form>
  )
}
