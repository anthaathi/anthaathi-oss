import * as React from 'react';
import { FormControl } from 'baseui/form-control';
import { Select as SelectW, Value } from 'baseui/select';
import { useForm } from '@anthaathi/form';

export function Select() {
  const { value, onChange, onBlur, error } = useForm<Value>();

  return (
    <FormControl error={error[0]}>
      <SelectW
        onBlur={onBlur}
        error={Boolean(error[0])}
        value={value}
        onChange={(e) => onChange(e.value)}
      />
    </FormControl>
  );
}

export default Select;
