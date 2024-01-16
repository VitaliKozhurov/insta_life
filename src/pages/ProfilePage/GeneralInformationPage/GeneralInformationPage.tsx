import { ReactElement } from 'react'

import { AuthLayout, ProfilePageLayout, RootLayout } from '@/pages'
import { HeadMeta } from '@/shared'
import { AddProfilePhoto, ProfileInfoForm } from '@/widgets'

import s from './GeneralInformationPage.module.scss'

export const GeneralInformationPage = () => {
  return (
    <>
      <HeadMeta title={'Profile'} />
      <main className={s.rootGeneral}>
        <AddProfilePhoto className={s.profilePhoto} />
        <ProfileInfoForm />
      </main>
    </>
  )
}

GeneralInformationPage.getLayout = (page: ReactElement) => {
  return (
    <RootLayout>
      <AuthLayout>
        <ProfilePageLayout>{page}</ProfilePageLayout>
      </AuthLayout>
    </RootLayout>
  )
}
