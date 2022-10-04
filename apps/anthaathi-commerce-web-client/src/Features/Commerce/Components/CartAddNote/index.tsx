import { useStyletron } from '@anthaathi/solid-styletron';
import { createSignal, Show } from 'solid-js';
import {
  IconArrowUpLarge,
  IconPencilSquareOLarge,
} from '@anthaathi/oracle-apex-solid-icons';
import { Button, Kind } from '~/Features/Core/Components/Button';
import { useCssToken } from '~/Features/Core/Hooks/useCssToken';

export function CartAddOrderNote() {
  const [css, $theme] = useStyletron();
  const [isNoteVisible, setNoteVisibility] = createSignal(true);
  const cssVar = useCssToken();

  return (
    <div
      class={css({
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <div
        class={css({
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: $theme.sizing.scale400,
        })}
      >
        <div
          class={css({
            paddingRight: $theme.sizing.scale400,
            fontWeight: 600,
            fontSize: '17px',
          })}
        >
          Add order note
        </div>
        <span class={css({ flexGrow: 1 })} />
        <Button
          class={css({
            margin: 0,
            padding: 0,
            cursor: 'pointer',
            border: '0px none',
          })}
          $kind={Kind.Tertiary}
          $startEnhancer={() => {
            if (isNoteVisible()) {
              return <IconArrowUpLarge width="20px" height="20px" />;
            }
            return <IconPencilSquareOLarge width="20px" height="20px" />;
          }}
          onClick={() => {
            setNoteVisibility(!isNoteVisible());
          }}
        />
      </div>
      <div class={css({})}>
        <Show when={isNoteVisible()} keyed={false}>
          <textarea
            class={css([
              {
                width: '100%',
                boxSizing: 'border-box',
                minHeight: '100px',
                paddingLeft: $theme.sizing.scale300,
                paddingRight: $theme.sizing.scale300,
                paddingTop: $theme.sizing.scale400,
                paddingBottom: $theme.sizing.scale400,
                border: '1px solid #d9d9d9',
                outline: 'none',
                ':focus': {
                  border: `1px solid ${cssVar('primary-color', '#118b44')}`,
                },
              },
              $theme.typography.ParagraphLarge,
            ])}
          />
        </Show>
      </div>
    </div>
  );
}
