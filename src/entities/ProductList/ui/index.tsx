/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, ReactElement, useEffect, useInsertionEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ProductCard } from 'src/entities/product/ui';
import { productsActions, useProductsSelector } from 'src/app/store/products';
import { getProducts } from 'src/entities/product/api/requests';
import { CartActionBar } from 'src/shared/ui/cart-action-bar';
import { useCartStore } from 'src/entities/product';
import { useTokentStore } from 'src/entities/token/store';
import s from './styles.module.sass';

const OBSERVER_CLASS_NAME = 'observer-product';

export const ProductList: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const products = useProductsSelector((state) => state.products.products);
  const pageNumber = useProductsSelector((state) => state.products.pageNumber);
  const { token } = useTokentStore();

  const { addToCart } = useCartStore();

  const getNextProducts = (token: string, pageNum: number) => {
    getProducts(token, {
      pagination: { pageNumber: pageNum, pageSize: 10 },
      sorting: { type: 'ASC', field: 'id' },
    }).then((response) => {
      if (response.data.length > 0) dispatch(productsActions.addNext(response));
    });
  };

  useInsertionEffect(() => {
    getNextProducts(token, 1);
  }, [token]);

  const observerCalback = (entries: IntersectionObserverEntry[]) => {
    for (const { isIntersecting } of entries) {
      if (isIntersecting) {
        getNextProducts(token, pageNumber + 1);
        break;
      }
    }
  };

  useEffect(() => {
    const cards = document.getElementsByClassName(OBSERVER_CLASS_NAME);
    const lastCardObserver = new IntersectionObserver(observerCalback, {});
    if (cards?.length > 0) lastCardObserver.observe(cards[cards.length - 1]);
  }, [products.length, pageNumber]);

  return (
    <div className={s.root}>
      {products?.length > 0 &&
        products.map((i) => {
          return (
            <ProductCard
              key={i.id}
              id={i.id}
              name={i.name}
              photo={i.photo}
              price={i.price}
              desc={i.desc}
              category={i.category}
              actionBar={<CartActionBar quantity={0} onAddToCart={() => addToCart(i)} />}
              // observerClassName={OBSERVER_CLASS_NAME}
            />
          );
        })}
    </div>
  );
};
