import { HTMLProps, ReactNode, SVGProps } from 'react'

export type IconProps = {
  color?: string
  size?: number
  svgProps?: SVGProps<SVGSVGElement>
} & Omit<HTMLProps<HTMLSpanElement>, 'color' | 'size'>

type IconWrapperProps = { icon: ReactNode } & IconProps

export const IconWrapper = ({
  color: colorProp,
  icon,
  size: sizeProp,
  ...restProps
}: IconWrapperProps) => {
  const color = colorProp ? colorProp : 'currentColor'
  const size = sizeProp ? `${sizeProp}rem` : '2.4rem'

  return (
    <span
      aria-hidden={'true'}
      role={'img'}
      style={{
        color: color,
        display: 'inline-flex',
        fontSize: 'inherit',
        height: size,
        width: size,
      }}
      {...restProps}
    >
      {icon}
    </span>
  )
}
