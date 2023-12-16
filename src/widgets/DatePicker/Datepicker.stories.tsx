import type { Meta, StoryObj } from '@storybook/react'

import { DatePicker } from './DatePicker'

const meta = {
  component: DatePicker,
  tags: ['autodocs'],
  title: 'Widgets/DatePicker',
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const SingleDatePicker: Story = {
  args: {
    mode: 'single',
  },
}

export const RangeDatePicker: Story = {
  args: {
    mode: 'range',
  },
}
