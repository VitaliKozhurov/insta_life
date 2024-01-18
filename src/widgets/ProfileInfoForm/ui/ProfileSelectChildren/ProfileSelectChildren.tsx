import { FixedSizeList } from 'react-window'

import { SelectItem, SelectOptions } from '@/shared'

import s from './ProfileSelectChildren.module.scss'
type Props = {
  options: SelectOptions[]
}

export const ProfileSelectChildren = ({ options }: Props) => {
  return (
    <FixedSizeList
      className={s.scrollContainer}
      height={250}
      itemCount={options.length}
      itemSize={36}
      width={'100%'}
    >
      {({ index, style }) => {
        return (
          <SelectItem
            className={s.example}
            key={options[index].value}
            style={style}
            {...options[index]}
          >
            {options[index].title}
          </SelectItem>
        )
      }}
    </FixedSizeList>
  )
}
