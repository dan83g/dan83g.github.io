import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { IOrder } from '../../types';
import { ICRUDActionBarProps } from '@shared/ui/crud-action-bar';
import { CURRENCY_SYMBOL } from '@shared/config/currency';
import s from './styles.module.sass';

export interface IOrderCard extends IOrder {
  price: number;
  children: React.ReactNode;
  crudActionBar: ReactElement<ICRUDActionBarProps>;
}

export const OrderCard = ({ status, price, createdAt, children, crudActionBar = null }: Partial<IOrderCard>) => {
  const { t } = useTranslation();
  return (
    <div className={s.root}>
      {children}
      <p>{t(`orderStatuses.${status}`)}</p>
      <p>{new Date(createdAt).toLocaleString()}</p>
      <p>
        {price} {CURRENCY_SYMBOL}
      </p>
      <div className={s.actions}>
        <div>{crudActionBar}</div>
      </div>
    </div>
  );
};
