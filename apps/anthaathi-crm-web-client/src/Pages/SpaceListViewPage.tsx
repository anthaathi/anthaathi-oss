import { SpaceCard } from '../Features/Space/Components/SpaceCard';
import { Outlet } from 'react-router';
import { SplitView } from '../Features/Core/Components/SplitView';
import React, { forwardRef, useMemo, useState } from 'react';
import { useStyletron } from 'baseui';

export const SpaceListViewPage = forwardRef<HTMLDivElement>((_, ref) => {
  const [css, $theme] = useStyletron();

  const [selected, setSelected] = useState<number>();

  const items = useMemo(() => {
    return Array.from({ length: 10 });
  }, []);

  return (
    <SplitView
      id="spaces"
      left={
        <div className={css({ paddingBottom: $theme.sizing.scale800 })}>
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className={css({
                  paddingLeft: $theme.sizing.scale400,
                  paddingRight: $theme.sizing.scale400,
                  paddingTop: $theme.sizing.scale400,
                })}
                onClick={() => {
                  setSelected(index);
                }}
              >
                <SpaceCard isSelected={selected === index} url={`${index}`} />
              </li>
            ))}
          </ul>
        </div>
      }
      right={
        <div
          ref={ref}
          data-kind="split-view-outlet"
          className={css({ overflow: 'auto', height: '100%' })}
        >
          <Outlet />
        </div>
      }
    />
  );
});
