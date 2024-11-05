import React, { ChangeEvent, memo } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/shared/ui/button';
import { NumberFormField } from 'src/shared/forms/fields/NumberFormField';
import { TextFormField } from 'src/shared/forms/fields/TextFormField';
import { isUndefiend } from 'src/shared/forms/lib/validation';
import { TextAreaFormField } from 'src/shared/forms/fields/TextAreaFormField';
import { SelectFormField } from 'src/shared/forms/fields/SelectFormField';
import { ICategory } from 'src/entities/category';
import { ProductFormErrors, IProductFormValues, ProductFormActions } from './types';
export * from './types';

export type CategoryItem = {
  value: string;
  label: string;
};

export interface IProductForm<Values> extends Partial<IProductFormValues> {
  categories: ICategory[];
  submitButtonCaption: string;
  onFormSubmit: (values: Values, actions: ProductFormActions<Values>) => void;
}

export const ProductForm = memo(
  ({
    submitButtonCaption,
    onFormSubmit,
    categories,
    name,
    price,
    oldPrice,
    desc,
    photo,
    categoryId,
  }: IProductForm<IProductFormValues>) => {
    const { t } = useTranslation();

    const validate = (values: IProductFormValues) => {
      const errors = {} as ProductFormErrors;
      if (isUndefiend(values.name)) errors.name = t('errors.ERR_IS_REQUIRED');
      if (values.price == undefined || Number(values.price) <= 0) errors.price = t('errors.ERR_BELOW_ZERO');
      if (isUndefiend(values.categoryId)) errors.categoryId = t('errors.ERR_IS_REQUIRED');
      return errors;
    };

    const formManager = useFormik<IProductFormValues>({
      initialValues: {
        name: name ?? '',
        price: price ?? undefined,
        oldPrice: oldPrice ?? undefined,
        desc: desc ?? '',
        photo: photo ?? '',
        categoryId: categoryId ?? undefined,
      },
      onSubmit: onFormSubmit,
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
      formManager.setFieldValue('categoryId', value);
    };

    return (
      <form>
        <TextFormField
          onBlur={handleBlur}
          onChange={handleChange}
          submitCount={submitCount}
          errors={errors.name}
          touched={touched.name}
          name="name"
          value={values.name}
          title={t('forms.ProductForm.fields.name.title')}
          placeholder={t('forms.ProductForm.fields.name.placeholder')}
        />

        <TextAreaFormField
          onBlur={handleBlur}
          onChange={handleChange}
          submitCount={submitCount}
          errors={errors.desc}
          touched={touched.desc}
          name="desc"
          value={values.desc}
          title={t('forms.ProductForm.fields.desc.title')}
          placeholder={t('forms.ProductForm.fields.desc.placeholder')}
        />

        <NumberFormField
          onBlur={handleBlur}
          onChange={handleChangePrice}
          submitCount={submitCount}
          errors={errors.price}
          touched={touched.price}
          name="price"
          value={values.price}
          title={t('forms.ProductForm.fields.price.title')}
          placeholder={t('forms.ProductForm.fields.price.placeholder')}
        />

        <NumberFormField
          onBlur={handleBlur}
          onChange={handleChangeOldPrice}
          submitCount={submitCount}
          errors={errors.oldPrice}
          touched={touched.oldPrice}
          name="oldPrice"
          value={values.oldPrice}
          title={t('forms.ProductForm.fields.oldPrice.title')}
          placeholder={t('forms.ProductForm.fields.oldPrice.placeholder')}
        />

        <TextFormField
          onBlur={handleBlur}
          onChange={handleChange}
          submitCount={submitCount}
          errors={errors.photo}
          touched={touched.photo}
          name="photo"
          value={values.photo}
          title={t('forms.ProductForm.fields.photo.title')}
          placeholder={t('forms.ProductForm.fields.photo.placeholder')}
        />

        <SelectFormField
          onBlur={handleBlur}
          onChange={handleChangeCategory}
          submitCount={submitCount}
          errors={errors.categoryId}
          touched={touched.categoryId}
          value={values.categoryId}
          title={t('forms.ProductForm.fields.category.title')}
          placeholder={t('forms.ProductForm.fields.category.placeholder')}
          options={categorySource}
        />

        <Button type="button" onClick={() => handleSubmit()}>
          {submitButtonCaption}
        </Button>
      </form>
    );
  }
);

ProductForm.displayName = 'ProductForm';
