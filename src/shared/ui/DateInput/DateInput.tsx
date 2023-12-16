import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { CalendarIcon } from '@/shared'
import clsx from 'clsx'

import s from './DateInput.module.scss'

type Props = {
  error?: string
  label?: string
  mode?: 'range' | 'single'
} & ComponentPropsWithoutRef<'input'>

export const DateInput = forwardRef<ElementRef<'input'>, Props>(
  ({ className, disabled, error, label, mode = 'single', placeholder, ...restProps }: Props) => {
    const classNames = {
      calendar: s.calendar,
      dateInput: clsx(s.dateInput, error && s.dateInputWithError),
      error: s.error,
      inputWrapper: clsx(
        s.inputWrapper,
        error && s.wrapperWithError,
        disabled && s.disabledWrapper
      ),
      label: clsx(s.label, disabled && s.disabledLabel),
      root: clsx(s.root, mode === 'range' && s.rangeMode, className),
    }
    const datePlaceholder = mode === 'single' ? placeholder : placeholder + ' - ' + placeholder

    return (
      <div className={classNames.root}>
        {label && <label className={classNames.label}>{label}</label>}
        <div className={classNames.inputWrapper} tabIndex={1}>
          <input
            className={classNames.dateInput}
            disabled={disabled}
            placeholder={datePlaceholder}
            {...restProps}
          />
          <button className={classNames.calendar} disabled={disabled}>
            <CalendarIcon />
          </button>
        </div>
        {error && <span className={classNames.error}>{error}</span>}
      </div>
    )
  }
)
