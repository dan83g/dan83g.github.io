import React, { ReactElement } from 'react';
import cn from 'clsx';
import { ICartActionBarProps } from 'src/shared/ui/cart-action-bar';
import { IProduct } from '../../types';
import s from './styles.module.sass';

export interface IProductCard extends IProduct {
  actionBar: ReactElement<ICartActionBarProps>;
}

export const ProductCard = ({ name, price, photo, desc, actionBar = null }: Partial<IProductCard>) => {
  return (
    <div className={cn(s['product-card'])}>
      <img src={photo} alt={name} className={s['product-card__image']} />
      <p>{name}</p>
      <p className={s['product-card__description']}>{desc}</p>
      <p>{price}&#8381;</p>
      {actionBar}
    </div>
  );
};
