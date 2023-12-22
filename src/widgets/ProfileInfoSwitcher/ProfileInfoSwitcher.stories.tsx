import type { Meta } from '@storybook/react'

import { useState } from 'react'

import { action } from '@storybook/addon-actions'

import { ProfileInfoSwitcher } from './ProfileInfoSwitcher'

const meta = {
  component: ProfileInfoSwitcher,
  tags: ['autodocs'],
  title: 'Widgets/ProfileInfoSwitcher',
} satisfies Meta<typeof ProfileInfoSwitcher>

export default meta

const ProfileInfoSwitcherWithHook = () => {
  const [tabValue, setTabValue] = useState('general')
  const onChangeTabValue = (value: string) => {
    action('Set tab value: ')(value)
    setTabValue(value)
  }

  return <ProfileInfoSwitcher setTabValue={onChangeTabValue} tabValue={tabValue} />
}

export const ControllerProfileInfoSwitcher = {
  render: () => <ProfileInfoSwitcherWithHook />,
}
