import { useStyletron } from '@anthaathi/solid-styletron';
import { For } from 'solid-js';
import { Grid } from '~/Features/Core/Components/Grid';
import { Button, Kind, Size } from '~/Features/Core/Components/Button';
import { useCssToken } from '~/Features/Core/Hooks/useCssToken';

export interface PromotionalProductGridProps {
  products: any[];
}

export function PromotionalProductGrid(props: PromotionalProductGridProps) {
  const cssVar = useCssToken();
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        width: '100%',
      })}
    >
      <Grid
        $override={{
          Root: {
            style: {
              gridColumnGap: '5px',
              backgroundColor: cssVar(
                'promotional-product-grid-background',
                '#FEFEFE',
              ),
            },
          },
        }}
        data-type="promotional-product-grid"
        columns={[1, 1, 1, 2]}
      >
        <For each={props.products || []}>{(product) => <ProductCell />}</For>
      </Grid>
    </div>
  );
}

const ProductCell = () => {
  const [css, $theme] = useStyletron();
  const cssVar = useCssToken();

  return (
    <div
      class={css({
        display: 'flex',
        paddingTop: $theme.sizing.scale2400,
        paddingBottom: $theme.sizing.scale2400,
        paddingLeft: $theme.sizing.scale500,
        paddingRight: $theme.sizing.scale500,
      })}
    >
      <div
        class={css({
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          placeContent: 'center',
          justifyContent: 'center',
          placeItems: 'center',
        })}
      >
        <div class={css({ minWidth: 'min-content' })}>
          <h4
            class={css({
              marginTop: 0,
              marginBottom: $theme.sizing.scale400,
              ...$theme.typography.HeadingSmall,
              fontWeight: 500,
            })}
          >
            Pomegranate Pure Natural Juice
          </h4>
          <h4
            class={css({
              marginTop: 0,
              marginBottom: $theme.sizing.scale400,
              ...$theme.typography.ParagraphLarge,
            })}
          >
            100% fresh. Sourced from Netherlands.
          </h4>
          <div>
            <Button $size={Size.Large} $kind={Kind.Invert}>
              Shop
            </Button>
          </div>
        </div>
      </div>

      <div
        class={css({
          position: 'relative',
          width: '50%',
        })}
      >
        <div
          class={css({
            maxWidth: '320px',

            [$theme.mediaQuery?.lg || '']: {
              maxWidth: '520px',
            },
            width: '100%',
            position: 'relative',
          })}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0648/1303/9842/products/IMG-20220323-WA0072_540x.jpg?v=1653585761"
            alt=""
            class={css({
              width: '100%',
              height: '100%',
            })}
          />

          <div
            class={css({
              position: 'absolute',
              top: '-12px',
              right: '-12px',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 1,
            })}
          >
            <span
              class={css({
                padding: '8px 12px',
                backgroundColor: cssVar(
                  'promotional-product-grid-new-tag-background',
                  '#EEE',
                ),
              })}
            >
              New
            </span>
            <span
              class={css({
                padding: '8px 12px',
                backgroundColor: cssVar(
                  'promotional-product-grid-new-tag-background',
                  '#EEE',
                ),
                marginTop: '6px',
              })}
            >
              {Intl.NumberFormat('en-US', {
                currency: 'AED',
                style: 'currency',
              }).format(12)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
