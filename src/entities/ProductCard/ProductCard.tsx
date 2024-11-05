import React, { useState } from 'react';
import cn from 'clsx';
import { CartActionBar } from '@shared/ui/cart-action-bar';
import { Category, ProductInCart } from './types';
import { useDispatch } from 'react-redux';
import { cartActions } from 'src/app/store/cart';
import s from './ProductCard.module.sass';

interface IProductCardProps {
  id: string;
  price: number;
  photo: string;
  name: string;
  desc: string;
  category: Category;
  observerClassName: string;
}

export const ProductCard = ({ observerClassName, id, price, photo, name, desc }: IProductCardProps) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(0);

  const onIncrease = () => {
    setCount(count + 1);
    dispatch(
      cartActions.addProduct({
        id,
        price,
        photo,
        name,
        desc,
        count: count + 1,
      } as ProductInCart)
    );
  };

  const onDecrease = () => {
    setCount(count ? count - 1 : count);
    dispatch(
      cartActions.addProduct({
        id,
        price,
        photo,
        name,
        desc,
        count: count ? count - 1 : count,
      } as ProductInCart)
    );
  };

  const onRemoveFromCart = () => {
    setCount(0);
    dispatch(cartActions.delProduct(id));
  };

  return (
    <div className={cn(observerClassName, s['product-card'])}>
      <img src={photo} alt={name} className={s['product-card__image']} />
      <p>{name}</p>
      <p className={s['product-card__description']}>{desc}</p>
      <p>{price}&#8381;</p>
      <CartActionBar
        quantity={count}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onRemoveFromCart={onRemoveFromCart}
      />
    </div>
  );
};
