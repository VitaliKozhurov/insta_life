import { ComponentPropsWithoutRef } from 'react'

import s from './TextField.module.scss'
type Props = { error: string; label: string } & ComponentPropsWithoutRef<'textarea'>

export const TextField = ({ children, className, disabled, error, label, ...restProps }: Props) => {
  const classNames = {
    error: s.error,
    label: s.label,
    root: s.root,
    text: s.text,
  }

  return (
    <div className={classNames.root}>
      {label && <label className={classNames.label}>{label}</label>}
      <textarea className={classNames.text} {...restProps}>
        {children}
      </textarea>
      {error && <span className={classNames.error}>{error}</span>}
    </div>
  )
}
