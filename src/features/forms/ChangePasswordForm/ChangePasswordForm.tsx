import React, { memo } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/shared/ui/button';
import { isUndefiend } from 'src/shared/forms/lib/validation';
import { PasswordFormField } from 'src/shared/forms/fields/PasswordFormField';

export type ChangePasswordFormValues = {
  password: string;
  newPassword: string;
  repeatPassword: string;
};

export type ChangePasswordFormErrors = Record<keyof ChangePasswordFormValues, string>;

export const ChangePasswordForm = memo(() => {
  const { t } = useTranslation();

  const validate = (values: ChangePasswordFormValues) => {
    const errors = {} as ChangePasswordFormErrors;
    if (isUndefiend(values.password)) errors.password = t('errors.ERR_IS_REQUIRED');
    if (isUndefiend(values.newPassword)) errors.newPassword = t('errors.ERR_IS_REQUIRED');
    if (isUndefiend(values.repeatPassword)) errors.repeatPassword = t('errors.ERR_IS_REQUIRED');
    if (values.repeatPassword !== values.newPassword) {
      errors.newPassword = t('errors.ERR_NOT_SAME_PASSWORD');
      errors.repeatPassword = t('errors.ERR_NOT_SAME_PASSWORD');
    }
    return errors;
  };

  const formManager = useFormik<ChangePasswordFormValues>({
    initialValues: { password: '', newPassword: '', repeatPassword: '' },
    onSubmit: (values, actions) => {
      console.log('values: ', values);
      actions.resetForm();
    },
    validate: validate,
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

  return (
    <>
      <h4>{t('forms.ChangePasswordForm.title')}</h4>
      <PasswordFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        errors={errors.password}
        submitCount={submitCount}
        touched={touched.password}
        name="password"
        title={t('forms.ChangePasswordForm.password.title')}
        placeholder={t('forms.ChangePasswordForm.password.placeholder')}
      />

      <PasswordFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.newPassword}
        errors={errors.newPassword}
        submitCount={submitCount}
        touched={touched.newPassword}
        name="newPassword"
        title={t('forms.ChangePasswordForm.newPassword.title')}
        placeholder={t('forms.ChangePasswordForm.password.placeholder')}
      />

      <PasswordFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.repeatPassword}
        errors={errors.repeatPassword}
        submitCount={submitCount}
        touched={touched.repeatPassword}
        name="repeatPassword"
        title={t('forms.ChangePasswordForm.repeatPassword.title')}
        placeholder={t('forms.ChangePasswordForm.repeatPassword.placeholder')}
      />
      <Button type="button" onClick={() => handleSubmit()}>
        {t('forms.ChangePasswordForm.submitButton.title')}
      </Button>
    </>
  );
});

ChangePasswordForm.displayName = 'ChangePasswordForm';
