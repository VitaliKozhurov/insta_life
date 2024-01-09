import {
  Button,
  CreateIcon,
  FavoritesIcon,
  FilledCreateIcon,
  FilledFavoritesIcon,
  FilledHomeIcon,
  FilledMessengerIcon,
  FilledUserProfileIcon,
  HomeIcon,
  LogOutIcon,
  MessengerIcon,
  Routes,
  SearchIcon,
  StatisticsIcon,
  UserProfileIcon,
  onLogoutErrorHandler,
  removeFromLocalStorage,
  useLogoutMutation,
  useTranslation,
} from '@/shared'
import clsx from 'clsx'
import Link from 'next/link'

import s from './NavBar.module.scss'

type Props = {
  className?: string
}

export const NavBar = ({ className }: Props) => {
  const [logout] = useLogoutMutation()
  const {
    router: { pathname },
    text: { navBar: t },
  } = useTranslation()
  const onLogoutHandler = () => {
    logout()
      .unwrap()
      .then(() => removeFromLocalStorage('token'))
      .catch(err => onLogoutErrorHandler(err))
  }

  return (
    <div className={clsx(s.root, className)}>
      <nav className={s.nav}>
        <Button
          as={Link}
          className={clsx(s.button, pathname === Routes.HOME && s.active)}
          href={Routes.HOME}
        >
          {pathname === Routes.HOME ? <FilledHomeIcon /> : <HomeIcon />}
          {t.home}
        </Button>

        <Button
          as={Link}
          className={clsx(s.button, pathname === Routes.CREATE && s.active)}
          href={Routes.CREATE}
        >
          {pathname === Routes.CREATE ? <FilledCreateIcon /> : <CreateIcon />}
          {t.create}
        </Button>

        <Button
          as={Link}
          className={clsx(s.button, pathname === Routes.PROFILE && s.active)}
          href={Routes.PROFILE_GENERAL}
        >
          {pathname === Routes.PROFILE ? <FilledUserProfileIcon /> : <UserProfileIcon />}
          {t.profile}
        </Button>

        <Button
          as={Link}
          className={clsx(s.button, pathname === Routes.MESSENGER && s.active)}
          href={Routes.MESSENGER}
        >
          {pathname === Routes.MESSENGER ? <FilledMessengerIcon /> : <MessengerIcon />}
          {t.chat}
        </Button>

        <Button
          as={Link}
          className={clsx(s.button, pathname === Routes.SEARCH && s.active)}
          href={Routes.SEARCH}
        >
          <SearchIcon />
          {t.search}
        </Button>

        <Button
          as={Link}
          className={clsx(s.button, pathname === Routes.STATISTICS && s.active)}
          href={Routes.STATISTICS}
        >
          <StatisticsIcon />
          {t.statistics}
        </Button>

        <Button
          as={Link}
          className={clsx(s.button, pathname === Routes.FAVORITES && s.active)}
          href={Routes.FAVORITES}
        >
          {pathname === Routes.MESSENGER ? <FilledFavoritesIcon /> : <FavoritesIcon />}
          {t.favorites}
        </Button>
      </nav>
      <Button className={clsx(s.button)} onClick={onLogoutHandler}>
        <LogOutIcon />
        {t.logOut}
      </Button>
    </div>
  )
}
