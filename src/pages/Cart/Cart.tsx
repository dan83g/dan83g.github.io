import React from 'react';
import { ProductInCart } from 'src/entities/ProductCard/types';
import { ProductCart } from 'src/entities/ProductCart/ProductCart';
import { useSelector } from 'react-redux';
import { RootState } from 'src/app/store';
import s from './Cart.module.sass';

export const Cart = () => {
  const cart = useSelector<RootState, RootState['cart']>((state) => state.cart);

  return (
    <div className={s.root}>
      {cart.map((p: ProductInCart) => {
        return (
          <ProductCart
            id={p.id}
            key={p.id}
            name={p.name}
            image={p.image}
            price={p.price}
            description={p.description}
            category={p.category}
            count={p.count}
          />
        );
      })}
    </div>
  );
};
