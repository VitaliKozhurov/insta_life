import type { Meta, StoryObj } from '@storybook/react'

import { Calendar } from './Calendar'

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  tags: ['autodocs'],
  title: ' Components/Calendar',
}

export default meta

type Story = StoryObj<typeof Calendar>

export const SingleSelectCalendar: Story = {
  args: {
    mode: 'single',
  },
}

export const RangeSelectCalendar: Story = {
  args: {
    mode: 'range',
  },
}
