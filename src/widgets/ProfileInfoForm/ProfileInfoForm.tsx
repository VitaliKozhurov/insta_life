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
  const { formData, formErrorsText, formNotificationsText, formText, updateProfile } = useProfile()
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useProfileForm(formData, formErrorsText)
  const country = watch('country')

  const { citiesLoading, citiesOptions } = useUpdateCity({ country, setValue })

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
        getToast({
          text: formNotificationsText.successfulSave,
          variant: 'success',
          withClose: true,
        })
      )
      .catch(() => {
        getToast({ text: formNotificationsText.errorSave, variant: 'error', withClose: true })
      })
  }

  return (
    <form className={classNames.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <ControlledInput
        control={control}
        isRequired
        label={formText.userNameLabel}
        name={'username'}
      />
      <ControlledInput
        className={classNames.formField(errors.firstName?.message)}
        control={control}
        isRequired
        label={formText.firstNameLabel}
        name={'firstName'}
      />
      <ControlledInput
        className={classNames.formField(errors.lastName?.message)}
        control={control}
        isRequired
        label={formText.lastNameLabel}
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
                label={formText.dateOfBirth}
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
            label={formText.countrySelectLabel}
            name={'country'}
            options={COUNTRIES_LIST}
            placeholder={formText.countrySelectPlaceholder}
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
            label={formText.citySelectLabel}
            name={'city'}
            options={citiesOptions}
            placeholder={formText.citySelectPlaceholder}
          >
            <ProfileSelectChildren options={citiesOptions} />
          </ControlledSelect>
        </div>
      </div>
      <ControlledTextField
        control={control}
        fullWidth
        label={formText.textFieldLabel}
        name={'aboutMe'}
      />
      <Button className={s.submitButton}>{formText.saveFormButton}</Button>
    </form>
  )
}
