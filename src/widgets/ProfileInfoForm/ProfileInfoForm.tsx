import { useState } from 'react'
import { Controller } from 'react-hook-form'

import {
  Button,
  ControlledInput,
  ControlledSelect,
  DateInput,
  SelectOptions,
  UserProfileRequestType,
  useMeQuery,
  useUpdateUserProfileMutation,
} from '@/shared'
import { ControlledTextField } from '@/shared/controlledUI/ControlledTextField'
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
  const [selectedDay, setSelectedDay] = useState<Date>()
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

  const { control, formState, handleSubmit, watch } = useProfileForm(formData)

  console.log(watch('dateOfBirth'))
  const onSubmitHandler = (data: UserProfileRequestType) => {
    console.log(data)
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <ControlledInput control={control} isRequired label={'Username'} name={'username'} />
      <ControlledInput control={control} isRequired label={'First Name'} name={'firstName'} />
      <ControlledInput control={control} isRequired label={'Last Name'} name={'lastName'} />
      <DatePicker mode={'single'} selectedDay={selectedDay} setSelectedDay={setSelectedDay}>
        <Controller
          control={control}
          name={'dateOfBirth'}
          render={({ field: { ref }, fieldState: {}, formState: {} }) => {
            const value = new Date().getSeconds()

            return (
              <DateInput
                fullWidth
                label={'Date of birth'}
                mode={'single'}
                ref={ref}
                selectedDay={selectedDay}
                value={value}
              />
            )
          }}
        />
      </DatePicker>
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
      <ControlledTextField control={control} fullWidth label={'About me'} name={'aboutMe'} />
      <Button className={s.submitButton}>Save changes</Button>
    </form>
  )
}
