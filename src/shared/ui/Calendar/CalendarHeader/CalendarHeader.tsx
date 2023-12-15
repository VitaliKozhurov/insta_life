import { CaptionProps, useNavigation } from 'react-day-picker'

import { format } from 'date-fns'

import s from './CalendarHeader.module.scss'

export const CalendarHeader = ({ displayMonth }: CaptionProps) => {
  const { goToMonth, nextMonth, previousMonth } = useNavigation()

  const goPreviousMonthHandler = () => {
    previousMonth && goToMonth(previousMonth)
  }
  const goNextMonthHandler = () => {
    nextMonth && goToMonth(nextMonth)
  }

  return (
    <div className={s.root}>
      <h3 className={s.title}>{format(displayMonth, 'MMMM yyyy')}</h3>
      <div className={s.controls}>
        <button className={s.control} disabled={!previousMonth} onClick={goPreviousMonthHandler}>
          Previous
        </button>
        <button className={s.control} disabled={!nextMonth} onClick={goNextMonthHandler}>
          Next
        </button>
      </div>
    </div>
  )
}
