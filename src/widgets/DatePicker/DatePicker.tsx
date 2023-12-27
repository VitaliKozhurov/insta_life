import { useState } from 'react'
import { DateRange } from 'react-day-picker'

import { inter } from '@/application'
import { Calendar, DateInput } from '@/shared'
import * as RadixDropDown from '@radix-ui/react-dropdown-menu'
import { format } from 'date-fns'

import s from './DatePicker.module.scss'

type Props = {
  fullWidth?: boolean
  mode: 'range' | 'single'
}

const getDateInputValue = (
  mode: 'range' | 'single',
  selected?: Date | undefined,
  range?: DateRange | undefined
) => {
  if (mode === 'single' && selected) {
    return format(selected, 'dd/MM/yyyy')
  }
  if (mode === 'range' && range) {
    const from = range.from && format(range.from, 'dd/MM/yyyy')
    const to = range.to && format(range.to, 'dd/MM/yyyy')

    return `${from || '00/00/0000'} - ${to || '00/00/0000'}`
  }

  return ''
}

export const DatePicker = ({ fullWidth, mode }: Props) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Date>()
  const [range, setRange] = useState<DateRange | undefined>()

  const dateValue = getDateInputValue(mode, selected, range)

  return (
    <RadixDropDown.Root onOpenChange={setOpen} open={open}>
      <RadixDropDown.Trigger asChild>
        <div className={s.trigger}>
          <DateInput fullWidth mode={mode} placeholder={'00/00/0000'} value={dateValue} />
        </div>
      </RadixDropDown.Trigger>
      <RadixDropDown.Portal>
        <RadixDropDown.Content align={'start'} className={s.content}>
          <Calendar
            className={inter.className}
            mode={mode}
            range={range}
            selected={selected}
            setRange={setRange}
            setSelected={setSelected}
          />
        </RadixDropDown.Content>
      </RadixDropDown.Portal>
    </RadixDropDown.Root>
  )
}
