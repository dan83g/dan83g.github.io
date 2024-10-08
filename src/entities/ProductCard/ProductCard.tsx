import React from 'react';
import s from './ProductCard.module.sass';
import Basket from '../Basket/Basket';
import { Category } from './types';
import cn from 'clsx';

interface ProductCardProps {
  id: string;
  price: number;
  image: string;
  name: string;
  description: string;
  category: Category;
  observerClassName: string;
}

const ProductCard = ({ observerClassName, price, image, name, description }: ProductCardProps) => {
  return (
    <div className={cn(observerClassName, s['product-card'])}>
      <img src={image} alt={name} className={s['product-card__image']} />
      <p>{name}</p>
      <p className={s['product-card__description']}>{description}</p>
      <p>{price}$</p>
      <Basket count={0} />
    </div>
  );
};

export default ProductCard;
