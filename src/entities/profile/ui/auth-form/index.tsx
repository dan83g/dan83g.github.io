/* eslint-disable import/named */
import React, { memo } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { TextFormField } from '@shared/forms/fields/TextFormField';
import { PasswordFormField } from '@shared/forms/fields/PasswordFormField';
import { isUndefiend, isInvalidEmail } from '@shared/forms/lib/validation';
import { Button } from '@shared/ui/button';
import { IAuthFormValues, AuthFormErrors, AuthFormActions } from './types';
export * from './types';

export interface IAuthForm<Values> {
  submitButtonCaption: string;
  onFormSubmit: (values: Values, actions: AuthFormActions<Values>) => void;
}

export const AuthForm = memo(({ submitButtonCaption, onFormSubmit }: IAuthForm<IAuthFormValues>) => {
  const { t } = useTranslation();

  const validate = (values: IAuthFormValues) => {
    const errors = {} as AuthFormErrors;
    if (isUndefiend(values.email)) errors.email = t('errors.ERR_IS_REQUIRED');
    if (!isUndefiend(values.email) && !isInvalidEmail(values.email)) errors.email = t('errors.ERR_INVALID_EMAIL');
    if (isUndefiend(values.password)) errors.password = t('errors.ERR_IS_REQUIRED');
    return errors;
  };

  const formManager = useFormik<IAuthFormValues>({
    initialValues: { email: '', password: '' },
    // onSubmit: (values, actions) => {},
    onSubmit: onFormSubmit,
    validate: validate,
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

  return (
    <form>
      <TextFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        errors={errors.email}
        submitCount={submitCount}
        touched={touched.email}
        name="email"
        title={t('forms.AuthForm.email.title')}
        placeholder={t('forms.AuthForm.email.placeholder')}
      />

      <PasswordFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        errors={errors.password}
        submitCount={submitCount}
        touched={touched.password}
        name="password"
        title={t('forms.AuthForm.password.title')}
        placeholder={t('forms.AuthForm.password.placeholder')}
      />

      <Button type="button" onClick={() => handleSubmit()}>
        {submitButtonCaption}
      </Button>
    </form>
  );
});

AuthForm.displayName = 'AuthForm';
