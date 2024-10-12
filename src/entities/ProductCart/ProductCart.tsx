/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import cn from 'clsx';
import Basket from '../Basket/Basket';
import { Category, ProductInCart } from '../ProductCard/types';
import { useDispatch } from 'react-redux';
import { cartActions } from 'src/app/store/cart';
import s from './ProductCart.module.sass';

interface ProductCartProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: Category;
  count: number;
}

export const ProductCart = ({ id, name, price, image, description, count }: ProductCartProps) => {
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(cartActions.addProduct({ id, price, image, name, description, count: count + 1 } as ProductInCart));
  };

  const onDecrease = () => {
    dispatch(
      cartActions.addProduct({ id, price, image, name, description, count: count ? count - 1 : count } as ProductInCart)
    );
  };

  const onDeleteClick = () => {
    dispatch(cartActions.delProduct(id));
  };

  return (
    <div className={cn(s['product-card'])}>
      <img src={image} alt={name} className={s['product-card__image']} />
      <p>{name}</p>
      <p className={s['product-card__description']}>{description}</p>
      <p>{price}$</p>
      <Basket count={count} onIncrease={onIncrease} onDecrease={onDecrease} onDeleteClick={onDeleteClick} />
    </div>
  );
};
