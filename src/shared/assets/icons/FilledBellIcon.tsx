import { IconProps, IconWrapper } from './IconWrapper'

export const FilledBellIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'currentColor'}
          height={'100%'}
          viewBox={'0 0 18 20'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <path
            clipRule={'evenodd'}
            d={
              'M10.9998 16.3413C10.9998 17.2403 10.0838 18.0003 8.99985 18.0003C7.91585 18.0003 6.99985 17.2403 6.99985 16.3413V16.0003H10.9998V16.3413ZM17.5208 13.2073L15.7198 11.4043V6.9363C15.7198 3.4553 13.2178 0.499301 9.89885 0.0593006C7.97785 -0.195699 6.03785 0.390301 4.58285 1.6663C3.11885 2.9483 2.27985 4.7933 2.27985 6.7273L2.27885 11.4043L0.478847 13.2083C0.00984704 13.6773 -0.129153 14.3773 0.124847 14.9903C0.379847 15.6033 0.972847 16.0003 1.63685 16.0003H4.99985V16.3413C4.99985 18.3593 6.79385 20.0003 8.99985 20.0003C11.2058 20.0003 12.9998 18.3593 12.9998 16.3413V16.0003H16.3618C17.0258 16.0003 17.6188 15.6043 17.8728 14.9903C18.1278 14.3773 17.9888 13.6773 17.5208 13.2073Z'
            }
            fill={'currentColor'}
            fillRule={'evenodd'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}
