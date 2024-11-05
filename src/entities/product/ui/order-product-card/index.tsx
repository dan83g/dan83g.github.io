import React from 'react';
import { IProduct } from '../../types';
import { CURRENCY_SYMBOL } from '@shared/config/currency';
import s from './styles.module.sass';

export const OrderProductCard = ({ name, price, photo }: Partial<IProduct>) => {
  return (
    <div className={s.root}>
      <img src={photo} alt={name} className={s.image} />
      <p>{name}</p>
      <p>
        {price} {CURRENCY_SYMBOL}
      </p>
    </div>
  );
};
