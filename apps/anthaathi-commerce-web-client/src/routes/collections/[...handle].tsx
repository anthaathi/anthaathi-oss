import { useStyletron } from '@anthaathi/solid-styletron';
import { Breadcrumbs } from '~/Features/Core/Components/Breadcrumbs';
import { RenderForm } from '~/Features/DynamicForm';
import { ProductTile } from '~/Features/Commerce/Components/ProductTile';
import { Grid } from '~/Features/Core/Components/Grid';
import { Select, SelectOption } from 'solid-headless';

export default function () {
  const [css, $theme] = useStyletron();

  return (
    <>
      <div
        class={css({
          display: 'flex',
        })}
      >
        <Breadcrumbs
          list={[
            { key: '1', title: 'Home', link: '/' },
            { key: '2', title: 'Collections', link: '/' },
          ]}
          extraChild={() => (
            <Select defaultValue="">
              <SelectOption value="">Hello world</SelectOption>
              <SelectOption value="">Hello worldq</SelectOption>
            </Select>
          )}
        />
      </div>
      <div
        class={css({
          maxWidth: $theme.sizing.maxWidth,
          margin: '0 auto',
          width: '100%',
          paddingBottom: $theme.sizing.scale1200,
        })}
      >
        <div
          class={css({
            display: 'flex',
          })}
        >
          <div
            class={css({
              flexGrow: 1,
              [$theme.mediaQuery?.md ?? '']: {
                width: 'calc(100% - 320px)',
              },
            })}
          >
            <Grid
              $override={{
                Root: {
                  style: {
                    gridGap: '12px',
                  },
                },
              }}
              columns={[2, 2, 2, 4]}
            >
              <ProductTile />
              <ProductTile />
              <ProductTile />
              <ProductTile />
              <ProductTile />
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
