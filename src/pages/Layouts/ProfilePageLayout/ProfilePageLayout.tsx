import { ReactNode, useState } from 'react'

import { ProfileInfoSwitcher } from '@/widgets'

type Props = { children: ReactNode }

export const ProfilePageLayout = ({ children }: Props) => {
  const [tabValue, setTabValue] = useState('general')

  return (
    <>
      <ProfileInfoSwitcher setTabValue={setTabValue} tabValue={tabValue} />
      {children}
    </>
  )
}
