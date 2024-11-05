import React from 'react';
import Logo from '../../entities/Logo/Logo';
import { ThemeSwitcher } from 'src/features/theme-switcher';
import { LangSwitcher } from 'src/features/lang-switcher';
import { Navigation } from 'src/pages/Navigation/Navigation';
import { Login } from 'src/features/sign-switcher/Login';
import s from './Header.module.sass';

const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <h3>Super store</h3>
      <div className={s.headerspace}>
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

export default Header;
