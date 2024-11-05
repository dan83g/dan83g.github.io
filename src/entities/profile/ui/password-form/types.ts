import { FormikHelpers } from 'formik';

export interface IChangePasswordFormValues {
  password: string;
  newPassword: string;
  repeatPassword: string;
}
export type ChangePasswordFormErrors = Partial<Record<keyof IChangePasswordFormValues, string>>;
export type ChangePasswordFormActions<Values> = FormikHelpers<Values>;
