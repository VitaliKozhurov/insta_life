import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { DateRange } from 'react-day-picker'

import { CalendarIcon, getDateInputValue } from '@/shared'
import clsx from 'clsx'

import s from './DateInput.module.scss'

type Props = {
  daysRange?: DateRange | undefined
  error?: string
  fullWidth?: boolean
  label?: string
  mode?: 'range' | 'single'
  selectedDay?: Date | undefined
} & ComponentPropsWithoutRef<'input'>

export const DateInput = forwardRef<ElementRef<'input'>, Props>(
  (
    {
      className,
      daysRange,
      disabled,
      error,
      fullWidth,
      label,
      mode = 'single',
      placeholder,
      selectedDay,
      ...restProps
    }: Props,
    ref
  ) => {
    const classNames = {
      calendar: s.calendar,
      dateInput: clsx(s.dateInput, error && s.dateInputWithError),
      inputWrapper: clsx(
        s.inputWrapper,
        error && s.wrapperWithError,
        disabled && s.disabledWrapper
      ),
      label: clsx(s.label, disabled && s.disabledLabel),
      root: clsx(s.root, fullWidth && s.fullWidth, mode === 'range' && s.rangeMode, className),
    }

    const datePlaceholder = mode === 'single' ? placeholder : placeholder + ' - ' + placeholder
    const inputValue = getDateInputValue(mode, selectedDay, daysRange)

    return (
      <div className={classNames.root}>
        {label && <label className={classNames.label}>{label}</label>}
        <div className={classNames.inputWrapper} tabIndex={1}>
          <input
            className={classNames.dateInput}
            disabled={disabled}
            placeholder={datePlaceholder}
            readOnly
            ref={ref}
            value={inputValue}
            {...restProps}
          />
          <button className={classNames.calendar} disabled={disabled} type={'button'}>
            <CalendarIcon />
          </button>
        </div>
      </div>
    )
  }
)
