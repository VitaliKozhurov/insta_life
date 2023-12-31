import Image from 'next/image'

import s from './Flag.module.scss'
type Props = {
  alt?: string
  size: number
  src: any
}
export const Flag = ({ alt = 'Country Flag', size, src }: Props) => {
  return (
    <span className={s.flag} style={{ height: `${size}rem`, width: `${size}rem` }}>
      <Image alt={alt} src={src} style={{ height: '100%', objectFit: 'cover', width: '100%' }} />
    </span>
  )
}
