import { Controller } from 'react-hook-form'

import {
  Button,
  COUNTRIES_LIST,
  ControlledInput,
  ControlledSelect,
  ControlledTextField,
  DateInput,
  getToast,
  onSendFormErrorsHandlers,
} from '@/shared'
import { DatePicker } from '@/widgets'

import s from './ProfileInfoForm.module.scss'

import { UserProfileFormValuesType, useProfile, useProfileForm, useUpdateCity } from './lib'
import { ProfileSelectChildren } from './ui/ProfileSelectChildren'

export const ProfileInfoForm = () => {
  const { citiesLoading, citiesOptions, formData, getCitiesByCountry, updateProfile } = useProfile()
  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
    setValue,
    watch,
  } = useProfileForm(formData)
  const country = watch('country')

  useUpdateCity({ country, getCitiesByCountry, setValue })

  const classNames = {
    form: s.form,
    formField(error?: string) {
      return error && s.formFieldWithError
    },
  }

  const onSubmitHandler = (data: UserProfileFormValuesType) => {
    updateProfile(data)
      .unwrap()
      .then(() =>
        getToast({ text: 'User data was successfully saved!', variant: 'success', withClose: true })
      )
      .catch(err => {
        onSendFormErrorsHandlers(err, setError)
      })
  }

  return (
    <form className={classNames.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <ControlledInput control={control} isRequired label={'Username'} name={'username'} />
      <ControlledInput
        className={classNames.formField(errors.firstName?.message)}
        control={control}
        isRequired
        label={'First Name'}
        name={'firstName'}
      />
      <ControlledInput
        className={classNames.formField(errors.lastName?.message)}
        control={control}
        isRequired
        label={'Last Name'}
        name={'lastName'}
      />
      <Controller
        control={control}
        name={'dateOfBirth'}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <DatePicker mode={'single'} selectedDay={value} setSelectedDay={onChange}>
              <DateInput
                error={error?.message}
                fullWidth
                label={'Date of birth'}
                mode={'single'}
                placeholder={'00/00/0000'}
                selectedDay={value}
              />
            </DatePicker>
          )
        }}
      />
      <div className={s.selectWrapper}>
        <div className={s.select}>
          <ControlledSelect
            className={s.select}
            control={control}
            fullWidth
            label={'Select your country'}
            name={'country'}
            options={COUNTRIES_LIST}
            placeholder={'Country'}
          >
            <ProfileSelectChildren options={COUNTRIES_LIST} />
          </ControlledSelect>
        </div>
        <div className={s.select}>
          <ControlledSelect
            className={s.select}
            control={control}
            disabled={citiesLoading}
            fullWidth
            label={'Select your city'}
            name={'city'}
            options={citiesOptions}
            placeholder={'City'}
          >
            <ProfileSelectChildren options={citiesOptions} />
          </ControlledSelect>
        </div>
      </div>
      <ControlledTextField control={control} fullWidth label={'About me'} name={'aboutMe'} />
      <Button className={s.submitButton}>Save changes</Button>
    </form>
  )
}
