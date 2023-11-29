import type { Meta, StoryObj } from '@storybook/react'

import { inter } from '@/application'
import { Flag, SelectOptions } from '@/shared/ui'

import { Header } from './Header'
import en from '/public/flags/en.png'
import ru from '/public/flags/ru.png'

const meta = {
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Widgets/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

const languageOptions: SelectOptions[] = [
  { className: inter.className, icon: <Flag size={2} src={ru} />, title: 'Russian', value: 'ru' },
  { className: inter.className, icon: <Flag size={2} src={en} />, title: 'English', value: 'en' },
]

export const LoggedIn: Story = {
  args: {
    isLoggedIn: true,
    options: languageOptions,
  },
}

export const UnLogged: Story = {
  args: {
    isLoggedIn: false,
    options: languageOptions,
  },
}
