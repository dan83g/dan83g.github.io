import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CategoryForm, createCategory } from '@entities/category';
import { ICategoryFormValues, CategoryFormActions } from 'src/entities/category';
import s from './styles.module.sass';
import { useTokentStore } from 'src/entities/token';

export const CategoryPage: FC = () => {
  const { t } = useTranslation();
  const { token } = useTokentStore();

  const onCreateCategory = async (values: ICategoryFormValues, actions: CategoryFormActions<ICategoryFormValues>) => {
    try {
      await createCategory(token, values);
    } catch (error) {
      actions.setErrors({ name: t(`errors.${error.code}`) });
    }
  };

  return (
    <div className={s.root}>
      <div>
        <h4>{t('forms.CategoryForm.create.headerTitle')}</h4>
        <CategoryForm
          onFormSubmit={onCreateCategory}
          submitButtonCaption={t('forms.CategoryForm.create.buttonTitle')}
        />
      </div>
    </div>
  );
};
