import { CaptionProps, useNavigation } from 'react-day-picker'

import { ArrowLeftIcon, ArrowRightIcon, firstLetterUppercaseTransform } from '@/shared'
import { format } from 'date-fns'
import { enUS, ru } from 'date-fns/locale'
import { useRouter } from 'next/router'

import s from './CalendarHeader.module.scss'

export const CalendarHeader = ({ displayMonth }: CaptionProps) => {
  const { locale } = useRouter()
  const currentLocale = locale === 'ru' ? ru : enUS
  const { goToMonth, nextMonth, previousMonth } = useNavigation()

  const goPreviousMonthHandler = () => {
    previousMonth && goToMonth(previousMonth)
  }
  const goNextMonthHandler = () => {
    nextMonth && goToMonth(nextMonth)
  }
  const month = firstLetterUppercaseTransform(
    format(displayMonth, 'LLLL yyyy', { locale: currentLocale })
  )

  return (
    <div className={s.root}>
      <h3 className={s.title}>{month}</h3>
      <div className={s.controls}>
        <button className={s.control} disabled={!previousMonth} onClick={goPreviousMonthHandler}>
          <ArrowLeftIcon size={2} />
        </button>
        <button className={s.control} disabled={!nextMonth} onClick={goNextMonthHandler}>
          <ArrowRightIcon size={2} />
        </button>
      </div>
    </div>
  )
}
