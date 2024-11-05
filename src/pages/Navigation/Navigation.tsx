/* eslint-disable import/named */
import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, Location } from 'react-router-dom';
import s from './Navigation.module.sass';
import { ROUTES } from 'src/shared/config';

const navigationItems = [
  { name: 'navigation.home', path: ROUTES.HOME },
  { name: 'navigation.cart', path: ROUTES.CART },
  { name: 'navigation.product', path: ROUTES.PRODUCT },
  { name: 'navigation.category', path: ROUTES.CATEGORY },
  { name: 'navigation.profile', path: ROUTES.PROFILE },
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
