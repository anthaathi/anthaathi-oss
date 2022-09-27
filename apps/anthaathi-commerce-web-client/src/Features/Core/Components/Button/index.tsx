import type { JSX } from 'solid-js';
import { useStyletron } from '@anthaathi/solid-styletron';
import { filterProps } from '~/Features/Core/Utills/filterProps';
import { Dynamic } from 'solid-js/web';
import { Component } from 'solid-js/types/render/component';
import { children } from 'solid-js';
import { StyleObject } from 'styletron-standard';
import { useCssToken } from '~/Features/Core/Hooks/useCssToken';

export interface ButtonProps {
  $startEnhancer?: () => JSX.Element;
  $endEnhancer?: () => JSX.Element;
  $as?: keyof JSX.IntrinsicElements | Component<any> | (string & {});
  href?: string;
  $fullWidth?: boolean;
  $kind?: Kind;
  type?: 'button' | 'submit' | 'reset';
  $override?: {
    Root?: {
      style?: StyleObject;
    };
  };
}

export enum Kind {
  Primary,
  Secondary,
  Tertiary,
  Tab,
}

export function Button(
  props: JSX.HTMLAttributes<HTMLButtonElement> & ButtonProps,
) {
  const [css, $theme] = useStyletron();
  const cssVar = useCssToken();
  const c = children(() => <span>{props.children}</span>);

  let styleObject: StyleObject = {};

  switch (props.$kind) {
    case Kind.Secondary:
      styleObject = {
        color: cssVar('button-tertiary-color', '#000'),
        background: cssVar(
          'button-tertiary-hover-background-color',
          cssVar('primary-color', '#EEE'),
        ),
        border: 'none',
        ':hover': {
          color: cssVar('button-tertiary-hover-color', '#000'),
          background: cssVar('button-tertiary-background-color', '#FFF'),
        },
      };
      break;
    case Kind.Tab:
      styleObject = {
        color: cssVar('button-tab-color', '#000'),
        borderBottomColor: 'transparent',
        borderBottomWidth: cssVar('button-tab-border-bottom-width', '3px'),
        borderBottomStyle: 'solid',
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
        transition: 'border-color all .2s',
        ':hover': {
          borderBottomColor: cssVar(
            'button-tab-border-bottom-color',
            cssVar('primary-color', '#118b44'),
          ),
        },
        ':focus': {
          borderBottomColor: cssVar(
            'button-tab-border-bottom-color',
            cssVar('primary-color', '#118b44'),
          ),
        },
      };
      break;
    case Kind.Tertiary:
      styleObject = {
        color: cssVar('button-tertiary-color', '#000'),
        background: cssVar('button-tertiary-background-color', 'transparent'),
        border: 'none',
        ':hover': {
          color: cssVar('button-tertiary-hover-color', '#000'),
          background: cssVar(
            'button-tertiary-hover-background-color',
            cssVar('primary-color', '#EEE'),
          ),
        },
      };
      break;
    default:
      styleObject = {
        color: cssVar('button-tertiary-color', '#FFF'),
        background: cssVar(
          'button-tertiary-background-color',
          cssVar('primary-color', '#118b44'),
        ),
        ':focus': {
          outlineColor: cssVar(
            'button-tertiary-focus-outline-color',
            cssVar('primary-color', '#118b44'),
          ),
        },
        ':hover': {
          outlineColor: cssVar(
            'button-tertiary-hover-outline-color',
            cssVar('primary-color', '#118b44'),
          ),
        },
      };
  }

  return (
    <Dynamic
      component={props.$as ?? 'button'}
      {...filterProps(props)}
      class={css([
        {
          cursor: 'pointer',
          display: 'flex',
          padding: '12px 12px',
          transition: 'background-color ease .1s',
          outline: '2px solid transparent',
          alignItems: 'center',
          outlineOffset: '-2px',
          textDecoration: 'none',
          borderBottomRightRadius: cssVar(
            'button-border-bottom-right-radius',
            '4px',
          ),
          borderBottomLeftRadius: cssVar(
            'button-border-bottom-left-radius',
            '4px',
          ),
          borderTopRightRadius: cssVar('button-border-top-right-radius', '4px'),
          borderTopLeftRadius: cssVar('button-border-top-left-radius', '4px'),
          width: props.$fullWidth ? '100%' : undefined,
          ...styleObject,
          ':hover': {
            outlineWidth: '2px',
            outlineStyle: 'solid',
            outlineOffset: '-2px',
            // @ts-ignore
            ...(styleObject[':hover'] || {}),
          },
          ':active': {
            outlineWidth: '2px',
            outlineStyle: 'solid',
            outlineOffset: '-2px',
            // @ts-ignore
            ...(styleObject[':active'] || {}),
          },
          ':focus': {
            outlineWidth: '2px',
            outlineStyle: 'solid',
            outlineColor: cssVar('--primary-color', '#118b44'),
            outlineOffset: '-2px',
            // @ts-ignore
            ...(styleObject[':focus'] || {}),
          },
          ...$theme.typography.LabelSmall,
        },
        props?.$override?.Root?.style,
      ])}
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

      {c()}

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
