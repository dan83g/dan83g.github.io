import React from 'react';
import shoppingCartLogo from 'src/assets/shopping-cart.svg';
import s from './styles.module.sass';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/">
      <img src={shoppingCartLogo} className={s.logo} alt="logo" />
    </Link>
  );
};
