import { ReactElement } from 'react'

import { AuthLayout, ProfilePageLayout, RootLayout } from '@/pages'
import { Button, HeadMeta } from '@/shared'
import { AddProfilePhoto, ProfileInfoForm } from '@/widgets'

import s from './GeneralInformationPage.module.scss'

export const GeneralInformationPage = () => {
  return (
    <>
      <HeadMeta title={'Profile'} />
      <main>
        <div className={s.rootGeneral}>
          <AddProfilePhoto className={s.profilePhoto} />
          <ProfileInfoForm />
        </div>
        <div style={{ textAlign: 'right' }}>
          <Button>Save changes</Button>
        </div>
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
