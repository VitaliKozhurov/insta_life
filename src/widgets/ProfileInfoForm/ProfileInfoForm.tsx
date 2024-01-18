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
  useTranslation,
} from '@/shared'
import { DatePicker } from '@/widgets'

import s from './ProfileInfoForm.module.scss'

import { UserProfileFormValuesType, useProfile, useProfileForm, useUpdateCity } from './lib'
import { ProfileSelectChildren } from './ui/ProfileSelectChildren'

export const ProfileInfoForm = () => {
  const { text } = useTranslation()
  const t = text.profilePage.general.profileInfoForm
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
      <ControlledInput control={control} isRequired label={t.userNameLabel} name={'username'} />
      <ControlledInput
        className={classNames.formField(errors.firstName?.message)}
        control={control}
        isRequired
        label={t.firstNameLabel}
        name={'firstName'}
      />
      <ControlledInput
        className={classNames.formField(errors.lastName?.message)}
        control={control}
        isRequired
        label={t.lastNameLabel}
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
                label={t.dateOfBirth}
                mode={'single'}
                placeholder={'00/00/0000'}
                selectedDay={value}
              />
            </DatePicker>
          )
        }}
      />
      <div className={s.selectWrapper}>
        <div>
          <ControlledSelect
            className={s.select}
            control={control}
            fullWidth
            label={t.countrySelectLabel}
            name={'country'}
            options={COUNTRIES_LIST}
            placeholder={t.countrySelectPlaceholder}
          >
            <ProfileSelectChildren options={COUNTRIES_LIST} />
          </ControlledSelect>
        </div>
        <div>
          <ControlledSelect
            className={s.select}
            control={control}
            disabled={citiesLoading}
            fullWidth
            label={t.citySelectLabel}
            name={'city'}
            options={citiesOptions}
            placeholder={t.citySelectPlaceholder}
          >
            <ProfileSelectChildren options={citiesOptions} />
          </ControlledSelect>
        </div>
      </div>
      <ControlledTextField control={control} fullWidth label={t.textFieldLabel} name={'aboutMe'} />
      <Button className={s.submitButton}>Save changes</Button>
    </form>
  )
}
