import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  KeyboardEvent,
  ReactNode,
  forwardRef,
  useState,
} from 'react'

import { ClosedEyeIcon, OpenedEyeIcon } from '@/shared/assets'
import { TypographyVariant } from '@/shared/types'
import { Typography } from '@/shared/ui'
import clsx from 'clsx'

import s from './Input.module.scss'

export type InputProps = {
  error?: string
  isRequired?: boolean
  label?: string
  leftIcon?: ReactNode
  onChangeValue?: (value: string) => void
  onEnter?: ComponentPropsWithoutRef<'input'>['onKeyDown']
  onLeftIconClickHandler?: () => void
  onRightIconClickHandler?: () => void
  rightIcon?: ReactNode
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false)

  const {
    className,
    error,
    isRequired,
    label,
    leftIcon,
    onChange,
    onChangeValue,
    onEnter,
    onKeyDown,
    onLeftIconClickHandler,
    onRightIconClickHandler,
    rightIcon,
    type,
    ...restProps
  } = props

  const setVisiblePasswordHandler = () => {
    setIsVisiblePassword(prevState => !prevState)
  }

  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onChangeValue?.(e.currentTarget.value)
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      onEnter?.(e)
    }
    onKeyDown?.(e)
  }

  const classNames = {
    input: clsx(s.input, !!leftIcon && s.isLeftIcon, !!rightIcon && s.isRightIcon),
    inputWrapper: clsx(
      s.inputWrapper,
      !!restProps.value && s.active,
      restProps.disabled && s.disabled,
      !!error && s.error
    ),
    label: clsx(s.label, restProps.disabled && s.disabledText),
    leftIcon: s.leftIcon,
    requiredMark: s.requiredMark,
    rightIcon: s.rightIcon,
    root: clsx(s.root, className),
  }
  const inputType = type === 'password' && isVisiblePassword ? 'text' : type
  const dynamicRightIcon = getRightInputIcon(type || 'text', isVisiblePassword, rightIcon)

  return (
    <div className={classNames.root}>
      {label && (
        <Typography
          as={'label'}
          className={classNames.label}
          variant={TypographyVariant.Regular_14}
        >
          {label}
          {isRequired && (
            <Typography
              as={'span'}
              className={s.requiredMark}
              variant={TypographyVariant.Regular_14}
            >
              *
            </Typography>
          )}
        </Typography>
      )}
      <div className={classNames.inputWrapper}>
        <input
          className={classNames.input}
          onChange={onChangeValueHandler}
          onKeyDown={onKeyPressHandler}
          ref={ref}
          tabIndex={0}
          type={inputType}
          {...restProps}
        />
        <InputIcon
          className={classNames.leftIcon}
          icon={leftIcon}
          onClick={onLeftIconClickHandler}
        />
        <InputIcon
          className={classNames.rightIcon}
          icon={dynamicRightIcon}
          onClick={type === 'password' ? setVisiblePasswordHandler : onRightIconClickHandler}
        />
      </div>
      {!!error && (
        <Typography as={'span'} variant={TypographyVariant.ERROR}>
          {error}
        </Typography>
      )}
    </div>
  )
})

type IconProps = {
  className?: string
  icon?: ReactNode
  onClick?: () => void
}

const InputIcon = ({ className, icon, onClick }: IconProps) => {
  if (!icon) {
    return null
  }

  return (
    <button className={className} onClick={onClick} type={'button'}>
      {icon}
    </button>
  )
}

const getRightInputIcon = (type: string, isVisible: boolean, rightIcon: ReactNode) => {
  if (type === 'password' && isVisible) {
    return <OpenedEyeIcon size={2.4} />
  } else if (type === 'password' && !isVisible) {
    return <ClosedEyeIcon size={2.4} />
  } else {
    return rightIcon
  }
}
