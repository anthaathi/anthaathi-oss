/* eslint-disable */
import React, { useEffect } from 'react';
import classNames from 'classnames';
import type { DraggableSyntheticListeners } from '@dnd-kit/core';
import type { Transform } from '@dnd-kit/utilities';

import { Handle } from './components';

import styles from './Item.module.css';
import { useStyletron } from 'baseui';
import { LabelLarge } from 'baseui/typography';
import { Avatar } from 'baseui/avatar';
import { Block } from 'baseui/block';
import { SpaceCard } from '../../../Space/Components/SpaceCard';

export interface Props {
  dragOverlay?: boolean;
  color?: string;
  disabled?: boolean;
  dragging?: boolean;
  handle?: boolean;
  handleProps?: any;
  height?: number;
  index?: number;
  fadeIn?: boolean;
  transform?: Transform | null;
  listeners?: DraggableSyntheticListeners;
  sorting?: boolean;
  style?: React.CSSProperties;
  transition?: string | null;
  wrapperStyle?: React.CSSProperties;
  value: React.ReactNode;
  onRemove?(): void;
  renderItem?(args: {
    dragOverlay: boolean;
    dragging: boolean;
    sorting: boolean;
    index: number | undefined;
    fadeIn: boolean;
    listeners: DraggableSyntheticListeners;
    ref: React.Ref<HTMLElement>;
    style: React.CSSProperties | undefined;
    transform: Props['transform'];
    transition: Props['transition'];
    value: Props['value'];
  }): React.ReactElement;
}

export const Item = React.memo(
  React.forwardRef<HTMLLIElement, Props>(
    (
      {
        color,
        dragOverlay,
        dragging,
        disabled,
        fadeIn,
        handle,
        handleProps,
        height,
        index,
        listeners,
        onRemove,
        renderItem,
        sorting,
        style,
        transition,
        transform,
        value,
        wrapperStyle,
        ...props
      },
      ref
    ) => {
      useEffect(() => {
        if (!dragOverlay) {
          return;
        }

        document.body.style.cursor = 'grabbing';

        return () => {
          document.body.style.cursor = '';
        };
      }, [dragOverlay]);

      const [css, $theme] = useStyletron();

      return renderItem ? (
        renderItem({
          dragOverlay: Boolean(dragOverlay),
          dragging: Boolean(dragging),
          sorting: Boolean(sorting),
          index,
          fadeIn: Boolean(fadeIn),
          listeners,
          ref,
          style,
          transform,
          transition,
          value,
        })
      ) : (
        <li
          className={classNames(
            styles.Wrapper,
            fadeIn && styles.fadeIn,
            sorting && styles.sorting,
            dragOverlay && styles.dragOverlay,
            css({
              marginBottom: $theme.sizing.scale200,
              marginTop: $theme.sizing.scale200,
            })
          )}
          style={
            {
              ...wrapperStyle,
              transition: [transition, wrapperStyle?.transition]
                .filter(Boolean)
                .join(', '),
              '--translate-x': transform
                ? `${Math.round(transform.x)}px`
                : undefined,
              '--translate-y': transform
                ? `${Math.round(transform.y)}px`
                : undefined,
              '--scale-x': transform?.scaleX
                ? `${transform.scaleX}`
                : undefined,
              '--scale-y': transform?.scaleY
                ? `${transform.scaleY}`
                : undefined,
              '--index': index,
              '--color': color,
            } as React.CSSProperties
          }
          ref={ref}
        >
          <div
            className={css({
              opacity: dragging ? '.4' : '1',
            })}
            {...props}
            tabIndex={!handle ? 0 : undefined}
          >
            {value}
          </div>
        </li>
      );
    }
  )
);

const UserAvatar = ({ name, imgSrc }: { name: string; imgSrc?: string }) => {
  return (
    <Avatar
      overrides={{
        Root: {
          style: () => ({
            marginRight: '5px',
          }),
        },
      }}
      src={imgSrc}
      name={name}
      size="scale900"
    />
  );
};

const ItemHeader = ({
  title,
  name,
  imgSrc,
  onClick1,
  onClick2,
}: {
  title: string;
  name: string;
  imgSrc?: string;
  onClick1?(): void;
  onClick2?(): void;
}) => {
  const [, $theme] = useStyletron();
  return (
    <Block
      display="flex"
      margin="scale500"
      alignItems="center"
      justifyContent="space-between"
      $style={{ cursor: 'pointer' }}
      onClick={onClick1}
    >
      <Block display="flex" alignItems="center">
        <UserAvatar name={name} imgSrc={imgSrc} />
        <LabelLarge
          $style={{
            fontFamily: $theme.typography.headingFontFamily,
            marginLeft: '5px',
          }}
        >
          {title}
        </LabelLarge>
      </Block>
      <span
        className="fa fa-ellipsis-v"
        aria-hidden="true"
        onClick={onClick2}
      />
    </Block>
  );
};
