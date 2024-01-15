import { Controller } from 'react-hook-form'

import {
  Button,
  ControlledInput,
  ControlledSelect,
  SelectOptions,
  TextField,
  UserProfileRequestType,
  useMeQuery,
  useUpdateUserProfileMutation,
} from '@/shared'
import { DatePicker } from '@/widgets'
import { useProfileForm } from '@/widgets/ProfileInfoForm/lib'

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
  const { data } = useMeQuery()
  const [updateProfile] = useUpdateUserProfileMutation()
  const formData = {
    aboutMe: data?.aboutMe || '',
    city: data?.city || '',
    country: data?.country || '',
    dateOfBirth: data?.dateOfBirth || '',
    firstName: data?.firstName || '',
    lastName: data?.lastName || '',
    username: data?.username || '',
  }

  const { control, formState, handleSubmit } = useProfileForm(formData)

  const onSubmitHandler = (data: UserProfileRequestType) => {
    console.log(data)
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <ControlledInput control={control} isRequired label={'Username'} name={'username'} />
      <ControlledInput control={control} isRequired label={'First Name'} name={'firstName'} />
      <ControlledInput control={control} isRequired label={'Last Name'} name={'lastName'} />
      {/*<DatePicker fullWidth mode={'single'} />*/}
      <div className={s.selectWrapper}>
        <div className={s.select}>
          <ControlledSelect
            className={s.select}
            control={control}
            fullWidth
            label={'Select your country'}
            name={'country'}
            options={countriesOptions}
            placeholder={'Country'}
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
            placeholder={'City'}
          />
        </div>
      </div>
      <Controller
        control={control}
        name={'aboutMe'}
        render={({ field: { onChange, ref, value } }) => (
          <TextField fullWidth label={'About me'} onChange={onChange} ref={ref} value={value} />
        )}
      />

      <Button className={s.submitButton}>Save changes</Button>
    </form>
  )
}
