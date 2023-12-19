import { ReactElement } from 'react'

import { AuthLayout, RootLayout } from '@/pages'
import { HeadMeta, useTranslation } from '@/shared'

export const HomePage = () => {
  const { text } = useTranslation()

  return (
    <>
      <HeadMeta title={'Profile'} />
      <h1>Home page</h1>
      <h1>Home page</h1>
      <h1>Home page</h1>
      <h1>Home page</h1>
      <h1>Home page</h1>
      <h1>Home page</h1>
      <h1>Home page</h1>
      <h1>Home page</h1>
      <h1>Home page</h1>

      <h1>Home page</h1>
      <h1>Home page</h1>
      <h1>Home page</h1>
      <h1>Home page</h1>
      <h1>Home page</h1>
      <h1>Home page</h1>
      <h2>{text.homePage.test}</h2>
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
