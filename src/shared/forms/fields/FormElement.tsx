import React, { memo } from 'react';
import { Form } from 'antd';

export type HelpComponent = null | React.ReactNode;
export type ValidateStatus = 'error' | '';

export type FormElementProps = {
  className?: string;
  title: React.ReactNode | React.ReactNode[];
  children: React.ReactNode | React.ReactNode[];
  validateStatus: ValidateStatus;
  help: HelpComponent;
  required?: boolean;
};

export const FormElement = memo(({ validateStatus, help, children }: FormElementProps) => {
  return (
    <div>
      <Form.Item validateStatus={validateStatus} help={help}>
        {children}
      </Form.Item>
    </div>
  );
});

FormElement.displayName = 'FormElement';
