import { useCallback, useContext, useMemo, useState } from 'react';
import { DataConfigContext } from '../Form';

export interface UseFormCallback<T> {
  // eslint-disable-next-line no-unused-vars
  onChange: (_: T) => void;
  onBlur: () => void;
  value?: T;
  error: string[];
}

export function useForm<T>(): UseFormCallback<T> {
  const [value, setValue] = useState<T>();
  const onChange = useCallback((value_: T) => {
    setValue(value_);
  }, []);
  const onBlur = useCallback(() => {}, []);
  const error = useMemo(() => [], []);

  return {
    onChange,
    onBlur,
    value,
    error,
  };
}
