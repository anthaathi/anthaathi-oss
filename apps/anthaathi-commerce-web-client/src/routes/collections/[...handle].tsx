import { useStyletron } from '@anthaathi/solid-styletron';
import { Breadcrumbs } from '~/Features/Core/Components/Breadcrumbs';
import {
  ProductProps,
  ProductTile,
} from '~/Features/Commerce/Components/ProductTile';
import { Grid } from '~/Features/Core/Components/Grid';
import { Select, SelectOption } from 'solid-headless';
import productJson from '../../config/products';
import { createMemo, For } from 'solid-js';
import { useLocation } from '@solidjs/router';

export default function () {
  const [css, $theme] = useStyletron();
  const location = useLocation();
  const productList = productJson.featuredCollection.products;

  const products = createMemo(() => {
    const path = location.pathname.substring(
      location.pathname.lastIndexOf('/') + 1,
    );
    return productList.filter((item: ProductProps) => item.category === path);
  }, [productList, location.pathname]);

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
            { key: '2', title: 'Collections', link: '/collections' },
          ]}
        />
      </div>
      <div
        class={css({
          maxWidth: $theme.sizing.maxWidth,
          margin: '0 auto',
          width: `calc(100% - ${$theme.sizing.scale500} - ${$theme.sizing.scale500})`,
          paddingBottom: $theme.sizing.scale1200,
          paddingLeft: $theme.sizing.scale500,
          paddingRight: $theme.sizing.scale500,
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
                    gridGap: '15px',
                  },
                },
              }}
              columns={[2, 3, 4, 5]}
            >
              <For each={products()}>
                {(product: ProductProps) => <ProductTile {...product} />}
              </For>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
