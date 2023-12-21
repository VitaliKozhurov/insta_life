import { IconProps, IconWrapper } from './IconWrapper'

export const FilledMessengerIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'currentColor'}
          height={'100%'}
          viewBox={'0 0 24 24'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <path
            d={
              'M19.07 4.92999C17.4292 3.27849 15.2636 2.2512 12.9466 2.02523C10.6296 1.79926 8.30634 2.38877 6.37738 3.69212C4.44842 4.99548 3.03463 6.931 2.37976 9.165C1.72489 11.399 1.86997 13.7915 2.79 15.93C2.88589 16.1288 2.91735 16.3525 2.88 16.57L2 20.8C1.96609 20.9622 1.97302 21.1302 2.02014 21.2891C2.06727 21.4479 2.15313 21.5925 2.27 21.71C2.3658 21.8051 2.47987 21.8798 2.60533 21.9297C2.73079 21.9795 2.86504 22.0034 3 22H3.2L7.48 21.14C7.69753 21.1138 7.91812 21.1449 8.12 21.23C10.2585 22.15 12.651 22.2951 14.885 21.6402C17.119 20.9854 19.0545 19.5716 20.3579 17.6426C21.6612 15.7136 22.2507 13.3904 22.0248 11.0734C21.7988 8.75635 20.7715 6.59078 19.12 4.94999L19.07 4.92999ZM8 13C7.80222 13 7.60888 12.9413 7.44443 12.8315C7.27998 12.7216 7.1518 12.5654 7.07612 12.3827C7.00043 12.2 6.98063 11.9989 7.01921 11.8049C7.0578 11.6109 7.15304 11.4327 7.29289 11.2929C7.43274 11.153 7.61092 11.0578 7.80491 11.0192C7.99889 10.9806 8.19995 11.0004 8.38268 11.0761C8.56541 11.1518 8.72158 11.28 8.83147 11.4444C8.94135 11.6089 9 11.8022 9 12C9 12.2652 8.89464 12.5196 8.7071 12.7071C8.51957 12.8946 8.26521 13 8 13ZM12 13C11.8022 13 11.6089 12.9413 11.4444 12.8315C11.28 12.7216 11.1518 12.5654 11.0761 12.3827C11.0004 12.2 10.9806 11.9989 11.0192 11.8049C11.0578 11.6109 11.153 11.4327 11.2929 11.2929C11.4327 11.153 11.6109 11.0578 11.8049 11.0192C11.9989 10.9806 12.2 11.0004 12.3827 11.0761C12.5654 11.1518 12.7216 11.28 12.8315 11.4444C12.9413 11.6089 13 11.8022 13 12C13 12.2652 12.8946 12.5196 12.7071 12.7071C12.5196 12.8946 12.2652 13 12 13ZM16 13C15.8022 13 15.6089 12.9413 15.4444 12.8315C15.28 12.7216 15.1518 12.5654 15.0761 12.3827C15.0004 12.2 14.9806 11.9989 15.0192 11.8049C15.0578 11.6109 15.153 11.4327 15.2929 11.2929C15.4327 11.153 15.6109 11.0578 15.8049 11.0192C15.9989 10.9806 16.2 11.0004 16.3827 11.0761C16.5654 11.1518 16.7216 11.28 16.8315 11.4444C16.9413 11.6089 17 11.8022 17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13Z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}
