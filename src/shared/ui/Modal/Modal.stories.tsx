import type { Meta, StoryObj } from '@storybook/react'

import { useEffect, useState } from 'react'

import { inter } from '@/application'
import { Button, Typography, TypographyVariant } from '@/shared'

import { Modal, ModalProps } from './Modal'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const Children = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <Typography style={{ marginBottom: '1.8rem' }} variant={TypographyVariant.Regular_16}>
        We have sent a link to confirm your email to epam@epam.com
      </Typography>
      <Button onClick={onClose} style={{ padding: '0.6rem 3.6rem' }}>
        OK
      </Button>
    </>
  )
}

const ModalWithHooks = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(args.open)

  return (
    <Modal {...args} onOpenChange={setIsOpen} open={isOpen}>
      <Children onClose={() => setIsOpen(false)} />
    </Modal>
  )
}

const ModalWithUseEffect = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(args.open)

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 2000)
  }, [])

  return (
    <>
      <h2>After 2 seconds a modal window will appear</h2>

      <Modal {...args} onOpenChange={setIsOpen} open={isOpen}>
        <Children onClose={() => setIsOpen(false)} />
      </Modal>
    </>
  )
}

export const DefaultModal: Story = {
  args: {
    className: inter.className,
    open: false,
    title: 'Example Modal Window',
    trigger: <Button>Trigger</Button>,
  },
  render: args => <ModalWithHooks {...args} />,
}

export const ModalWithoutTrigger: Story = {
  args: {
    children: <h2>Children</h2>,
    className: inter.className,
    open: false,
    title: 'Example Modal Window',
  },
  render: args => <ModalWithUseEffect {...args} />,
}
