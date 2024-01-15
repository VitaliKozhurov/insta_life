import { DateRange } from 'react-day-picker'

import { format } from 'date-fns'

export const getDateInputValue = (
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
