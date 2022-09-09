import React, { useRef, useState } from 'react';
import { useStyletron } from 'baseui';
import { LabelXSmall } from 'baseui/typography';
import { StatefulTooltip } from 'baseui/tooltip';
import { PLACEMENT } from 'baseui/popover';
import { expandBorderStyles } from 'baseui/styles';
import { graphql, useFragment } from 'react-relay';
import { AvatarStack$key } from '../../../../__generated__/AvatarStack.graphql';

export interface AvatarStackProps {
  // eslint-disable-next-line no-unused-vars
  onClick?: (item: string | undefined) => void;
  align?: 'end' | 'start';
  absolute?: boolean;
  $ref: AvatarStack$key;
}

export function AvatarStack({
  onClick,
  align = 'end',
  absolute = true,
  $ref,
}: AvatarStackProps) {
  const userInfo = useFragment(
    graphql`
      fragment AvatarStack on UserConnection {
        edges {
          node {
            displayName
            id
          }
        }
      }
    `,
    $ref
  );

  const [css, $theme] = useStyletron();

  const [hover, setHover] = useState(false);

  const prevClear = useRef<number | undefined>(undefined);

  if (!userInfo) {
    return null;
  }

  return (
    <div
      className={css({
        display: 'flex',
        position: 'relative',
        height: '28px',
      })}
    >
      {userInfo.edges?.map((item, index) => {
        const initial = (item?.node?.displayName || '')
          .split(' ')
          .map((res) => res[0])
          .join('')
          .substring(0, 2)
          .toUpperCase();

        return (
          <StatefulTooltip
            content={() => item?.node?.displayName}
            returnFocus
            autoFocus
            popoverMargin={8}
            showArrow
            onMouseEnterDelay={500}
            placement={PLACEMENT.bottom}
            key={item?.node?.id || index}
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
                zIndex: (userInfo?.edges?.length || 0) - index,
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
                onClick?.(item?.node?.id);
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
