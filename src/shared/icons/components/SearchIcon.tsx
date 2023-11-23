import { IconProps, IconWrapper } from '../IconWrapper'

export const SearchIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'currentColor'}
          height={'100%'}
          viewBox={'0 0 19 19'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <path
            d={
              'm17.71 16.29-3.4-3.39A7.92 7.92 0 0 0 16 8a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}
