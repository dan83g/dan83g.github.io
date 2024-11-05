import React, { memo } from 'react';
import { InputNumber } from 'antd';
import { FormElement } from './FormElement';
import { getValidates } from '../lib/validation';
import { NumberFormFieldProps } from '../type/FormFieldTypes';

export const NumberFormField = memo(
  ({
    onChange,
    onBlur,
    touched,
    value,
    errors,
    disabled,
    submitCount,
    name,
    placeholder,
    title,
  }: NumberFormFieldProps) => {
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormElement title={title} validateStatus={validateStatus} help={help}>
        <InputNumber
          disabled={disabled}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          style={{
            width: '100%',
          }}
          type="number"
        />
      </FormElement>
    );
  }
);

NumberFormField.displayName = 'NumberFormField';
