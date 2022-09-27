import { useStyletron } from '@anthaathi/solid-styletron';
import type { JSX } from 'solid-js';
import { StyleObject } from 'styletron-standard';

export interface GridProps {
  children: JSX.Element;
  $override?: {
    Root?: {
      style?: StyleObject;
    };
  };
  columns?: number[] | number;
}

export function Grid(props: GridProps) {
  const [css, $theme] = useStyletron();

  const objectKeys = Object.keys($theme.mediaQuery);

  const columns = props.columns || [1, 2, 2, 4, 4];

  function getColumnValue(mediaQuery: string) {
    if (!Array.isArray(columns)) {
      return columns;
    }

    const objectIndex = objectKeys.findIndex((res) => res === mediaQuery);

    function previousValue(index) {
      const returnValue = objectKeys[index];

      if (returnValue) {
        return index;
      }

      if (index < 0) {
        return;
      }

      return previousValue(index - 1);
    }

    return columns[previousValue(objectIndex)];
  }

  const columnValueXS = getColumnValue('xs');
  const columnValueSm = getColumnValue('sm');
  const columnValueMd = getColumnValue('md');
  const columnValueLg = getColumnValue('lg');
  const columnValueXl = getColumnValue('xl');

  return (
    <div
      class={css([
        {
          display: 'grid',
          gridTemplateColumns: `repeat(${columnValueXS}, 1fr)`,
          [$theme.mediaQuery.xs]: {
            gridTemplateColumns: `repeat(${columnValueXS}, 1fr)`,
          },
          [$theme.mediaQuery.sm]: {
            gridTemplateColumns: `repeat(${columnValueSm}, 1fr)`,
          },
          [$theme.mediaQuery.md]: {
            gridTemplateColumns: `repeat(${columnValueMd}, 1fr)`,
          },
          [$theme.mediaQuery.lg]: {
            gridTemplateColumns: `repeat(${columnValueLg}, 1fr)`,
          },
          [$theme.mediaQuery.xl]: {
            gridTemplateColumns: `repeat(${columnValueXl}, 1fr)`,
          },
        },
        props?.$override?.Root?.style,
      ])}
    >
      {props.children}
    </div>
  );
}
