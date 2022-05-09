import { useCallback, useContext, useMemo } from 'react';
import { DataConfigContext, DataModelRegistry } from '../Components/Form';

export interface UseFormCallback<T> {
  // eslint-disable-next-line no-unused-vars
  onChange: (_: T) => void;
  onBlur: () => void;
  value?: T;
  error: string[];
}

export function useForm<T>(): UseFormCallback<T> {
  const context = useContext(DataConfigContext);

  const [data, setData] = useContext(DataModelRegistry);

  const { $ref } = useMemo(() => context[context.length - 1], [context]);

  const paths = useMemo(
    () =>
      context
        .filter((res) => res.$ref === $ref)
        .map((res) => res.$paths)
        .flat(),
    [context],
  );

  const value = useMemo(
    () => paths.reduce((object, key) => (object || {})[key], data[$ref]),
    [data, paths, $ref],
  );

  const onChange = useCallback(
    (value_: T) => {
      setData((prev) => {
        function nestedKey(obj: object, keys: (string | number)[]) {
          keys.forEach((key, index) => {
            // eslint-disable-next-line no-param-reassign
            obj[key as never] = (
              index === keys.length - 1 ? value_ : {}
            ) as never;
            // eslint-disable-next-line no-param-reassign
            obj = obj[key as never];
          });
        }

        nestedKey(prev, [$ref, ...paths]);

        return { ...prev };
      });
    },
    [setData],
  );

  const onBlur = useCallback(() => {}, []);

  const error = useMemo(() => [], []);

  return {
    onChange,
    onBlur,
    value,
    error,
  };
}
