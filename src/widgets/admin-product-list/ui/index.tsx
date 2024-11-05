/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, ReactElement, useEffect, useInsertionEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CRUDActionBar } from '@shared/ui/crud-action-bar';
import { useTokentStore } from '@entities/token';
import { useCategoriesStore } from '@entities/category';
import { API_PAGE_SIZE } from '@shared/config';
import { useIntersectionObserver } from '@shared/hooks/use-intersection-observer';
import { ModalFormWrapper } from '@shared/ui/modal-wrapper';
import { Action, useActions, ActionFn } from '@shared/hooks/use-actions';
import {
  getProducts,
  ProductCard,
  ProductForm,
  updateProduct,
  IProductFormValues,
  ProductFormActions,
  deleteProduct,
  createProduct,
  IProductRequest,
  useAdminProductsStore,
} from '@entities/product';
import s from './styles.module.sass';
import { Spinner } from 'src/shared/ui/spinner';

export const AdminProductList: FC = (): ReactElement => {
  const { t } = useTranslation();
  const { token } = useTokentStore();
  const { categories } = useCategoriesStore();
  const { products, addProducts, addProduct, modProduct, delProduct, paging, isLoading, setIsLoading, getProduct } =
    useAdminProductsStore();
  const { observerRef, isIntersecting } = useIntersectionObserver(isLoading);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const getNext = async (token: string, pageNum: number) => {
    setIsLoading(true);
    const response = await getProducts(token, {
      pagination: { pageNumber: pageNum, pageSize: API_PAGE_SIZE },
      sorting: { type: 'ASC', field: 'id' },
    });
    if (response.data.length > 0) addProducts(response.data, response.pagination);
    setIsLoading(false);
  };

  useInsertionEffect(() => {
    if (products.length === 0) getNext(token, 1);
  }, [token, products.length]);

  useEffect(() => {
    if (isIntersecting && paging.total > paging.pageNumber * API_PAGE_SIZE) getNext(token, paging.pageNumber + 1);
  }, [isIntersecting, paging.pageNumber, paging.total, token]);

  const createAction: ActionFn = async (
    token: string,
    id: string,
    values: Partial<IProductFormValues>,
    actions: ProductFormActions<Partial<IProductFormValues>>
  ) => {
    try {
      addProduct(await createProduct(token, values as IProductRequest));
      setIsVisible(false);
    } catch (error) {
      actions.setErrors({ name: t(`errors.${error.code}`) });
    }
  };

  const updateAction = async (
    token: string,
    id: string,
    values: Partial<IProductFormValues>,
    actions: ProductFormActions<Partial<IProductFormValues>>
  ) => {
    try {
      modProduct(await updateProduct(token, id, values as IProductRequest));
      setIsVisible(false);
    } catch (error) {
      actions.setErrors({ name: t(`errors.${error.code}`) });
    }
  };

  const deleteAction = async (token: string, id: string) => {
    try {
      await deleteProduct(token, id);
      delProduct(id);
    } catch (error) {
      console.log(error);
    }
  };

  const { id, setActionAndId, actionName, actionFn } = useActions(createAction, updateAction, deleteAction, () =>
    setIsVisible(true)
  );
  const product = useMemo(() => getProduct(id), [id]);
  const onFormSubmit =
    (id: string) => async (values: IProductFormValues, actions: ProductFormActions<IProductFormValues>) => {
      actionFn(token, id, values, actions);
    };

  return (
    <div className={s.root}>
      {product && (
        <ModalFormWrapper isVisible={isVisible} onClose={() => setIsVisible(false)}>
          <h4>{actionName}</h4>
          <ProductForm
            onFormSubmit={(values, actions) => onFormSubmit(product.id)(values, actions)}
            submitButtonCaption={actionName}
            price={product.price}
            photo={product.photo}
            name={product.name}
            desc={product.desc}
            oldPrice={product.oldPrice}
            categories={categories}
            categoryId={product.category.id}
          />
        </ModalFormWrapper>
      )}
      {products?.length > 0 &&
        products.map((i) => {
          return (
            <div key={i.id}>
              <ProductCard
                key={i.id}
                id={i.id}
                name={i.name}
                photo={i.photo}
                price={i.price}
                desc={i.desc}
                category={i.category}
                crudActionBar={
                  <CRUDActionBar
                    onCreate={() => setActionAndId(Action.CREATE, i.id)}
                    onUpdate={() => setActionAndId(Action.UPDATE, i.id)}
                    onDelete={() => deleteAction(token, i.id)}
                  />
                }
              />
            </div>
          );
        })}
      <Spinner loading={isLoading} />
      <div ref={observerRef} />
    </div>
  );
};
