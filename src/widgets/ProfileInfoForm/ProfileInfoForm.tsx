import { Controller } from 'react-hook-form'

import {
  Button,
  COUNTRIES_LIST,
  ControlledInput,
  ControlledSelect,
  ControlledTextField,
  DateInput,
  getToast,
  useTranslation,
} from '@/shared'
import { DatePicker } from '@/widgets'

import s from './ProfileInfoForm.module.scss'

import { UserProfileFormValuesType, useProfile, useProfileForm, useUpdateCity } from './lib'
import { ProfileSelectChildren } from './ui/ProfileSelectChildren'

export const ProfileInfoForm = () => {
  const { text } = useTranslation()
  const { profileInfoForm, profileInfoFormErrors, profileNotifications } = text.profilePage.general

  const { citiesLoading, citiesOptions, formData, getCitiesByCountry, updateProfile } = useProfile()
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useProfileForm(formData, profileInfoFormErrors)
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
        getToast({ text: profileNotifications.successfulSave, variant: 'success', withClose: true })
      )
      .catch(() => {
        getToast({ text: profileNotifications.errorSave, variant: 'error', withClose: true })
      })
  }

  return (
    <form className={classNames.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <ControlledInput
        control={control}
        isRequired
        label={profileInfoForm.userNameLabel}
        name={'username'}
      />
      <ControlledInput
        className={classNames.formField(errors.firstName?.message)}
        control={control}
        isRequired
        label={profileInfoForm.firstNameLabel}
        name={'firstName'}
      />
      <ControlledInput
        className={classNames.formField(errors.lastName?.message)}
        control={control}
        isRequired
        label={profileInfoForm.lastNameLabel}
        name={'lastName'}
      />
      <Controller
        control={control}
        name={'dateOfBirth'}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <DatePicker
              error={error?.message}
              mode={'single'}
              selectedDay={value}
              setSelectedDay={onChange}
            >
              <DateInput
                error={error?.message}
                fullWidth
                label={profileInfoForm.dateOfBirth}
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
            label={profileInfoForm.countrySelectLabel}
            name={'country'}
            options={COUNTRIES_LIST}
            placeholder={profileInfoForm.countrySelectPlaceholder}
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
            label={profileInfoForm.citySelectLabel}
            name={'city'}
            options={citiesOptions}
            placeholder={profileInfoForm.citySelectPlaceholder}
          >
            <ProfileSelectChildren options={citiesOptions} />
          </ControlledSelect>
        </div>
      </div>
      <ControlledTextField
        control={control}
        fullWidth
        label={profileInfoForm.textFieldLabel}
        name={'aboutMe'}
      />
      <Button className={s.submitButton}>{profileInfoForm.saveFormButton}</Button>
    </form>
  )
}
