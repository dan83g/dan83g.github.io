import React, { memo } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from '@shared/ui/button';
import { TextFormField } from '@shared/forms/fields/TextFormField';
import { ProfileFormErrors, IProfileFormValues, ProfileFormActions } from './types';

export * from './types';

export interface IProfileForm<Values> extends Partial<IProfileFormValues> {
  submitButtonCaption: string;
  onFormSubmit: (values: Values, actions: ProfileFormActions<Values>) => void;
}

export const ProfileForm = memo(({ submitButtonCaption, onFormSubmit, name }: IProfileForm<IProfileFormValues>) => {
  const { t } = useTranslation();

  const validate = (values: IProfileFormValues) => {
    const errors = {} as ProfileFormErrors;
    if (!values.name) errors.name = t('errors.ERR_IS_REQUIRED');
    return errors;
  };

  const formManager = useFormik<IProfileFormValues>({
    initialValues: {
      name: name ?? '',
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
        value={values.name}
        errors={errors.name}
        submitCount={submitCount}
        touched={touched.name}
        name="name"
        title={t('forms.ProfileForm.name.title')}
        placeholder={t('forms.ProfileForm.name.placeholder')}
      />

      <Button type="button" onClick={() => handleSubmit()}>
        {submitButtonCaption}
      </Button>
    </form>
  );
});

ProfileForm.displayName = 'ProfileForm';
