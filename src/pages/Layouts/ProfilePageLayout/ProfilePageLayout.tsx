import { ReactNode, useState } from 'react'

import { ProfileInfoSwitcher } from '@/widgets'
import { useRouter } from 'next/router'

type Props = { children: ReactNode }

export const ProfilePageLayout = ({ children }: Props) => {
  const { pathname } = useRouter()

  const [tabValue, setTabValue] = useState(pathname)

  return (
    <>
      <ProfileInfoSwitcher setTabValue={setTabValue} tabValue={tabValue} />
      {children}
    </>
  )
}
