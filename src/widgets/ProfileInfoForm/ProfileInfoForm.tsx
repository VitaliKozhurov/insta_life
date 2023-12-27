import { useForm } from 'react-hook-form'

import { ControlledInput, ControlledSelect, SelectOptions, TextField } from '@/shared'
import { DatePicker } from '@/widgets'

import s from './ProfileInfoForm.module.scss'

const countriesOptions: SelectOptions[] = [
  { title: 'Belarus', value: 'belarus' },
  { title: 'Russia', value: 'russia' },
]

const citiesOptions: SelectOptions[] = [
  { title: 'Minsk', value: 'minsk' },
  { title: 'Moscow', value: 'moscow' },
]

export const ProfileInfoForm = () => {
  const { control } = useForm()

  return (
    <form className={s.form}>
      <ControlledInput control={control} isRequired label={'Username'} name={'userName'} />
      <ControlledInput control={control} isRequired label={'First Name'} name={'firstName'} />
      <ControlledInput control={control} isRequired label={'Last Name'} name={'lastName'} />
      <DatePicker fullWidth mode={'single'} />
      <div className={s.selectWrapper}>
        <div className={s.select}>
          <ControlledSelect
            className={s.select}
            control={control}
            fullWidth
            label={'Select your country'}
            name={'country'}
            options={countriesOptions}
          />
        </div>
        <div className={s.select}>
          <ControlledSelect
            className={s.select}
            control={control}
            fullWidth
            label={'Select your city'}
            name={'city'}
            options={citiesOptions}
          />
        </div>
      </div>
      <TextField fullWidth label={'About me'} />
    </form>
  )
}
