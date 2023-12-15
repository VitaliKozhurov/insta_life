import { Flag, SelectOptions } from '@/shared/ui'

import en from '/public/flags/en.png'
import ru from '/public/flags/ru.png'

export const getLanguageOptions = (locale?: string): SelectOptions[] => [
  { icon: <Flag size={2} src={ru} />, title: locale === 'en' ? 'Russian' : 'Русский', value: 'ru' },
  {
    icon: <Flag size={2} src={en} />,
    title: locale === 'en' ? 'English' : 'Английский',
    value: 'en',
  },
]
