import React, { FC } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/shared/ui/button';
import { TextFormField } from 'src/shared/forms/fields/TextFormField';
import { TextAreaFormField } from 'src/shared/forms/fields/TextAreaFormField';

export type UserFormValues = {
  name: string;
  about: string;
};
export type ProfileFormErrors = Record<keyof UserFormValues, string>;

export const UserForm: FC = () => {
  const { t } = useTranslation();

  const validate = (values: UserFormValues) => {
    const errors = {} as ProfileFormErrors;
    if (!values.name) {
      errors.name = t('errors.ERR_IS_REQUIRED');
    }
    return errors;
  };

  const formManager = useFormik<UserFormValues>({
    initialValues: { name: '', about: '' },
    onSubmit: (values, actions) => {
      console.log('values: ', values);
      actions.resetForm();
    },
    validate: validate,
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

  return (
    <form>
      <h4>{t('forms.UserForm.title')}</h4>
      <TextFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.name}
        errors={errors.name}
        submitCount={submitCount}
        touched={touched.name}
        name="name"
        title={t('forms.UserForm.name.title')}
        placeholder={t('forms.UserForm.name.placeholder')}
      />

      <TextAreaFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.about}
        errors={errors.about}
        submitCount={submitCount}
        touched={touched.about}
        name="about"
        title={t('forms.UserForm.about.title')}
        placeholder={t('forms.UserForm.about.title')}
      />
      <Button type="button" onClick={() => handleSubmit()}>
        {t('forms.UserForm.submitButton.title')}
      </Button>
    </form>
  );
};
