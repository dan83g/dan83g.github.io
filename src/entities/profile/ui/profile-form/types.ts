import { FormikHelpers } from 'formik';

export interface IProfileFormValues {
  name: string;
}
export type ProfileFormErrors = Partial<Record<keyof IProfileFormValues, string>>;
export type ProfileFormActions<Values> = FormikHelpers<Values>;
