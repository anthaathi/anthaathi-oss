import * as React from 'react';
import { Input, SIZE } from 'baseui/input';
import { useStyletron } from 'baseui';

export function Search() {
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        minWidth: '340px',
        display: 'none',
        [$theme.mediaQuery.large]: { display: 'block' },
      })}
    >
      <Input size={SIZE.compact} placeholder="Search" />
    </div>
  );
}
