/* eslint-disable import/named */
import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, Location } from 'react-router-dom';
import s from './Navigation.module.sass';

const navigationItems = [
  { name: 'navigation.home', path: '/' },
  { name: 'navigation.cart', path: '/cart' },
  { name: 'navigation.product', path: '/product' },
  { name: 'navigation.profile', path: '/profile' },
];

export type NavigationState = {
  from?: Location;
};

export const Navigation: FC = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className={s.root}>
      {navigationItems.map((i) => (
        <div className={s.navitem} key={i.name} onClick={() => navigate(i.path)}>
          {t(i.name)}
        </div>
      ))}
    </div>
  );
};
