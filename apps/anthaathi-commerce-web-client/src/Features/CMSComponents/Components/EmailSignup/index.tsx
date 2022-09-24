import { useStyletron } from '@anthaathi/solid-styletron';
import { Button } from '~/Features/Core/Components/Button';
import { useCssToken } from '~/Features/Core/Hooks/useCssToken';
import { Input } from '~/Features/Core/Components/Input';

export function EmailSignup() {
  const [css, $theme] = useStyletron();
  const cssVar = useCssToken();

  return (
    <div
      class={css({
        maxWidth: $theme.sizing.maxWidth,
        margin: '0 auto',
        width: '100%',
        paddingTop: $theme.sizing.scale1400,
        paddingBottom: $theme.sizing.scale1400,
        textAlign: 'center',
      })}
    >
      <h4
        class={css({
          ...$theme.typography.DisplaySmall,
          margin: 0,
          paddingBottom: $theme.sizing.scale400,
        })}
      >
        Sign up and save
      </h4>
      <h6 class={css({ ...$theme.typography.LabelLarge, margin: 0 })}>
        Subscribe to get special offers, free giveaways, and once-in-a-lifetime
        deals.
      </h6>

      <form
        action=""
        class={css({
          display: 'flex',
          placeContent: 'center',
          paddingTop: $theme.sizing.scale1400,
          paddingBottom: $theme.sizing.scale1400,
          maxWidth: '420px',
          width: '100%',
          margin: '0 auto',
        })}
      >
        <Input
          type="email"
          placeholder="Enter your email"
          $overrides={{
            Root: {
              style: {
                '--input-border-bottom-right-radius': '0',
                '--input-border-top-right-radius': '0',
              },
            },
          }}
        />
        <Button
          $override={{
            Root: {
              style: {
                borderBottomLeftRadius: '0',
                borderTopLeftRadius: '0',
              },
            },
          }}
        >
          SUBSCRIBE
        </Button>
      </form>
    </div>
  );
}
