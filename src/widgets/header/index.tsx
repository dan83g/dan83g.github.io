import React from 'react';
import { Logo } from 'src/shared/ui/logo';
import { ThemeSwitcher } from '@features/theme-switcher';
import { LangSwitcher } from '@features/lang-switcher';
import { Navigation } from '@features/navigation';
import { Login } from '@features/sign-switcher';
import s from './styles.module.sass';
import { Search } from 'src/features/search';

export const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <h3>Store</h3>
      <div className={s.headerspace}>
        <Search />
        <Navigation />
      </div>
      <div className={s.icons}>
        <ThemeSwitcher />
        <LangSwitcher />
        <Login />
      </div>
    </header>
  );
};
