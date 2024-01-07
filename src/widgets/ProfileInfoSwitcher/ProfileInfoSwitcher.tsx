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
    const path = '/profile/' + value

    router.push(path)
  }

  return (
    <Tabs onValueChange={changeRouteHandler} value={tabValue}>
      <TabItem value={'general'}>{t.general}</TabItem>
      <TabItem value={'devices'}>{t.devices}</TabItem>
      <TabItem value={'account-management'}>{t.account}</TabItem>
      <TabItem value={'my-payments'}>{t.payments}</TabItem>
    </Tabs>
  )
}
