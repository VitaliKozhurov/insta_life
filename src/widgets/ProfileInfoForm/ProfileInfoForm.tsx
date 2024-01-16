import { useEffect } from 'react'
import { Controller } from 'react-hook-form'

import {
  Button,
  ControlledInput,
  ControlledSelect,
  ControlledTextField,
  DateInput,
  onSendFormErrorsHandlers,
  profileFormDataCreator,
  useGetCitiesMutation,
  useGetCountriesQuery,
  useMeQuery,
  useUpdateUserProfileMutation,
} from '@/shared'
import { DatePicker } from '@/widgets'

import s from './ProfileInfoForm.module.scss'

import { UserProfileFormValuesType, useProfileForm } from './lib'

export const ProfileInfoForm = () => {
  const { data } = useMeQuery()
  const formData = profileFormDataCreator(data)
  const { data: countriesOptions = [{ title: formData.country, value: formData.country }] } =
    useGetCountriesQuery()
  const [updateProfile] = useUpdateUserProfileMutation()
  const [
    getCitiesByCountry,
    { data: citiesOptions = [{ title: formData.city, value: formData.city }] },
  ] = useGetCitiesMutation()

  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
    setValue,
    watch,
  } = useProfileForm(formData)
  const country = watch('country')

  useEffect(() => {
    if (!country) {
      return
    }
    setValue('city', '')
    getCitiesByCountry({ country })
  }, [country])
  console.log(watch('city'))
  const classNames = {
    form: s.form,
    formField(error?: string) {
      return error && s.formFieldWithError
    },
  }

  const onSubmitHandler = (data: UserProfileFormValuesType) => {
    updateProfile(data)
      .unwrap()
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
