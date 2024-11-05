import { FormikHelpers } from 'formik';

export interface IProductFormValues {
  name: string;
  price: number;
  oldPrice?: number;
  desc?: string;
  photo: string;
  categoryId: string;
}
export type ProductFormErrors = Partial<Record<keyof IProductFormValues, string>>;
export type ProductFormActions<Values> = FormikHelpers<Values>;
