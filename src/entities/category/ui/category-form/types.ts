import { FormikHelpers } from 'formik';

export interface ICategoryFormValues {
  name: string;
  photo?: string;
}
export type CategoryFormErrors = Partial<Record<keyof ICategoryFormValues, string>>;
export type CategoryFormActions<Values> = FormikHelpers<Values>;
