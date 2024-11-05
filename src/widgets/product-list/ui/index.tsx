/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, ReactElement, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ProductCard, getProducts, useCartStore, useProductsStore, useProductsFilterStore } from '@entities/product';
import { CartActionBar } from '@shared/ui/cart-action-bar';
import { useTokentStore } from '@entities/token/store';
import { API_PAGE_SIZE } from '@shared/config';
import { useIntersectionObserver } from '@shared/hooks/use-intersection-observer';
import { Spinner } from '@shared/ui/spinner';
import s from './styles.module.sass';

export const ProductList: FC = (): ReactElement => {
  const { t } = useTranslation();
  const { token } = useTokentStore();
  const { addToCart, getProductQuantity, incrementQuantity, decrementQuantity, removeItem } = useCartStore();
  const { products, paging, isLoading, setIsLoading, addProducts } = useProductsStore();
  const { getFilter, setPagination } = useProductsFilterStore();
  const { observerRef, isIntersecting } = useIntersectionObserver(isLoading);

  const getNext = async (token: string) => {
    const response = await getProducts(token, getFilter());
    if (response.data.length > 0) addProducts(response.data, response.pagination);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isIntersecting && paging.total > paging.pageNumber * API_PAGE_SIZE) {
      setPagination({ pageNumber: paging.pageNumber + 1, pageSize: API_PAGE_SIZE });
      setIsLoading(true);
      getNext(token);
    }
    if (products.length === 0) {
      setIsLoading(true);
      getNext(token);
    }
  }, [isIntersecting]);

  return (
    <div className={s.root}>
      {products.length > 0
        ? products.map((i) => {
            return (
              <ProductCard
                key={i.id}
                id={i.id}
                name={i.name}
                photo={i.photo}
                price={i.price}
                desc={i.desc}
                category={i.category}
                cartActionBar={
                  <CartActionBar
                    quantity={getProductQuantity(i.id)}
                    onAddToCart={() => addToCart(i)}
                    onIncrease={() => incrementQuantity(i.id)}
                    onDecrease={() => decrementQuantity(i.id)}
                    onRemoveFromCart={() => removeItem(i.id)}
                  />
                }
              />
            );
          })
        : !isLoading && <div className={s.center}>{t('errors.ERR_NO_MATCHING')}</div>}
      <div ref={observerRef} />
      <Spinner loading={isLoading} />
    </div>
  );
};
