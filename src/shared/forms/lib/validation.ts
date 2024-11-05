import { HelpComponent } from '../fields/FormElement';

export type ValidateStatus = 'error' | '';
export const isUndefiend = (str?: string): boolean => !str?.trim();
export const isInvalidEmail = (str?: string): boolean => {
  return new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  ).test(str);
};
export const isInvalidImageLink = (str?: string): boolean => {
  return new RegExp(/^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim).test(str);
};

export const getValidateStatus = (errors: unknown, touched: unknown, submitCount: number): ValidateStatus =>
  submitCount && errors && touched ? 'error' : '';

export const getHelpComponent = (errors: unknown, touched: unknown, submitCount: number): HelpComponent =>
  submitCount && errors && touched ? (errors as HelpComponent) : null;

export const getValidates = (
  errors: unknown,
  touched: unknown,
  submitCount: number
): { validateStatus: ValidateStatus; help: HelpComponent } => ({
  validateStatus: getValidateStatus(errors, touched, submitCount),
  help: getHelpComponent(errors, touched, submitCount),
});
