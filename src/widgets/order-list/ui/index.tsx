/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, ReactElement, useEffect, useInsertionEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineCancel } from 'react-icons/md';
import { useTokentStore } from '@entities/token';
import { OrderProductList } from '@entities/product/ui/order-product-list';
import { API_PAGE_SIZE } from '@shared/config';
import { useIntersectionObserver } from '@shared/hooks/use-intersection-observer';
import { useOrdersStore, getOrders, OrderCard, patchOrder, OrderStatus } from 'src/entities/order';
import { IconButton } from 'src/shared/ui/icon-button';
import s from './styles.module.sass';
import { Spinner } from 'src/shared/ui/spinner';

export const OrderList: FC = (): ReactElement => {
  const { t } = useTranslation();
  const { token } = useTokentStore();
  const { orders, paging, isLoading, addOrders, modOrder, getOrderTotalPrice, setIsLoading } = useOrdersStore();
  const { observerRef, isIntersecting } = useIntersectionObserver(isLoading);

  const getNext = async (token: string, pageNum: number) => {
    setIsLoading(true);
    const response = await getOrders(token, {
      pagination: { pageNumber: pageNum, pageSize: API_PAGE_SIZE },
      sorting: { type: 'ASC', field: 'id' },
    });
    if (response.data.length > 0) addOrders(response.data, response.pagination);
    setIsLoading(false);
  };

  useInsertionEffect(() => {
    if (orders.length === 0) getNext(token, 1);
  }, [token, orders.length]);

  useEffect(() => {
    if (isIntersecting && paging.total > paging.pageNumber * API_PAGE_SIZE) getNext(token, paging.pageNumber + 1);
  }, [isIntersecting, paging.pageNumber, paging.total, token]);

  const cancelOrder = async (token: string, id: string) => {
    try {
      modOrder(await patchOrder(token, id, { status: OrderStatus.OrderCancelled }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={s.root}>
        {orders?.length > 0 &&
          orders.map((i) => {
            return (
              <div key={i.id}>
                <OrderCard id={i.id} price={getOrderTotalPrice(i)} status={i.status} createdAt={i.createdAt}>
                  <div className={s.admin_bar}>
                    {i.status !== OrderStatus.OrderCancelled ? (
                      <IconButton onClick={() => cancelOrder(token, i.id)} title={t('barActions.cancel')}>
                        <MdOutlineCancel />
                      </IconButton>
                    ) : null}
                  </div>
                  <OrderProductList key={i.id} products={i.products} />
                </OrderCard>
              </div>
            );
          })}
        <Spinner loading={isLoading} />
        <div ref={observerRef} />
      </div>
    </>
  );
};
