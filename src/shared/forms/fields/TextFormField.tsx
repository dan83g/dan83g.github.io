import React, { memo } from 'react';
import { Input } from 'antd';
import { FormElement } from './FormElement';
import { getValidates } from '../lib/validation';
import { FormFieldProps } from '../type/FormFieldTypes';

export const TextFormField = memo(
  ({ onChange, onBlur, touched, value, errors, disabled, submitCount, name, placeholder, title }: FormFieldProps) => {
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormElement title={title} validateStatus={validateStatus} help={help}>
        <Input
          disabled={disabled}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
      </FormElement>
    );
  }
);

TextFormField.displayName = 'TextFormField';
