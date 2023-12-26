import { ReactElement, useState } from 'react'

import { AuthLayout, RootLayout } from '@/pages'
import { HeadMeta } from '@/shared'
import { AddProfilePhoto, ProfileInfoForm, ProfileInfoSwitcher } from '@/widgets'

import s from './ProfilePage.module.scss'

export const ProfilePage = () => {
  const [tabValue, setTabValue] = useState('general')
  const classNames = {
    rootGeneral: s.rootGeneral,
  }

  return (
    <>
      <HeadMeta title={'Profile'} />
      <ProfileInfoSwitcher setTabValue={setTabValue} tabValue={tabValue} />
      {tabValue === 'general' && (
        <div className={s.rootGeneral}>
          <AddProfilePhoto />
          <ProfileInfoForm />
        </div>
      )}
    </>
  )
}

ProfilePage.getLayout = (page: ReactElement) => {
  return (
    <RootLayout>
      <AuthLayout>{page}</AuthLayout>
    </RootLayout>
  )
}
