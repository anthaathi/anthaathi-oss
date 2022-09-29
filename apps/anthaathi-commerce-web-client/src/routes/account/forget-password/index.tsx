import { useStyletron } from '@anthaathi/solid-styletron';
import { useCssToken } from '~/Features/Core/Hooks/useCssToken';
import { FormControl } from '~/Features/Core/Components/FormControl';
import { Input } from '~/Features/Core/Components/Input';
import { Button, Kind, Size } from '~/Features/Core/Components/Button';
import { Link } from '@solidjs/router';

export default function ForgetPassword() {
  const [css, $theme] = useStyletron();
  const cssVar = useCssToken();

  return (
    <>
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
          <Link href="/account/login" class={css({ color: '#000' })}>
            {'<'} Back to login
          </Link>
          <h1
            class={css({
              marginLeft: 0,
              marginRight: 0,
              marginBottom: $theme.sizing.scale800,
            })}
          >
            Forget password
          </h1>

          <FormControl for="emailOrPhone" label="Email">
            <Input
              type="text"
              id="emailOrPhone"
              width="100%"
              $overrides={{
                Root: { style: { width: '100%' } },
              }}
            />
          </FormControl>

          <div class={css({ display: 'flex' })}>
            <Button
              $kind={Kind.Secondary}
              $size={Size.Medium}
              $fullWidth={true}
              $override={{
                Root: {
                  style: {
                    background: cssVar(
                      'button-invert-background-color',
                      '#000',
                    ),
                    color: cssVar('button-invert-color', '#FFF'),
                  },
                },
              }}
            >
              Send Recovery Instructions
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
