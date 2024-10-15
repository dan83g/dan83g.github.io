import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Button } from 'src/shared/buttons/Button/Button';
import { isUndefiend, isInvalidEmail } from 'src/shared/forms/lib/validation';
import { TextFormField } from 'src/shared/forms/fields/TextFormField';
import { PasswordFormField } from 'src/shared/forms/fields/PasswordFormField';

export interface IRegisterFormValues {
  email: string;
  password: string;
}
export type RegisterFormErrors = Record<keyof IRegisterFormValues, string>;

export interface IRegisterForm {
  onFormSubmit: (values: IRegisterFormValues) => void;
}

export const RegisterForm = memo(({ onFormSubmit }: IRegisterForm) => {
  const { t } = useTranslation();
  const validate = (values: IRegisterFormValues) => {
    const errors = {} as RegisterFormErrors;
    if (isUndefiend(values.email)) errors.email = t('errors.ERR_IS_REQUIRED');
    if (!isUndefiend(values.email) && !isInvalidEmail(values.email)) errors.email = t('errors.ERR_INVALID_EMAIL');
    if (isUndefiend(values.password)) errors.password = t('errors.ERR_IS_REQUIRED');
    return errors;
  };

  const formManager = useFormik<IRegisterFormValues>({
    initialValues: { email: '', password: '' },
    onSubmit: (values, actions) => {
      onFormSubmit(values);
      actions.resetForm();
    },
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
        title={t('forms.RegisterForm.email.title')}
        placeholder={t('forms.RegisterForm.email.placeholder')}
      />

      <PasswordFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        errors={errors.password}
        submitCount={submitCount}
        touched={touched.password}
        name="password"
        title={t('forms.RegisterForm.password.title')}
        placeholder={t('forms.RegisterForm.password.placeholder')}
      />

      <Button type="submit" variant={'primary'} size="small" onClick={handleSubmit}>
        {t('forms.RegisterForm.submitButton.title')}
      </Button>
    </form>
  );
});

RegisterForm.displayName = 'RegisterForm';
