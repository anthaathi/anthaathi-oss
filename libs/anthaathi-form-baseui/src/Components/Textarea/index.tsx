import * as React from 'react';
import { FormControl, FormControlProps } from 'baseui/form-control';
import {
  Textarea as TextareaW,
  TextareaProps as TextareaPropsW,
} from 'baseui/textarea';
import { useForm } from '@anthaathi/form';

export interface TextareaProps {
  formControlProps: FormControlProps;
  textareaProps: TextareaPropsW;
}

export function Textarea({ formControlProps, textareaProps }: TextareaProps) {
  const { value, onChange, onBlur, error } = useForm<string>();

  return (
    <FormControl error={error[0]} {...(formControlProps || {})}>
      <TextareaW
        onChange={(e) => onChange((e.target as HTMLTextAreaElement).value)}
        value={value}
        onBlur={onBlur}
        error={Boolean(error[0])}
        {...(textareaProps || {})}
      />
    </FormControl>
  );
}

export default Textarea;
