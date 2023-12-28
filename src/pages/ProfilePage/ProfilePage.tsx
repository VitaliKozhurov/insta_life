import { ReactElement, useState } from 'react'

import { AuthLayout, RootLayout } from '@/pages'
import { Button, HeadMeta } from '@/shared'
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
      <main>
        <ProfileInfoSwitcher setTabValue={setTabValue} tabValue={tabValue} />
        {tabValue === 'general' && (
          <>
            <div className={s.rootGeneral}>
              <AddProfilePhoto className={s.profilePhoto} />
              <ProfileInfoForm />
            </div>
            <div style={{ textAlign: 'right' }}>
              <Button>Save changes</Button>
            </div>
          </>
        )}
      </main>
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
