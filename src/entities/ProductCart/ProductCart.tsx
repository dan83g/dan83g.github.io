import React, { useState, useEffect } from 'react';
import s from './ProductCart.module.sass';
import Basket from '../Basket/Basket';
import { Category } from '../ProductCard/types';
import cn from 'clsx';

interface ProductCartProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: Category;
  count: number;
  onCountChange(id: string, count: number): void;
}

export const ProductCart = ({ id, name, price, image, description, ...props }: ProductCartProps) => {
  const [count, setCount] = useState<number>(props.count);
  useEffect(() => props.onCountChange(id, count), [count, id, props]);

  return (
    <div className={cn(s['product-card'])}>
      <img src={image} alt={name} className={s['product-card__image']} />
      <p>{name}</p>
      <p className={s['product-card__description']}>{description}</p>
      <p>{price}$</p>
      <Basket
        count={count}
        productId={id}
        onIncrease={() => setCount(count + 1)}
        onDecrease={() => setCount(count - 1 === -1 ? 0 : count - 1)}
      />
    </div>
  );
};
