import { useStyletron } from '@anthaathi/solid-styletron';
import { useCssToken } from '~/Features/Core/Hooks/useCssToken';
import { RenderForm } from '~/Features/DynamicForm';
import { NoHydration } from 'solid-js/web';

export default function CreateAccount() {
  const [css, $theme] = useStyletron();
  const cssVar = useCssToken();

  return (
    <NoHydration>
      <form
        class={css({
          maxWidth: $theme.sizing.maxWidth,
          margin: '0 auto',
          paddingTop: $theme.sizing.scale800,
          paddingBottom: $theme.sizing.scale800,
        })}
      >
        <div
          class={css({
            backgroundColor: cssVar('login-background-color', '#FEFEFE'),
            padding: $theme.sizing.scale800,
            maxWidth: '440px',
            margin: '0 auto',
          })}
        >
          <RenderForm
            body={[
              {
                type: 'input',
                id: 'username',
                label: 'Email / Phone',
              },
              {
                type: 'input',
                attributes: {
                  type: 'password',
                },
                label: 'Password',
                id: 'password',
              },
            ]}
            id="registration"
          />
        </div>
      </form>
    </NoHydration>
  );
}
