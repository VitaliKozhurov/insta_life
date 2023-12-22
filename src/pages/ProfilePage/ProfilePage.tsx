import { ReactElement, useState } from 'react'

import { AuthLayout, RootLayout } from '@/pages'
import { HeadMeta } from '@/shared'
import { ProfileInfoSwitcher } from '@/widgets'

export const ProfilePage = () => {
  const [tabValue, setTabValue] = useState('general')

  return (
    <>
      <HeadMeta title={'Profile'} />
      <ProfileInfoSwitcher setTabValue={setTabValue} tabValue={tabValue} />
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
