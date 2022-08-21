import React, { useRef, useState } from 'react';
import { useStyletron } from 'baseui';
import { LabelXSmall } from 'baseui/typography';
import { StatefulTooltip } from 'baseui/tooltip';
import { PLACEMENT } from 'baseui/popover';
import { expandBorderStyles } from 'baseui/styles';

interface AvatarStackItem {
  title: string;
  img?: string;
  key: string;
}

export interface AvatarStackProps {
  onClick?: (item: AvatarStackItem) => void;
  items: AvatarStackItem[];
  align?: 'end' | 'start';
  absolute?: boolean;
}

export function AvatarStack({
  items,
  onClick,
  align = 'end',
  absolute = true,
}: AvatarStackProps) {
  const [css, $theme] = useStyletron();

  const [hover, setHover] = useState(false);

  const prevClear = useRef<number | undefined>(undefined);

  return (
    <div
      className={css({
        display: 'flex',
        position: 'relative',
        height: '28px',
      })}
    >
      {items.map((item, index) => {
        const initial = item.title
          .split(' ')
          .map((res) => res[0])
          .join('')
          .substring(0, 2)
          .toUpperCase();

        return (
          <StatefulTooltip
            content={() => item.title}
            returnFocus
            autoFocus
            popoverMargin={8}
            showArrow
            onMouseEnterDelay={500}
            placement={PLACEMENT.bottom}
            key={item.key}
          >
            <div
              className={css({
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                placeContent: 'center',
                backgroundColor: $theme.colors.backgroundLightAccent,
                borderRadius: '50%',
                position: absolute ? 'absolute' : 'inherit',
                [align === 'start' ? 'left' : 'right']:
                  (28 / (hover ? 0.9 : 2.5)) * index + 'px',
                transitionProperty: align === 'start' ? 'left' : 'right',
                transitionDuration: '200ms',
                transitionTimingFunction: 'ease',
                cursor: 'pointer',
                zIndex: items.length - index,
                ...expandBorderStyles($theme.borders.border100),
              })}
              onMouseOver={() => {
                setHover(true);
                clearTimeout(prevClear.current);
              }}
              onMouseOut={() => {
                prevClear.current = setTimeout(() => {
                  setHover(false);
                }, 50) as never as number;
              }}
              onClick={() => {
                onClick?.(item);
              }}
            >
              <LabelXSmall $style={{ fontWeight: 600, wordSpacing: '0' }}>
                {initial}
              </LabelXSmall>
            </div>
          </StatefulTooltip>
        );
      })}
    </div>
  );
}
