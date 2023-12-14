import { ComponentPropsWithoutRef, useState } from 'react'
import { DayPicker } from 'react-day-picker'

type Props = {
  mode: 'multiple' | 'range' | 'single'
}

export const Calendar = ({ mode }: Props) => {
  const [selected, setSelected] = useState<Date>()

  return <DayPicker mode={mode} showOutsideDays />
}
