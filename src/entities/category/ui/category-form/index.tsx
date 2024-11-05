import React, { memo } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from '@shared/ui/button';
import { TextFormField } from '@shared/forms/fields/TextFormField';
import { isUndefiend, isInvalidImageLink } from '@shared/forms/lib/validation';
import { ICategoryFormValues, CategoryFormErrors, CategoryFormActions } from './types';

export * from './types';

export interface ICategoryForm<Values> extends Partial<ICategoryFormValues> {
  submitButtonCaption: string;
  onFormSubmit: (values: Values, actions: CategoryFormActions<Values>) => void;
}

export const CategoryForm = memo(
  ({ submitButtonCaption, onFormSubmit, name, photo }: ICategoryForm<ICategoryFormValues>) => {
    const { t } = useTranslation();

    const validate = (values: ICategoryFormValues) => {
      const errors = {} as CategoryFormErrors;
      if (isUndefiend(values.name)) errors.name = t('errors.ERR_IS_REQUIRED');
      if (!isUndefiend(values.photo) && !isInvalidImageLink(values.photo))
        errors.photo = t('errors.ERR_INVALID_IMAGE_LINK');
      return errors;
    };

    const formManager = useFormik<ICategoryFormValues>({
      initialValues: {
        name: name ?? '',
        photo: photo ?? '',
      },
      onSubmit: onFormSubmit,
      validate: validate,
    });

    const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

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
          title={t('forms.CategoryForm.name.title')}
          placeholder={t('forms.CategoryForm.name.placeholder')}
        />

        <TextFormField
          onBlur={handleBlur}
          onChange={handleChange}
          submitCount={submitCount}
          errors={errors.photo}
          touched={touched.photo}
          name="photo"
          value={values.photo}
          title={t('forms.CategoryForm.photo.title')}
          placeholder={t('forms.CategoryForm.photo.placeholder')}
        />

        <Button type="button" onClick={() => handleSubmit()}>
          {submitButtonCaption}
        </Button>
      </form>
    );
  }
);

CategoryForm.displayName = 'CategoryForm';
