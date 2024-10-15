/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, ReactElement, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { productsSelectors, productsActions } from 'src/app/store/products';
import s from './ProductList.module.sass';

const OBSERVER_CLASS_NAME = 'observer-product';

export const ProductList: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelectors.get);
  useEffect(() => {
    const cards = document.getElementsByClassName(OBSERVER_CLASS_NAME);
    const lastCardObserver = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting }) => {
        isIntersecting && dispatch(productsActions.addNext());
      });
    }, {});
    if (cards?.length > 0) lastCardObserver.observe(cards[cards.length - 1]);
  }, [products.length]);

  return (
    <div className={s.root}>
      {products?.length > 0 &&
        products.map(({ id, name, image, description, price, category }) => {
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
