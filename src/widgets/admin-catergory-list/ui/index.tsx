/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, ReactElement, useEffect, useInsertionEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CRUDActionBar } from '@shared/ui/crud-action-bar';
import { useTokentStore } from '@entities/token/store';
import { API_PAGE_SIZE } from '@shared/config';
import { useIntersectionObserver } from '@shared/hooks/use-intersection-observer';
import { ModalFormWrapper } from '@shared/ui/modal-wrapper';
import { Action, useActions, ActionFn } from '@shared/hooks/use-actions';
import {
  getCategories,
  CategoryCard,
  CategoryForm,
  updateCategory,
  ICategoryFormValues,
  CategoryFormActions,
  deleteCategory,
  createCategory,
  ICategoryRequest,
  useAdminCategoriesStore,
} from '@entities/category';
import s from './styles.module.sass';
import { Spinner } from '@shared/ui/spinner';

export const AdminCategoryList: FC = (): ReactElement => {
  const { t } = useTranslation();
  const { token } = useTokentStore();
  const {
    categories,
    addCategories,
    addCategory,
    modCategory,
    delCategory,
    paging,
    isLoading,
    setIsLoading,
    getCategory,
  } = useAdminCategoriesStore();
  const { observerRef, isIntersecting } = useIntersectionObserver(isLoading);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const getNext = async (token: string, pageNum: number) => {
    setIsLoading(true);
    const response = await getCategories(token, {
      pagination: { pageNumber: pageNum, pageSize: API_PAGE_SIZE },
      sorting: { type: 'ASC', field: 'id' },
    });
    if (response.data.length > 0) addCategories(response.data, response.pagination);
    setIsLoading(false);
  };

  useInsertionEffect(() => {
    if (categories.length === 0) getNext(token, 1);
  }, [token, categories.length]);

  useEffect(() => {
    if (isIntersecting && paging.total > paging.pageNumber * API_PAGE_SIZE) getNext(token, paging.pageNumber + 1);
  }, [isIntersecting, paging.pageNumber, paging.total, token]);

  const createAction: ActionFn = async (
    token: string,
    id: string,
    values: Partial<ICategoryFormValues>,
    actions: CategoryFormActions<Partial<ICategoryFormValues>>
  ) => {
    try {
      addCategory(await createCategory(token, values as ICategoryRequest));
      setIsVisible(false);
    } catch (error) {
      actions.setErrors({ name: t(`errors.${error.code}`) });
    }
  };

  const updateAction = async (
    token: string,
    id: string,
    values: Partial<ICategoryFormValues>,
    actions: CategoryFormActions<Partial<ICategoryFormValues>>
  ) => {
    try {
      modCategory(await updateCategory(token, id, values as ICategoryRequest));
      setIsVisible(false);
    } catch (error) {
      actions.setErrors({ name: t(`errors.${error.code}`) });
    }
  };

  const deleteAction = async (token: string, id: string) => {
    try {
      await deleteCategory(token, id);
      delCategory(id);
    } catch (error) {
      console.log(error);
    }
  };

  const { id, setActionAndId, actionName, actionFn } = useActions(createAction, updateAction, deleteAction, () =>
    setIsVisible(true)
  );
  const category = useMemo(() => getCategory(id), [id]);

  const onFormSubmit =
    (id: string) => async (values: ICategoryFormValues, actions: CategoryFormActions<ICategoryFormValues>) => {
      actionFn(token, id, values, actions);
    };

  return (
    <div className={s.root}>
      {category && (
        <ModalFormWrapper isVisible={isVisible} onClose={() => setIsVisible(false)}>
          <h4>{actionName}</h4>
          <CategoryForm
            onFormSubmit={(values, actions) => onFormSubmit(category.id)(values, actions)}
            submitButtonCaption={actionName}
            name={category.name}
            photo={category.photo}
          />
        </ModalFormWrapper>
      )}
      {categories?.length > 0 &&
        categories.map((i) => {
          return (
            <div key={i.id}>
              <CategoryCard
                id={i.id}
                name={i.name}
                photo={i.photo}
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
