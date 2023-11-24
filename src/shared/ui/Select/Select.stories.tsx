import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { inter } from '@/application'
import { Flag } from '@/shared'
import { action } from '@storybook/addon-actions'
import russianFlag from 'public/flags/russianFlag.png'
import ukFlag from 'public/flags/ukFlag.png'

import { Option, Select, SelectProps } from './Select'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const options: Option[] = [
  { className: inter.className, title: 'Russian', value: 'russian' },
  { className: inter.className, title: 'English', value: 'english' },
  { className: inter.className, title: 'Spanish', value: 'spanish' },
]

const optionsWithIcons: Option[] = [
  {
    className: inter.className,
    icon: <Flag size={2} src={russianFlag} />,
    title: 'Russian',
    value: 'russian',
  },
  {
    className: inter.className,
    icon: <Flag size={2} src={ukFlag} />,
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
