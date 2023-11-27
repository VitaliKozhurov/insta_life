import type { Meta, StoryObj } from '@storybook/react'

import { BellIcon } from '@/shared'

import { DropDown } from './DropDown'

const meta = {
  component: DropDown,
  tags: ['autodocs'],
  title: 'Components/DropDown',
} satisfies Meta<typeof DropDown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <h1>Example</h1>,
    trigger: <BellIcon />,
  },
}
