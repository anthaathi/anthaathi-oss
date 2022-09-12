import { useStyletron } from 'baseui';
import { Icon } from '../../Core/Components/Icon';
import React from 'react';

export function SidebarItem({
  icon,
  title,
  header,
}: {
  icon?: string;
  title: string;
  header?: boolean;
}) {
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        ...(header
          ? $theme.typography.LabelXSmall
          : $theme.typography.LabelSmall),
        color: $theme.colors.primaryB,
      })}
    >
      {icon && (
        <>
          <Icon
            className={css({
              fontSize: header ? '12px' : undefined,
            })}
            icon={icon}
          />
          <span className={css({ width: '10px' })} />
        </>
      )}
      {title}
    </div>
  );
}
