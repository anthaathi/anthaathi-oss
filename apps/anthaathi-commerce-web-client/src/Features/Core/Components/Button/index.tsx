import type { JSX } from 'solid-js';
import { useStyletron } from '@anthaathi/solid-styletron';
import { filterProps } from '~/Features/Core/Utills/filterProps';
import { Dynamic } from 'solid-js/web';
import { Component } from 'solid-js/types/render/component';

export interface ButtonProps {
  $startEnhancer?: () => JSX.Element;
  $endEnhancer?: () => JSX.Element;
  $as?: keyof JSX.IntrinsicElements | Component<any> | (string & {});
  href?: string;
  $fullWidth?: boolean;
}

export function Button(
  props: JSX.HTMLAttributes<HTMLButtonElement> & ButtonProps,
) {
  const [css, $theme] = useStyletron();

  return (
    <Dynamic
      component={props.$as ?? 'button'}
      {...filterProps(props)}
      class={css({
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        padding: '12px',
        transition: 'background-color ease .1s',
        outline: '2px solid transparent',
        alignItems: 'center',
        outlineOffset: '-2px',
        textDecoration: 'none',
        color: '#000',
        width: props.$fullWidth ? '100%' : undefined,
        ':hover': { background: '#EEE' },
        ':active': {},
        ':focus': {
          outlineWidth: '2px',
          outlineStyle: 'solid',
          outlineColor: $theme.tokens.Common.primary,
          outlineOffset: '-2px',
          background: '#EEE',
        },
        ...$theme.typography.LabelSmall,
      })}
    >
      {props.$startEnhancer && (
        <div
          class={css({
            marginRight: props.children ? $theme.sizing.scale400 : 0,
            display: 'flex',
            alignItems: 'center',
            placeContent: 'center',
          })}
        >
          {props.$startEnhancer()}
        </div>
      )}

      <span>{props.children}</span>

      {props.$endEnhancer && (
        <div
          class={css({
            marginLeft: props.children ? $theme.sizing.scale400 : 0,
            display: 'flex',
            alignItems: 'center',
            placeContent: 'center',
          })}
        >
          {props.$endEnhancer()}
        </div>
      )}
    </Dynamic>
  );
}
