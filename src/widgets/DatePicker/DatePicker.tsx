import { ReactNode, useState } from 'react'
import { DateRange } from 'react-day-picker'

import { inter } from '@/application'
import { Calendar, Routes, Trans } from '@/shared'
import * as RadixDropDown from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'
import Link from 'next/link'

import s from './DatePicker.module.scss'

export type DatePickerProps = {
  children: ReactNode
  daysRange?: DateRange | undefined
  error?: string
  mode: 'range' | 'single'
  selectedDay?: Date | undefined
  setDaysRange?: (daysRange: DateRange | undefined) => void
  setSelectedDay?: (day: Date | undefined) => void
}

export const DatePicker = ({
  children,
  daysRange,
  error,
  mode,
  selectedDay,
  setDaysRange,
  setSelectedDay,
}: DatePickerProps) => {
  const [open, setOpen] = useState(false)
  const classNames = {
    error: s.error,
    link: s.link,
    root: clsx(error && s.dateInputWithError),
  }

  return (
    <RadixDropDown.Root onOpenChange={setOpen} open={open}>
      <div className={classNames.root}>
        <RadixDropDown.Trigger asChild>
          <div>{children}</div>
        </RadixDropDown.Trigger>
        {
          <span className={classNames.error}>
            <Trans
              tags={{
                1: () => (
                  <Link className={classNames.link} href={Routes.PRIVACY_POLICY}>
                    {'Privacy Policy'}
                  </Link>
                ),
              }}
              text={error || ''}
            />
          </span>
        }
      </div>

      <RadixDropDown.Portal>
        <RadixDropDown.Content align={'start'}>
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
