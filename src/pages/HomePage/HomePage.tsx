import { ReactElement } from 'react'

import { AuthLayout, RootLayout } from '@/pages'
import { HeadMeta, Typography, TypographyVariant, useTranslation } from '@/shared'

export const HomePage = () => {
  const { text } = useTranslation()

  return (
    <>
      <HeadMeta title={'Profile'} />
      <Typography as={'h1'} variant={TypographyVariant.Large}>
        Main page
      </Typography>
    </>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return (
    <RootLayout>
      <AuthLayout>{page}</AuthLayout>
    </RootLayout>
  )
}
