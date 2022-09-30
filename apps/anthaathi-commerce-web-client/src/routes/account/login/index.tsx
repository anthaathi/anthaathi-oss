import { Input } from '~/Features/Core/Components/Input';
import { useStyletron } from '@anthaathi/solid-styletron';
import { useCssToken } from '~/Features/Core/Hooks/useCssToken';
import { FormControl } from '~/Features/Core/Components/FormControl';
import { Link } from '@solidjs/router';
import { Button, Kind, Size } from '~/Features/Core/Components/Button';

export default function Login() {
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
          <h1
            class={css({
              marginLeft: 0,
              marginRight: 0,
              marginBottom: $theme.sizing.scale800,
            })}
          >
            Login
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

          <FormControl
            for="password"
            label="Password"
            extraLabelContent={() => (
              <Link
                class={css({
                  textDecoration: 'none',
                  color: cssVar('primary-b-color', '#000'),
                  ...$theme.typography.LabelSmall,
                })}
                href="/account/forget-password"
              >
                Forget password?
              </Link>
            )}
          >
            <Input
              type="password"
              id="password"
              width="100%"
              $overrides={{
                Root: { style: { width: '100%' } },
              }}
            />
          </FormControl>

          <div class={css({ paddingTop: '12px' })} />

          <Button
            $kind={Kind.Secondary}
            $size={Size.Medium}
            $fullWidth={true}
            $override={{
              Root: {
                style: {
                  background: cssVar('button-invert-background-color', '#000'),
                  color: cssVar('button-invert-color', '#FFF'),
                },
              },
            }}
          >
            Login
          </Button>

          <div class={css({ paddingTop: '12px' })} />

          <Button
            $kind={Kind.Secondary}
            $fullWidth={true}
            $size={Size.Medium}
            $as={Link}
            href="/account/create-account"
          >
            Create Account
          </Button>
        </div>
      </form>
    </>
  );
}
