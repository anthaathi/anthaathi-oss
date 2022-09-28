import { useStyletron } from '@anthaathi/solid-styletron';
import { Button, Kind } from '~/Features/Core/Components/Button';
import { Link } from '@solidjs/router';
import { Grid } from '~/Features/Core/Components/Grid';
import { For } from 'solid-js';
import { ProductTile } from '~/Features/Commerce/Components/ProductTile';

export function FeaturedCollection() {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        margin: '0 auto',
        width: $theme.sizing.maxWidth,
        maxWidth: '100%',
      })}
    >
      <div class={css({ display: 'flex', alignItems: 'center' })}>
        <h4
          class={css({
            ...$theme.typography.DisplaySmall,
          })}
        >
          In Season
        </h4>
        <span class={css({ flexGrow: 1 })} />

        <Button $as={Link} $kind={Kind.Tertiary} href="/view-all">
          View all
        </Button>
      </div>

      <Grid
        $override={{
          Root: {
            style: {
              gridGap: '28px',
              marginBottom: '12px',
            },
          },
        }}
      >
        <For each={[{}, {}, {}, {}]}>{() => <ProductTile />}</For>
      </Grid>
    </div>
  );
}
