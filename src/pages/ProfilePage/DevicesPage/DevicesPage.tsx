import { ReactElement } from 'react'

import { AuthLayout, ProfilePageLayout, RootLayout } from '@/pages'
import { HeadMeta } from '@/shared'

export const DevicesPage = () => {
  return (
    <>
      <HeadMeta title={'Profile'} />
      <main>
        <h1>Devices</h1>
      </main>
    </>
  )
}

DevicesPage.getLayout = (page: ReactElement) => {
  return (
    <RootLayout>
      <AuthLayout>
        <ProfilePageLayout>{page}</ProfilePageLayout>
      </AuthLayout>
    </RootLayout>
  )
}
