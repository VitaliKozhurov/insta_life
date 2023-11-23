import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { SearchIcon } from '@/shared'
import { action } from '@storybook/addon-actions'

import { Input, InputProps } from './Input'

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
}

export default meta
type Story = StoryObj<typeof meta>

const InputWithHooks = (args: InputProps) => {
  const {
    error,
    label,
    leftIcon,
    onChange,
    onEnter,
    onKeyDown,
    onLeftIconClickHandler,
    onRightIconClickHandler,
    rightIcon,
    type,
  } = args

  const [value, setValue] = useState(args.value)

  const onChangeValueHandler = (value: string) => {
    setValue(value)
  }

  return (
    <Input
      error={error}
      label={label}
      leftIcon={leftIcon}
      onChange={onChange}
      onChangeValue={onChangeValueHandler}
      onEnter={onEnter}
      onKeyDown={onKeyDown}
      onLeftIconClickHandler={onLeftIconClickHandler}
      onRightIconClickHandler={onRightIconClickHandler}
      placeholder={args.placeholder}
      rightIcon={rightIcon}
      type={type}
      value={value}
    />
  )
}

export const Default: Story = {
  args: {
    label: 'Default input',
    placeholder: 'Default placeholder',
    type: 'text',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled input',
    placeholder: 'Disabled Input',
    type: 'text',
  },
}

export const Search: Story = {
  args: {
    label: 'Search input',
    leftIcon: <SearchIcon size={2} />,
    placeholder: 'Search Input',
    type: 'search',
  },
}

export const Controlled: Story = {
  args: {
    label: 'Controlled Input',
    onChange: event => {
      action('Input Value')(event.target.value)
    },
    placeholder: 'Controlled Input',
    type: 'text',
  },
  render: args => <InputWithHooks {...args} />,
}
export const ControlledError: Story = {
  args: {
    error: 'Error message',
    label: 'Error input',
    onChange: event => {
      action('Input Value')(event.target.value)
    },
    placeholder: 'Error placeholder',
    type: 'text',
  },
  render: args => <InputWithHooks {...args} />,
}
export const ControlledWithPassword: Story = {
  args: {
    label: 'Password Input',
    onChange: event => {
      action('Password Value')(event.target.value)
    },
    placeholder: 'Password Input',
    type: 'password',
  },
  render: args => <InputWithHooks {...args} />,
}

export const ControlledWithSearch: Story = {
  args: {
    label: 'Search Input',
    leftIcon: <SearchIcon size={2} />,
    onChange: event => {
      action('Search Value')(event.target.value)
    },
    onLeftIconClickHandler: action('Left Icon was Clicked'),
    placeholder: 'Search Input',
    type: 'search',
  },
  render: args => <InputWithHooks {...args} />,
}
