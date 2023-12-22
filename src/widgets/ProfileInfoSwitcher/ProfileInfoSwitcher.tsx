import { TabItem, Tabs, useTranslation } from '@/shared'

type Props = {
  setTabValue: (value: string) => void
  tabValue: string
}

export const ProfileInfoSwitcher = ({ setTabValue, tabValue }: Props) => {
  const {
    text: {
      profilePage: { tabSwitcher: t },
    },
  } = useTranslation()

  return (
    <Tabs onValueChange={setTabValue} value={tabValue}>
      <TabItem value={'general'}>{t.general}</TabItem>
      <TabItem value={'devices'}>{t.devices}</TabItem>
      <TabItem value={'account'}>{t.account}</TabItem>
      <TabItem value={'payments'}>{t.payments}</TabItem>
    </Tabs>
  )
}
