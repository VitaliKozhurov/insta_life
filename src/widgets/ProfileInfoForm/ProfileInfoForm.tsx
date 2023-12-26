import { useForm } from 'react-hook-form'

import { ControlledInput, TextField } from '@/shared'
import { DatePicker } from '@/widgets/DatePicker/DatePicker'

import s from './ProfileInfoForm.module.scss'
export const ProfileInfoForm = () => {
  const { control } = useForm()

  return (
    <form className={s.form}>
      <ControlledInput control={control} name={'userName'} />
      <ControlledInput control={control} name={'firstName'} />
      <ControlledInput control={control} name={'lastName'} />
      <DatePicker mode={'single'} />
      <TextField fullWidth label={'About me'} />
    </form>
  )
}
