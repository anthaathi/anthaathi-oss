import * as React from 'react';
import { FormControl, FormControlProps } from 'baseui/form-control';
import {
  Select as SelectW,
  Value,
  SelectProps as SelectPropsW,
} from 'baseui/select';
import { useForm } from '@anthaathi/form';

export interface SelectProps {
  formControlProps?: Omit<FormControlProps, 'children'>;
  selectProps?: SelectPropsW;
  key: React.Key;
}

export function Select({ formControlProps, selectProps }: SelectProps) {
  const { value, onChange, onBlur, error } = useForm<Value>();

  return (
    <FormControl error={error[0]} {...(formControlProps || {})}>
      <SelectW
        onBlur={onBlur}
        error={Boolean(error[0])}
        value={value}
        onChange={(e) => onChange(e.value)}
        {...(selectProps || {})}
      />
    </FormControl>
  );
}

export default Select;
