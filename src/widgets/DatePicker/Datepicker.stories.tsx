import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'
import { DateRange } from 'react-day-picker'

import { DateInput } from '@/shared'

import { DatePicker, DatePickerProps } from './DatePicker'

const meta = {
  component: DatePicker,
  tags: ['autodocs'],
  title: 'Widgets/DatePicker',
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

const DatePickerWithState = ({ mode }: { mode: DatePickerProps['mode'] }) => {
  const [selectedDay, setSelectedDay] = useState<Date>()
  const [range, setRange] = useState<DateRange | undefined>()

  return (
    <DatePicker
      daysRange={range}
      mode={mode}
      selectedDay={selectedDay}
      setDaysRange={setRange}
      setSelectedDay={setSelectedDay}
    >
      <DateInput
        daysRange={range}
        mode={mode}
        placeholder={'00/00/0000'}
        selectedDay={selectedDay}
      />
    </DatePicker>
  )
}

export const SingleDatePicker: Story = {
  args: {
    children: null,
    mode: 'single',
  },
  render: args => <DatePickerWithState mode={args.mode} />,
}

export const RangeDatePicker: Story = {
  args: {
    children: null,
    mode: 'range',
  },
  render: args => <DatePickerWithState mode={args.mode} />,
}
