import type { Meta, StoryObj } from '@storybook/react'

import { DateInput } from './DateInput'

const meta = {
  component: DateInput,
  tags: ['autodocs'],
  title: 'Components/DateInput',
} satisfies Meta<typeof DateInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Date',
    placeholder: '00/00/0000',
  },
}

export const DateInputWithError: Story = {
  args: {
    error: 'Some error!',
    label: 'Date with error',
    placeholder: '00/00/0000',
  },
}

export const DisabledDateInput: Story = {
  args: {
    disabled: true,
    label: 'Date with disable state',
    placeholder: '00/00/0000',
  },
}

export const DateInputSingleMode: Story = {
  args: {
    label: 'Single mode date',
    selectedDay: new Date(),
  },
}
const today = new Date()
const nextDay = new Date(today)

nextDay.setDate(today.getDate() + 1)

export const DateInputRangeMode: Story = {
  args: {
    daysRange: { from: new Date(), to: nextDay },
    label: 'Range mode date',
    mode: 'range',
  },
}
