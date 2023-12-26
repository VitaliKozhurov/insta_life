import { getFallBackUserName } from '@/shared'
import clsx from 'clsx'
import Image from 'next/image'

import s from './Avatar.module.scss'

type Props = {
  size: 'large' | 'small'
  src?: string
  userName: string
}

export const Avatar = ({ size, src, userName }: Props) => {
  const classNames = {
    image: s.image,
    root: clsx(s.root, s[size]),
    userName: s.userName,
  }

  const fallbackUserName = getFallBackUserName(userName)

  return (
    <div className={classNames.root}>
      {src && <Image alt={'User avatar'} className={classNames.image} fill src={src} />}
      {!src && <span className={classNames.userName}>{fallbackUserName}</span>}
    </div>
  )
}
