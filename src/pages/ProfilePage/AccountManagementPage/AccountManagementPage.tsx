import { ReactElement } from 'react'

import { AuthLayout, ProfilePageLayout, RootLayout } from '@/pages'
import { HeadMeta } from '@/shared'

export const AccountManagementPage = () => {
  return (
    <>
      <HeadMeta title={'Account management'} />
      <main>
        <h1>AccountManagementPage</h1>
      </main>
    </>
  )
}

AccountManagementPage.getLayout = (page: ReactElement) => {
  return (
    <RootLayout>
      <AuthLayout>
        <ProfilePageLayout>{page}</ProfilePageLayout>
      </AuthLayout>
    </RootLayout>
  )
}
