import { ReactElement } from 'react'

import { AuthLayout, RootLayout } from '@/pages'
import { HeadMeta, Typography, TypographyVariant } from '@/shared'

export const ProfilePage = () => {
  return (
    <>
      <HeadMeta title={'Profile'} />
      <Typography as={'h1'} variant={TypographyVariant.Large}>
        Profile page
      </Typography>
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
