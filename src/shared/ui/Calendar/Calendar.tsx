import { useState } from 'react'
import { ClassNames, DateRange, DayPicker } from 'react-day-picker'

import clsx from 'clsx'

import s from './Calendar.module.scss'

type Props = {
  mode: 'multiple' | 'range' | 'single'
}

export const Calendar = ({ mode }: Props) => {
  const [selected, setSelected] = useState<Date>()
  const [range, setRange] = useState<DateRange | undefined>()

  console.log(range)
  const classNames: ClassNames = {
    cell: s.cell,
    day: s.day,
    day_outside: s.day_outside,
    day_range_end: clsx(range?.to && s.day_range_end),
    day_range_middle: s.day_range_middle,
    day_range_start: clsx(range?.to && s.day_range_start),
    day_selected: s.day_selected,
    day_today: s.day_today,
    head: s.head,
    head_cell: s.head_cell,
    head_row: s.head_row,
    root: s.root,
    row: s.row,
    table: s.table,
    tbody: s.tbody,
  }

  if (mode === 'range') {
    return (
      <DayPicker
        classNames={classNames}
        mode={'range'}
        onSelect={setRange}
        selected={range}
        showOutsideDays
        weekStartsOn={1}
      />
    )
  }

  return (
    <DayPicker
      classNames={classNames}
      mode={'single'}
      onSelect={setSelected}
      selected={selected}
      showOutsideDays
      weekStartsOn={1}
    />
  )
}
