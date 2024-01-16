import type { Meta, StoryObj } from '@storybook/react'

import { inter } from '@/application'
import {
  BellIcon,
  FavoritesIcon,
  FilledBellIcon,
  LogOutIcon,
  MenuDotsIcon,
  SettingsIcon,
  StatisticsIcon,
} from '@/shared/assets'
import { TypographyVariant } from '@/shared/types'
import { Typography } from '@/shared/ui'

import s from './Stories.module.scss'

import { DropDown } from './DropDown'
import { DropDownItem } from './DropDownItem'

const meta = {
  component: DropDown,
  tags: ['autodocs'],
  title: 'Components/DropDown',
} satisfies Meta<typeof DropDown>

export default meta
type Story = StoryObj<typeof meta>

const children = (
  <>
    <DropDownItem className={s.menuItem}>
      <SettingsIcon />
      <Typography as={'span'} variant={TypographyVariant.Regular_14}>
        Profile Settings
      </Typography>
    </DropDownItem>
    <DropDownItem className={s.menuItem}>
      <StatisticsIcon />
      <Typography as={'span'} variant={TypographyVariant.Regular_14}>
        Statistics
      </Typography>
    </DropDownItem>
    <DropDownItem className={s.menuItem}>
      <FavoritesIcon />
      <Typography as={'span'} variant={TypographyVariant.Regular_14}>
        Favorites
      </Typography>
    </DropDownItem>
    <DropDownItem className={s.menuItem}>
      <LogOutIcon />
      <Typography as={'span'} variant={TypographyVariant.Regular_14}>
        Log Out
      </Typography>
    </DropDownItem>
  </>
)

const notificationChildren = (
  <>
    <DropDownItem className={s.notificationItem}>
      <Typography as={'h4'} className={s.notificationTitle} variant={TypographyVariant.Regular_14}>
        Новое уведомление!
      </Typography>
      <Typography as={'p'} variant={TypographyVariant.Regular_14}>
        Следующий платеж у вас спишется через 1 день
      </Typography>
      <Typography as={'span'} className={s.notificationTime} variant={TypographyVariant.Small_text}>
        1 час назад
      </Typography>
    </DropDownItem>
    <DropDownItem className={s.notificationItem}>
      <Typography as={'h4'} className={s.notificationTitle} variant={TypographyVariant.Regular_14}>
        Новое уведомление!
      </Typography>
      <Typography as={'p'} variant={TypographyVariant.Regular_14}>
        Следующий платеж у вас спишется через 1 день
      </Typography>
      <Typography as={'span'} className={s.notificationTime} variant={TypographyVariant.Small_text}>
        7 часов назад
      </Typography>
    </DropDownItem>
    <DropDownItem className={s.notificationItem}>
      <Typography as={'h4'} className={s.notificationTitle} variant={TypographyVariant.Regular_14}>
        Новое уведомление!
      </Typography>
      <Typography as={'p'} variant={TypographyVariant.Regular_14}>
        Следующий платеж у вас спишется через 1 день
      </Typography>
      <Typography as={'span'} className={s.notificationTime} variant={TypographyVariant.Small_text}>
        7 часов назад
      </Typography>
    </DropDownItem>
    <DropDownItem className={s.notificationItem}>
      <Typography as={'h4'} className={s.notificationTitle} variant={TypographyVariant.Regular_14}>
        Новое уведомление!
      </Typography>
      <Typography as={'p'} variant={TypographyVariant.Regular_14}>
        Следующий платеж у вас спишется через 1 день
      </Typography>
      <Typography as={'span'} className={s.notificationTime} variant={TypographyVariant.Small_text}>
        7 часов назад
      </Typography>
    </DropDownItem>
    <DropDownItem className={s.notificationItem}>
      <Typography as={'h4'} className={s.notificationTitle} variant={TypographyVariant.Regular_14}>
        Новое уведомление!
      </Typography>
      <Typography as={'p'} variant={TypographyVariant.Regular_14}>
        Следующий платеж у вас спишется через 1 день
      </Typography>
      <Typography as={'span'} className={s.notificationTime} variant={TypographyVariant.Small_text}>
        7 часов назад
      </Typography>
    </DropDownItem>
  </>
)

export const DropDownMenu: Story = {
  args: {
    children,
    className: inter.className,
    trigger: <MenuDotsIcon />,
  },
}

export const DropDownNotification: Story = {
  args: {
    children: notificationChildren,
    className: inter.className,
    dropDownTitle: 'Уведомления',
    secondaryTrigger: <FilledBellIcon />,
    trigger: <BellIcon />,
  },
}
