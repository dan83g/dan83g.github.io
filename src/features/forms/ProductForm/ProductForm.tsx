import { useFormik } from 'formik';
import React, { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/shared/buttons/Button/Button';
import { NumberFormField } from 'src/shared/forms/fields/NumberFormField';
import { TextFormField } from 'src/shared/forms/fields/TextFormField';
import { isUndefiend } from 'src/shared/forms/lib/validation';
import { TextAreaFormField } from 'src/shared/forms/fields/TextAreaFormField';
import { SelectFormField } from 'src/shared/forms/fields/SelectFormField';
import { categories } from 'src/entities/ProductCard/types';

export type ProductFormValues = {
  name: string;
  price: number;
  oldPrice?: number;
  description?: string;
  image: string;
  category: string;
};
export type ProductFormErrors = Record<keyof ProductFormValues, string>;

export type CategoryItem = {
  value: string;
  label: string;
};

export const ProductForm: FC = () => {
  const { t } = useTranslation();

  const validate = (values: ProductFormValues) => {
    const errors = {} as ProductFormErrors;
    if (isUndefiend(values.name)) errors.name = t('errors.ERR_IS_REQUIRED');
    if (values.price == undefined || Number(values.price) <= 0) errors.price = t('errors.number_is_lower_then_zero');
    if (isUndefiend(values.category)) errors.category = t('errors.ERR_IS_REQUIRED');
    return errors;
  };

  const formManager = useFormik<ProductFormValues>({
    initialValues: {
      name: '',
      price: undefined,
      oldPrice: undefined,
      description: '',
      image: '',
      category: '',
    },
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    },
    validate: validate,
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;
  const categorySource: CategoryItem[] = [];
  categories.map((values) => {
    categorySource.push({ label: values.name, value: values.id });
  });

  const handleChangePrice = (value: number) => {
    formManager.setFieldValue('price', value);
  };

  const handleChangeOldPrice = (value: number) => {
    formManager.setFieldValue('oldPrice', value);
  };

  const handleChangeCategory = (value: ChangeEvent<string>) => {
    formManager.setFieldValue('category', value);
  };

  return (
    <form>
      <h4>{t('forms.ProductForm.title')}</h4>
      <TextFormField
        onBlur={handleBlur}
        onChange={handleChange}
        submitCount={submitCount}
        errors={errors.name}
        touched={touched.name}
        name="name"
        value={values.name}
        title={t('forms.ProductForm.name.title')}
        placeholder={t('forms.ProductForm.name.placeholder')}
      />

      <TextAreaFormField
        onBlur={handleBlur}
        onChange={handleChange}
        submitCount={submitCount}
        errors={errors.description}
        touched={touched.description}
        name="description"
        value={values.description}
        title={t('forms.ProductForm.description.title')}
        placeholder={t('forms.ProductForm.description.placeholder')}
      />

      <NumberFormField
        onBlur={handleBlur}
        onChange={handleChangePrice}
        submitCount={submitCount}
        errors={errors.price}
        touched={touched.price}
        name="price"
        value={values.price}
        title={t('forms.ProductForm.price.title')}
        placeholder={t('forms.ProductForm.price.placeholder')}
      />

      <NumberFormField
        onBlur={handleBlur}
        onChange={handleChangeOldPrice}
        submitCount={submitCount}
        errors={errors.oldPrice}
        touched={touched.oldPrice}
        name="oldPrice"
        value={values.oldPrice}
        title={t('forms.ProductForm.oldPrice.title')}
        placeholder={t('forms.ProductForm.oldPrice.placeholder')}
      />

      <TextFormField
        onBlur={handleBlur}
        onChange={handleChange}
        submitCount={submitCount}
        errors={errors.image}
        touched={touched.image}
        name="image"
        value={values.image}
        title={t('forms.ProductForm.image.title')}
        placeholder={t('forms.ProductForm.image.placeholder')}
      />

      <SelectFormField
        onBlur={handleBlur}
        onChange={handleChangeCategory}
        submitCount={submitCount}
        errors={errors.category}
        touched={touched.category}
        value={values.category}
        title={t('forms.ProductForm.category.title')}
        placeholder={t('forms.ProductForm.category.placeholder')}
        options={categorySource}
      />

      <Button type="submit" variant={'primary'} size="small" onClick={handleSubmit}>
        {t('forms.ProductForm.submitButton.title')}
      </Button>
    </form>
  );
};
