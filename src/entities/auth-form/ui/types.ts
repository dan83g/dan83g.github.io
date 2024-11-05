import { FormikHelpers } from 'formik';

export interface IAuthFormValues {
  email: string;
  password: string;
}
export type AuthFormErrors = Partial<Record<keyof IAuthFormValues, string>>;
export type AuthFormActions<Values> = FormikHelpers<Values>;
