import { useCallback, useContext, useId, useMemo, useState } from 'react';
import { DataConfigContext } from '../Form';

export interface UseFormCallback<T> {
  onChange: (_: T) => void;
  onBlur: () => void;
  value: T;
  error: string[];
}

export function useForm<T>(): UseFormCallback<T> {
  const config = useContext(DataConfigContext);
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
