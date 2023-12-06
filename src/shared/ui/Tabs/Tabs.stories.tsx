import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { action } from '@storybook/addon-actions'

import { TabItem } from './TabItem'
import { Tabs, TabsProps } from './Tabs'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
}

export default meta
type Story = StoryObj<typeof meta>

const children = (
  <>
    <TabItem value={'one'}>One</TabItem>
    <TabItem value={'two'}>Two</TabItem>
    <TabItem disabled value={'three'}>
      Three
    </TabItem>
    <TabItem value={'four'}>Four</TabItem>
  </>
)

export const Default: Story = {
  args: {
    children,
    value: 'one',
  },
}

const TabsWithHooks = (args: TabsProps) => {
  const [value, setValue] = useState('one')
  const onValueChange = (value: string) => {
    action('Choose new value: ')(value)
    setValue(value)
  }

  return (
    <Tabs onValueChange={onValueChange} value={value}>
      {args.children}
    </Tabs>
  )
}

export const Controlled: Story = {
  args: { children },
  render: ({ children, ...restProps }) => <TabsWithHooks {...restProps}>{children}</TabsWithHooks>,
}
