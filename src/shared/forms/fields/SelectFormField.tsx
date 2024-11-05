import React, { memo } from 'react';
import { Select } from 'antd';
import { FormElement } from './FormElement';
import { getValidates } from '../lib/validation';
import { SelectFieldProps } from '../type/FormFieldTypes';

export const SelectFormField = memo(
  ({
    onChange,
    onBlur,
    touched,
    value,
    errors,
    disabled,
    submitCount,
    placeholder,
    title,
    options,
  }: SelectFieldProps) => {
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormElement title={title} validateStatus={validateStatus} help={help}>
        <Select
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          options={options}
        />
      </FormElement>
    );
  }
);

SelectFormField.displayName = 'SelectFormField';
