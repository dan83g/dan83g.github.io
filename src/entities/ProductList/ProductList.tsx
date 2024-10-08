/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, ReactElement, useState, useEffect } from 'react';
import { Product, createRandomProducts } from '../ProductCard/types';
import ProductCard from '../ProductCard/ProductCard';
import s from './ProductList.module.sass';

type ProductList = {
  products?: Product[];
};

const PRODUCTS_PER_PAGE = 20;
const OBSERVER_CLASS_NAME = 'observer-product';

export const ProductList: FC<ProductList> = (): ReactElement => {
  const [productsArray, setProductsArray] = useState(createRandomProducts(PRODUCTS_PER_PAGE));

  useEffect(() => {
    const cards = document.getElementsByClassName(OBSERVER_CLASS_NAME);
    const lastCardObserver = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting }) => {
        isIntersecting && setProductsArray(productsArray.concat(createRandomProducts(PRODUCTS_PER_PAGE)));
      });
    }, {});
    if (cards?.length > 0) lastCardObserver.observe(cards[cards.length - 1]);
  }, [productsArray.length]);

  return (
    <div className={s.root}>
      {productsArray?.length > 0 &&
        productsArray.map(({ id, name, image, description, price, category }) => {
          return (
            <ProductCard
              key={id}
              id={id}
              name={name}
              image={image}
              description={description}
              price={price}
              category={category}
              observerClassName={OBSERVER_CLASS_NAME}
            />
          );
        })}
    </div>
  );
};

export default ProductList;
