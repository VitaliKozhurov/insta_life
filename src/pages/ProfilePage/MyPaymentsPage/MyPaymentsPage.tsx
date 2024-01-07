import { ReactElement } from 'react'

import { AuthLayout, ProfilePageLayout, RootLayout } from '@/pages'
import { HeadMeta } from '@/shared'

export const MyPaymentsPage = () => {
  return (
    <>
      <HeadMeta title={'My payments'} />
      <main>
        <h1>MyPaymentsPage</h1>
      </main>
    </>
  )
}

MyPaymentsPage.getLayout = (page: ReactElement) => {
  return (
    <RootLayout>
      <AuthLayout>
        <ProfilePageLayout>{page}</ProfilePageLayout>
      </AuthLayout>
    </RootLayout>
  )
}
