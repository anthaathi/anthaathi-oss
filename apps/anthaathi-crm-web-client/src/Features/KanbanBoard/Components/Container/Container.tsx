import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { Handle, Remove } from '../Item';

import { useStyletron } from 'baseui';
import { LabelMedium } from 'baseui/typography';
import { expandBorderStyles } from 'baseui/styles';
import { FlexFill } from '../../../Core/Components/FlexFill';

export interface Props {
  children: React.ReactNode;
  columns?: number;
  label?: string;
  style?: React.CSSProperties;
  horizontal?: boolean;
  hover?: boolean;
  handleProps?: React.HTMLAttributes<any>;
  scrollable?: boolean;
  shadow?: boolean;
  placeholder?: boolean;
  unstyled?: boolean;
  onClick?(): void;
  onRemove?(): void;
  className?: string;
}

export const Container = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      columns = 1,
      handleProps,
      horizontal,
      hover,
      onClick,
      onRemove,
      label,
      placeholder,
      style,
      scrollable,
      shadow,
      unstyled,
      ...props
    }: Props,
    ref
  ) => {
    const Component = onClick ? 'button' : 'div';
    const [css, $theme] = useStyletron();

    return (
      <Component
        {...props}
        ref={ref as never}
        style={
          {
            ...style,
            '--columns': columns,
          } as React.CSSProperties
        }
        className={
          css({ width: '420px', margin: '0 12px' }) +
            ' ' +
            classNames(
              unstyled && 'styles.unstyled',
              horizontal && 'styles.horizontal',
              hover && 'styles.hover',
              placeholder && 'styles.placeholder',
              scrollable && 'styles.scrollable',
              shadow && 'styles.shadow'
            ) +
            ' ' +
            props.className ?? ''
        }
        onClick={onClick}
        tabIndex={onClick ? 0 : undefined}
      >
        {label ? (
          <div
            className={css({
              ...expandBorderStyles($theme.borders.border200),
              display: 'flex',
              alignContent: 'center',
              alignItems: 'center',
              padding: '0 12px',
              backgroundColor: $theme.colors.primaryB,
            })}
          >
            <LabelMedium>{label}</LabelMedium>

            <FlexFill />

            <div className={css({ display: 'flex' })}>
              {onRemove ? <Remove onClick={onRemove} /> : undefined}
              <Handle {...handleProps} />
            </div>
          </div>
        ) : null}
        {placeholder ? children : <ul>{children}</ul>}
      </Component>
    );
  }
);
