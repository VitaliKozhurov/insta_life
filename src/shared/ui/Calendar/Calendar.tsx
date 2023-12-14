import { useState } from 'react'
import { DayPicker } from 'react-day-picker'

import s from './Calendar.module.scss'

type Props = {
  mode: 'multiple' | 'range' | 'single'
}

export const Calendar = ({ mode }: Props) => {
  const [selected, setSelected] = useState<Date>()

  return (
    <DayPicker
      classNames={{
        cell: s.cell,
        day: s.day,
        day_outside: s.day_outside,
        day_today: s.day_today,
        head: s.head,
        head_cell: s.head_cell,
        head_row: s.head_row,
        root: s.root,
        row: s.row,
        table: s.table,
        tbody: s.tbody,
      }}
      mode={'single'}
      showOutsideDays
      weekStartsOn={1}
    />
  )
}
