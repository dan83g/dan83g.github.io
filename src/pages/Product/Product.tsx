import React, { FC, useState, useInsertionEffect } from 'react';
import { ModalFormWrapper } from 'src/shared/windows/ModalFormWrapper/ModalFormWrapper';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/shared/config';
import { getCategories } from '@entities/category';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { categoriesActions, useCategoriesSelector } from 'src/app/store/categories';
import { createProduct, IProductFormValues, ProductFormActions, ProductForm } from 'src/entities/product';
import { useTokentStore } from 'src/entities/token';

interface IProduct {
  visible: boolean;
}

export const Product: FC<IProduct> = ({ visible }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useTokentStore();
  const categories = useCategoriesSelector((state) => state.categories);
  const [isVisible, setIsVisible] = useState<boolean>(visible);

  useInsertionEffect(() => {
    getCategories(token).then((response) => {
      dispatch(categoriesActions.setCategories(response.data));
    });
  }, [dispatch, token]);

  const onCloseModal = () => {
    setIsVisible(false);
    navigate(ROUTES.HOME);
  };

  const onCreateProductSubmit = async (values: IProductFormValues, actions: ProductFormActions<IProductFormValues>) => {
    try {
      await createProduct(token, values);
    } catch (error) {
      actions.setErrors({ name: t(`errors.${error.code}`) });
    }
  };

  return (
    <ModalFormWrapper isVisible={isVisible} onClose={onCloseModal}>
      <h4>{t('forms.ProductForm.actions.create.headerTitle')}</h4>
      <ProductForm
        categories={categories}
        onFormSubmit={onCreateProductSubmit}
        submitButtonCaption={t('forms.ProductForm.actions.create.buttonTitle')}
      />
    </ModalFormWrapper>
  );
};
