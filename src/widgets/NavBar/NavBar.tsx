import {
  CreateIcon,
  FavoritesIcon,
  FilledCreateIcon,
  FilledFavoritesIcon,
  FilledHomeIcon,
  FilledMessengerIcon,
  FilledUserProfileIcon,
  HomeIcon,
  IconButton,
  LogOutIcon,
  MessengerIcon,
  NavBarLink,
  Routes,
  SearchIcon,
  StatisticsIcon,
  UserProfileIcon,
  useTranslation,
} from '@/shared'
import clsx from 'clsx'

import s from './NavBar.module.scss'

type Props = {
  className?: string
}

export const NavBar = ({ className }: Props) => {
  const {
    router: { pathname },
    text: { navBar: t },
  } = useTranslation()

  return (
    <div className={clsx(s.root, className)}>
      <nav className={s.nav}>
        <NavBarLink
          activeIcon={<FilledHomeIcon />}
          defaultIcon={<HomeIcon />}
          isActive={pathname === '/'}
          linkUrl={Routes.HOME}
        >
          {t.home}
        </NavBarLink>
        <NavBarLink
          activeIcon={<FilledCreateIcon />}
          defaultIcon={<CreateIcon />}
          isActive={pathname === '/create'}
          linkUrl={Routes.CREATE}
        >
          {t.create}
        </NavBarLink>
        <NavBarLink
          activeIcon={<FilledUserProfileIcon />}
          defaultIcon={<UserProfileIcon />}
          isActive={pathname === '/profile'}
          linkUrl={Routes.PROFILE}
        >
          {t.profile}
        </NavBarLink>
        <NavBarLink
          activeIcon={<FilledMessengerIcon />}
          defaultIcon={<MessengerIcon />}
          isActive={pathname === '/chat'}
          linkUrl={Routes.MESSENGER}
        >
          {t.chat}
        </NavBarLink>
        <NavBarLink
          defaultIcon={<SearchIcon />}
          isActive={pathname === '/search'}
          linkUrl={Routes.SEARCH}
        >
          {t.search}
        </NavBarLink>
        <NavBarLink
          defaultIcon={<StatisticsIcon />}
          isActive={pathname === 'statistics'}
          linkUrl={Routes.STATISTICS}
        >
          {t.statistics}
        </NavBarLink>
        <NavBarLink
          activeIcon={<FilledFavoritesIcon />}
          defaultIcon={<FavoritesIcon />}
          isActive={pathname === 'favorites'}
          linkUrl={Routes.FAVORITES}
        >
          {t.favorites}
        </NavBarLink>
      </nav>
      <IconButton icon={<LogOutIcon />} onClick={() => console.log('Logout from app')}>
        {t.logOut}
      </IconButton>
    </div>
  )
}
