import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { CalendarIcon } from '@/shared'
import clsx from 'clsx'

import s from './DateInput.module.scss'

type Props = {
  error?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const DateInput = forwardRef<ElementRef<'input'>, Props>(
  ({ disabled, error, label, placeholder }: Props) => {
    const classNames = {
      calendar: s.calendar,
      dateInput: s.dateInput,
      inputWrapper: s.inputWrapper,
      label: clsx(s.label, disabled && s.disabledLabel),
      root: s.root,
    }

    return (
      <div className={classNames.root}>
        {label && <label className={classNames.label}>{label}</label>}
        <div className={classNames.inputWrapper}>
          <input className={classNames.dateInput} placeholder={placeholder} value={''} />
          <button className={classNames.calendar}>
            <CalendarIcon />
          </button>
        </div>
        {error && <span></span>}
      </div>
    )
  }
)
