/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { OrderProductCard, IProduct } from '@entities/product';
import { CURRENCY_SYMBOL } from '@shared/config/currency';
import s from './styles.module.sass';

export interface IOrderProduct {
  product: IProduct;
  quantity: number;
}

export interface IOrderProductList {
  products: IOrderProduct[];
}

export const OrderProductList = ({ products }: IOrderProductList) => {
  return (
    <div className={s.root}>
      {products?.length > 0 &&
        products.map((p) => {
          if (p.product)
            return (
              <div key={p.product.id} className={s.product}>
                <OrderProductCard name={p.product.name} price={p.product.price} photo={p.product.photo} />
                {` x ${p.quantity}`}
                {` = ${p.quantity * p.product.price} ${CURRENCY_SYMBOL}`}
              </div>
            );
          return null;
        })}
    </div>
  );
};
