import { ChangeEvent, ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './TextField.module.scss'
export type TextFieldProps = { error: string; label: string } & ComponentPropsWithoutRef<'textarea'>

export const TextField = ({ className, error, label, onChange, ...restProps }: TextFieldProps) => {
  const classNames = {
    error: s.error,
    label: clsx(s.label, restProps.disabled && s.disabledLabel),
    root: s.root,
    text: clsx(s.text, !!restProps.value && s.active, error && s.withError),
  }

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(event)
    event.target.style.height = 'auto'
    event.target.style.height = `${event.target.scrollHeight}px`
  }

  return (
    <div className={classNames.root}>
      {label && (
        <label className={classNames.label} htmlFor={label}>
          {label}
        </label>
      )}
      <textarea className={classNames.text} id={label} onChange={onChangeHandler} {...restProps} />
      {error && <span className={classNames.error}>{error}</span>}
    </div>
  )
}
