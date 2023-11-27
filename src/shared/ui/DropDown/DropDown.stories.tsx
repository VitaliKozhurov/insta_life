import type { Meta, StoryObj } from '@storybook/react'

import { inter } from '@/application'
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
    children: (
      <>
        <h1 style={{ borderBottom: '1px solid white' }}>Example text</h1>
        <h1 style={{ borderBottom: '1px solid white' }}>Example text</h1>
        <h1 style={{ borderBottom: '1px solid white' }}>Example text</h1>
        <h1 style={{ borderBottom: '1px solid white' }}>Example text</h1>
        <h1 style={{ borderBottom: '1px solid white' }}>Example text</h1>
        <h1 style={{ borderBottom: '1px solid white' }}>Example text</h1>
        <h1 style={{ borderBottom: '1px solid white' }}>Example text</h1>
        <h1 style={{ borderBottom: '1px solid white' }}>Example text</h1>
        <h1 style={{ borderBottom: '1px solid white' }}>Example text</h1>
        <h1 style={{ borderBottom: '1px solid white' }}>Example text</h1>
        <h1 style={{ borderBottom: '1px solid white' }}>Example text</h1>
      </>
    ),
    className: inter.className,
    dropDownTitle: 'Уведомления',
    trigger: <BellIcon size={2} />,
  },
}
