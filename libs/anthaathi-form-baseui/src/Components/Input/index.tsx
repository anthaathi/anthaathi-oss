import * as React from 'react';
import { Input as InputBase, InputProps } from 'baseui/input';
import { FormControl, FormControlProps } from 'baseui/form-control';
import { useForm } from '@anthaathi/form';

export function Input(props: {
  inputProps?: InputProps;
  formControlProps?: FormControlProps;
}) {
  const { value, onChange, onBlur } = useForm<string>();

  return (
    <FormControl {...(props.formControlProps || {})}>
      <InputBase
        onBlur={onBlur}
        onChange={(e) => onChange((e.target as HTMLInputElement).value)}
        value={value}
        {...(props.inputProps || {})}
      />
    </FormControl>
  );
}

export default Input;
