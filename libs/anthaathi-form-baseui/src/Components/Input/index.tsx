import * as React from 'react';
import { Input as InputBase } from 'baseui/input';
import { useForm } from '@anthaathi/form/dist/lib/Hooks/useForm';

export default function Input() {
  const { value, onChange, onBlur } = useForm<string>();

  return (
    <InputBase
      onBlur={onBlur}
      onChange={(e) => onChange((e.target as HTMLInputElement).value)}
      value={value}
    />
  );
}
