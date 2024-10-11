import React, { FC, useCallback, useState, useLayoutEffect } from 'react';
import { Product, ProductInCart, createRandomProducts } from 'src/entities/ProductCard/types';
import { ProductCart } from 'src/entities/ProductCart/ProductCart';
import s from './Cart.module.sass';

const getRandomCount = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const Cart: FC = () => {
  const [products, setProducts] = useState<ProductInCart[]>([]);
  useLayoutEffect(
    () => setProducts(createRandomProducts(5).map((p) => ({ ...p, count: getRandomCount(1, 5) })) as ProductInCart[]),
    []
  );
  const handleCountChange = useCallback(
    (id: string, count: number) => {
      const changedProducts = products.slice();
      changedProducts.map((product: ProductInCart) => {
        if (product.id === id) product.count = count;
      });
      setProducts(changedProducts.slice());
    },
    [products]
  );

  return (
    <div className={s.root}>
      {products.map((product: Product) => {
        return (
          <ProductCart
            id={product.id}
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            description={product.description}
            category={product.category}
            count={getRandomCount(1, 5)}
            onCountChange={handleCountChange}
          />
        );
      })}
    </div>
  );
};
