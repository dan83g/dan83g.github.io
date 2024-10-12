import React, { useState } from 'react';
import cn from 'clsx';
import Basket from '../Basket/Basket';
import { Category, ProductInCart } from './types';
import { useDispatch } from 'react-redux';
import { cartActions } from 'src/app/store/cart';
import s from './ProductCard.module.sass';

interface ProductCardProps {
  id: string;
  price: number;
  image: string;
  name: string;
  description: string;
  category: Category;
  observerClassName: string;
}

const ProductCard = ({ observerClassName, id, price, image, name, description }: ProductCardProps) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(0);

  const onIncrease = () => {
    setCount(count + 1);
    dispatch(
      cartActions.addProduct({
        id,
        price,
        image,
        name,
        description,
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
        image,
        name,
        description,
        count: count ? count - 1 : count,
      } as ProductInCart)
    );
  };

  const onDeleteClick = () => {
    setCount(0);
    dispatch(cartActions.delProduct(id));
  };

  return (
    <div className={cn(observerClassName, s['product-card'])}>
      <img src={image} alt={name} className={s['product-card__image']} />
      <p>{name}</p>
      <p className={s['product-card__description']}>{description}</p>
      <p>{price}$</p>
      <Basket count={count} onIncrease={onIncrease} onDecrease={onDecrease} onDeleteClick={onDeleteClick} />
    </div>
  );
};

export default ProductCard;
