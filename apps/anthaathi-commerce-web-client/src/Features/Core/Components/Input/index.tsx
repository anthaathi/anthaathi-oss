import { useStyletron } from '@anthaathi/solid-styletron';
import { createSignal, JSX } from 'solid-js';
import { useCssToken } from '~/Features/Core/Hooks/useCssToken';
import { filterProps } from '~/Features/Core/Utills/filterProps';
import { StyleObject } from 'styletron-standard';

export interface InputProps {
  $overrides?: {
    Root?: {
      style?: StyleObject;
    };
    Input?: {
      style?: StyleObject;
    };
  };
}

export function Input(
  props: JSX.InputHTMLAttributes<HTMLInputElement> & InputProps,
) {
  const [css, $theme] = useStyletron();
  const cssVar = useCssToken();
  const [hasFocus, setFocus] = createSignal(false);

  return (
    <div>
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        class={css([
          {
            outline: 'none',
            backgroundColor: cssVar('primary-color-b', '#EFEFEF'),
            ...$theme.typography.LabelMedium,
            flexGrow: 1,
            height: '100%',
            borderTopRightRadius: cssVar(
              'input-border-top-right-radius',
              '4px',
            ),
            borderTopLeftRadius: cssVar('input-border-top-left-radius', '4px'),
            borderBottomRightRadius: cssVar(
              'input-border-bottom-right-radius',
              '4px',
            ),
            borderBottomLeftRadius: cssVar(
              'input-border-bottom-left-radius',
              '4px',
            ),
            borderTopWidth: cssVar('input-border-top-width', '2px'),
            borderBottomWidth: cssVar('input-border-top-width', '2px'),
            borderLeftWidth: cssVar('input-border-top-width', '2px'),
            borderRightWidth: cssVar('input-border-top-width', '2px'),
            borderStyle: 'solid',
            paddingLeft: $theme.sizing.scale600,
            paddingRight: $theme.sizing.scale600,
            borderTopColor: cssVar(
              'input-border-top-color',
              cssVar('primary-color-b', '#EFEFEF'),
            ),
            borderBottomColor: cssVar(
              'input-border-top-color',
              cssVar('primary-color-b', '#EFEFEF'),
            ),
            borderLeftColor: cssVar(
              'input-border-top-color',
              cssVar('primary-color-b', '#EFEFEF'),
            ),
            borderRightColor: cssVar(
              'input-border-top-color',
              cssVar('primary-color-b', '#EFEFEF'),
            ),
            lineHeight: '34px',
            ':focus': {
              borderTopColor: cssVar(
                'input-border-focus-top-color',
                cssVar('primary-color', '#118b44'),
              ),
              borderBottomColor: cssVar(
                'input-border-focus-bottom-color',
                cssVar('primary-color', '#118b44'),
              ),
              borderLeftColor: cssVar(
                'input-border-focus-left-color',
                cssVar('primary-color', '#118b44'),
              ),
              borderRightColor: cssVar(
                'input-border-focus-right-color',
                cssVar('primary-color', '#118b44'),
              ),
            },
          },
          props?.$overrides?.Input?.style,
        ])}
        {...filterProps(props)}
      />
    </div>
  );
}
