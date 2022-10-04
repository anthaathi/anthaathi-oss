import type { JSX } from 'solid-js';
import { useStyletron } from '@anthaathi/solid-styletron';
import { StyleObject } from 'styletron-standard';

export interface FormControlProps {
  label: JSX.Element;
  for: string;
  children: JSX.Element;
  extraLabelContent?: JSX.Element;
  $override?: {
    Root?: {
      $style?: StyleObject;
    };
  };
}

export function FormControl(props: FormControlProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css([
        {
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: $theme.sizing.scale600,
        },
        props.$override?.Root?.$style,
      ])}
    >
      <div class={css({ display: 'flex' })}>
        <label
          class={css({
            ...$theme.typography.LabelMedium,
          })}
          for={props.for}
        >
          {props.label}
        </label>

        <span class={css({ flexGrow: 1 })} />

        {props.extraLabelContent}
      </div>
      <div
        class={css({
          paddingTop: $theme.sizing.scale400,
        })}
      >
        {props.children}
      </div>
    </div>
  );
}
