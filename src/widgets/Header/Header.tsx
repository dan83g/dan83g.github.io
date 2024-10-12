import React from 'react';
import Logo from '../../entities/Logo/Logo';
import { ThemeSwitcher } from 'src/features/ThemeSwitcher';
import { LangSwitcher } from 'src/features/LangSwitcher';
import { Navigation } from 'src/pages/Navigation/Navigation';
import { Login } from 'src/features/Login/Login';
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
