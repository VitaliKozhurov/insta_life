import { ReactNode, useState } from 'react'
import { DateRange } from 'react-day-picker'

import { inter } from '@/application'
import { Calendar } from '@/shared'
import * as RadixDropDown from '@radix-ui/react-dropdown-menu'

import s from './DatePicker.module.scss'

export type DatePickerProps = {
  children: ReactNode
  daysRange?: DateRange | undefined
  mode: 'range' | 'single'
  selectedDay?: Date | undefined
  setDaysRange?: (daysRange: DateRange | undefined) => void
  setSelectedDay?: (day: Date | undefined) => void
}

export const DatePicker = ({
  children,
  daysRange,
  mode,
  selectedDay,
  setDaysRange,
  setSelectedDay,
}: DatePickerProps) => {
  const [open, setOpen] = useState(false)

  return (
    <RadixDropDown.Root onOpenChange={setOpen} open={open}>
      <RadixDropDown.Trigger asChild>
        <div className={s.trigger}>{children}</div>
      </RadixDropDown.Trigger>
      <RadixDropDown.Portal>
        <RadixDropDown.Content align={'start'} className={s.content}>
          <Calendar
            className={inter.className}
            mode={mode}
            range={daysRange}
            selected={selectedDay}
            setRange={setDaysRange}
            setSelected={setSelectedDay}
          />
        </RadixDropDown.Content>
      </RadixDropDown.Portal>
    </RadixDropDown.Root>
  )
}
