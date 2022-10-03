import { useStyletron } from '@anthaathi/solid-styletron';
import { For } from 'solid-js';
import { useCssToken } from '../../Hooks/useCssToken';

export function SelectOption(props: {
  label: string;
  options: { title: string; value: string }[];
}) {
  const [css, $theme] = useStyletron();
  const cssVar = useCssToken();

  return (
    <div>
      <p
        class={css({
          ...$theme.typography.LabelMedium,
          fontWeight: 'bold',
          color: '#000',
          marginTop: $theme.sizing.scale500,
          marginBottom: $theme.sizing.scale300,
        })}
      >
        {props.label}
      </p>
      <select
        name="reason"
        id="reason"
        class={css({
          ...$theme.typography.ParagraphMedium,
          outline: 'none',
          backgroundColor: '#efefef',
          width: '100%',
          height: '48px',
          borderRadius: '4px',
          borderStyle: 'solid',
          paddingLeft: $theme.sizing.scale400,
          paddingRight: $theme.sizing.scale400,
          borderTopWidth: cssVar('input-border-top-width', '2px'),
          borderBottomWidth: cssVar('input-border-top-width', '2px'),
          borderLeftWidth: cssVar('input-border-top-width', '2px'),
          borderRightWidth: cssVar('input-border-top-width', '2px'),
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
        })}
      >
        <For each={props.options}>
          {(item, i) => (
            <option value={item.value}>
              {/* <p
                class={css({
                //   ...$theme.typography.ParagraphSmall,
                  paddingLeft: $theme.sizing.scale400,
                  paddingRight: $theme.sizing.scale400,
                  paddingTop: $theme.sizing.scale400,
                  paddingBottom: $theme.sizing.scale400,
                  backgroundColor: 'red',
                })}
              > */}
                {item.title}
              {/* </p> */}
            </option>
          )}
        </For>
      </select>
    </div>
  );
}
