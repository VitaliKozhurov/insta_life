import { TabItem, Tabs, useTranslation } from '@/shared'

type Props = {
  setTabValue: (value: string) => void
  tabValue: string
}

export const ProfileInfoSwitcher = ({ setTabValue, tabValue }: Props) => {
  const {
    router,
    text: {
      profilePage: { tabSwitcher: t },
    },
  } = useTranslation()
  const changeRouteHandler = (value: string) => {
    setTabValue(value)
    const redirectRoute = value.split('/')[2]

    router.push(redirectRoute)
  }

  return (
    <Tabs onValueChange={changeRouteHandler} value={tabValue}>
      <TabItem value={'/profile/general'}>{t.general}</TabItem>
      <TabItem value={'/profile/devices'}>{t.devices}</TabItem>
      <TabItem value={'/profile/account-management'}>{t.account}</TabItem>
      <TabItem value={'/profile/my-payments'}>{t.payments}</TabItem>
    </Tabs>
  )
}
