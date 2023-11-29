import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { inter } from '@/application'
import { Flag } from '@/shared/ui'
import { action } from '@storybook/addon-actions'

import { Select, SelectOptions, SelectProps } from './Select'
import en from '/public/flags/en.png'
import ru from '/public/flags/ru.png'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const options: SelectOptions[] = [
  { className: inter.className, title: 'Russian', value: 'russian' },
  { className: inter.className, title: 'English', value: 'english' },
  { className: inter.className, title: 'Spanish', value: 'spanish' },
]

const optionsWithIcons: SelectOptions[] = [
  {
    className: inter.className,
    icon: <Flag size={2} src={ru} />,
    title: 'Russian',
    value: 'russian',
  },
  {
    className: inter.className,
    icon: <Flag size={2} src={en} />,
    title: 'English',
    value: 'english',
  },
]

export const Default: Story = {
  args: {
    label: 'Language select',
    options: options,
    value: options[0].value,
  },
}

export const DefaultWithIcons: Story = {
  args: {
    label: 'Language select',
    open: true,
    options: optionsWithIcons,
    value: optionsWithIcons[0].value,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Language select',
    options: options,
    value: options[0].value,
  },
}

const SelectWithHooks = (args: SelectProps) => {
  const [value, setValue] = useState(args.options[0].value)
  const onValueChange = (value: string) => {
    setValue(value)
    action('Set language: ')(value)
  }

  return (
    <>
      <Select onValueChange={onValueChange} options={args.options} value={value} />
    </>
  )
}

export const Controlled: Story = {
  args: {
    options: options,
  },
  render: args => <SelectWithHooks {...args} />,
}

export const ControlledWithIcons: Story = {
  args: {
    options: optionsWithIcons,
  },
  render: args => <SelectWithHooks {...args} />,
}
