import React, { useEffect } from 'react';
import classNames from 'classnames';
import type { DraggableSyntheticListeners } from '@dnd-kit/core';
import type { Transform } from '@dnd-kit/utilities';

import { Handle, Remove } from './components';

import styles from './Item.module.css';
import { useStyletron } from 'baseui';
import { LabelLarge, LabelMedium } from 'baseui/typography';
import { Avatar } from 'baseui/avatar';
import { Block } from 'baseui/block';

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

      const [css] = useStyletron();

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
            dragOverlay && styles.dragOverlay
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
            style={{
              height: '240px',
              width: '420px',
              marginTop: '5px',
              marginBottom: '5px',
              borderRadius: '2px',
              padding: '0px',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'hsla(0, 0%, 0%, 0.04)',
            }}
          >
            <ItemHeader title="Get things done you got that" name="user name" />
            <div
              style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'hsla(0, 0%, 0%, 0.04)',
              }}
            />
            <div
              className={
                classNames(
                  dragging && 'styles.dragging',
                  handle && 'styles.withHandle',
                  dragOverlay && 'styles.dragOverlay',
                  disabled && 'styles.disabled',
                  color && 'styles.color'
                ) +
                ' ' +
                css({
                  width: '100%',
                  // display: 'flex',
                })
              }
              style={style}
              data-cypress="draggable-item"
              {...(!handle ? listeners : undefined)}
              {...props}
              tabIndex={!handle ? 0 : undefined}
            >
              <Block margin="scale500" alignItems="center">
                <LabelMedium>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto enim eum excepturi, explicabo fuga in inventore
                  labore maiores nam nostrum odio officiis perspiciatis quaerat
                  quibusdam sint totam ullam vel vero.
                </LabelMedium>
              </Block>
              <div
                style={{
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'hsla(0, 0%, 0%, 0.04)',
                }}
              />
              <Block margin="scale500" alignItems="center">
                <UserAvatar name="User name" />
                <UserAvatar name="User name" />
                <UserAvatar name="User name" />
                {/* {value} */}
                <span className={styles.Actions}>
                  {onRemove ? (
                    <Remove className={styles.Remove} onClick={onRemove} />
                  ) : null}
                  {handle ? <Handle {...handleProps} {...listeners} /> : null}
                </span>
              </Block>
            </div>
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
