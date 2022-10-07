import { useStyletron } from '@anthaathi/solid-styletron';
import { Breadcrumbs } from '~/Features/Core/Components/Breadcrumbs';
import {
  ProductProps,
  ProductTile,
} from '~/Features/Commerce/Components/ProductTile';
import { Grid } from '~/Features/Core/Components/Grid';
import productJson from '../../config/products';
import { createMemo, For } from 'solid-js';
import { useLocation } from '@solidjs/router';
import { SelectOption } from '~/Features/Core/Components/SelectOption';
import RecentlyViewedItems from '~/Features/Commerce/Components/RecentlyViewedItems';

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
          display: 'flex',
          [$theme.mediaQuery?.md || '']: {
            flexDirection: 'row',
          },
          flexDirection: 'column',
        })}
      >
        <div
          class={css({
            borderBottomLeftRadius: '4px',
            borderBottomRightRadius: '4px',
            borderTopRightRadius: '4px',
            borderTopLeftRadius: '4px',
            border: '1px solid #e4e4d9',
            maxHeight: '420px',
            paddingLeft: $theme.sizing.scale500,
            paddingRight: $theme.sizing.scale500,
            paddingTop: $theme.sizing.scale500,
            paddingBottom: $theme.sizing.scale500,
            [$theme.mediaQuery?.md || '']: {
              marginLeft: 0,
              marginRight: 0,
            },
            marginLeft: $theme.sizing.scale400,
            marginRight: $theme.sizing.scale400,
            flex: 3,
            [$theme.mediaQuery?.lg || '']: {
              flex: 2,
            },
            marginBottom: $theme.sizing.scale500,
          })}
        >
          <SelectOption label="Select a category" options={categoryList} />
          <RecentlyViewedItems
            title="Recently Viewed Products"
            items={productJson.featuredCollection.recentItems}
          />
        </div>
        <div
          class={css({
            flex: 8,
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
                columns={[2, 2, 3, 4]}
              >
                <For each={products()}>
                  {(product: ProductProps) => <ProductTile {...product} />}
                </For>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const categoryList = [
  {
    title: 'Special Offers',
    value: '/collections/specialoffers',
  },
  {
    title: 'Organic',
    value: '/collections/organic',
  },
  {
    title: 'Fruits',
    value: '/collections/fruits',
  },
  {
    title: 'Vegetables',
    value: '/collections/vegetables',
  },
  {
    title: 'Bulk Buy',
    value: '/collections/bulkbuy',
  },
  {
    title: 'Precut',
    value: '/collections/precut',
  },
  {
    title: 'Pre-Packed',
    value: '/collections/prepacked',
  },
  {
    title: 'Gift Corner',
    value: '/collections/giftcorner',
  },
  {
    title: 'Juices',
    value: '/collections/juices',
  },
  {
    title: 'Fresh blooms',
    value: '/collections/freshblooms',
  },
];
