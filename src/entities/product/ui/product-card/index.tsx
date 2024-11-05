import React, { ReactElement } from 'react';
import cn from 'clsx';
import { ICartActionBarProps } from '@shared/ui/cart-action-bar';
import { ICRUDActionBarProps } from '@shared/ui/crud-action-bar';
import { IProduct } from '../../types';
import { CURRENCY_SYMBOL } from '@shared/config/currency';
import { Link } from 'react-router-dom';
import s from './styles.module.sass';

export interface IProductCard extends IProduct {
  crudActionBar: ReactElement<ICRUDActionBarProps>;
  cartActionBar: ReactElement<ICartActionBarProps>;
}

export const ProductCard = ({
  id,
  name,
  price,
  photo,
  desc,
  crudActionBar = null,
  cartActionBar = null,
}: Partial<IProductCard>) => {
  return (
    <div className={cn(s['product-card'])}>
      <Link to={`/product/${id}`}>
        <img src={photo} alt={name} className={s['product-card__image']} />
      </Link>
      <p className={s['product-card__name']}>{name}</p>
      <p className={s['product-card__description']}>{desc}</p>
      <p className={s['product-card__name']}>
        {price} {CURRENCY_SYMBOL}
      </p>
      <div className={s['product-card__actions']}>
        <div>{crudActionBar}</div>
        <div>{cartActionBar}</div>
      </div>
    </div>
  );
};
