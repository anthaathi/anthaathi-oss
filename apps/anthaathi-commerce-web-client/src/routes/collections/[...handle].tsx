import { useStyletron } from '@anthaathi/solid-styletron';
import { Breadcrumbs } from '~/Features/Core/Components/Breadcrumbs';
import {
  ProductProps,
  ProductTile,
} from '~/Features/Commerce/Components/ProductTile';
import { Grid } from '~/Features/Core/Components/Grid';
import productJson from '../../config/products';
import { createMemo, createSignal, For, Show } from 'solid-js';
import { useLocation, useParams, useRouteData } from '@solidjs/router';
import { SelectOption } from '~/Features/Core/Components/SelectOption';
import RecentlyViewedItems from '~/Features/Commerce/Components/RecentlyViewedItems';
import { Button, Kind, Size } from '~/Features/Core/Components/Button';
import { IconSlidersLarge } from '@anthaathi/oracle-apex-solid-icons';
import { CategoryList } from '~/Features/CMSComponents/Components/CategoryList';
import { RouteDataArgs } from 'solid-start';

export const routeData = ({ params }: RouteDataArgs) => {
  const productList = () =>
    productJson.featuredCollection.products.filter(
      (item: ProductProps) => item.category === params.handle,
    );

  const categoryName = () =>
    categoryList[
      categoryList.findIndex(
        (item) =>
          item.value.substring(item.value.lastIndexOf('/') + 1) ===
          params.handle,
      )
    ].title;

  return { productList: productList, categoryName: categoryName };
};

export default function () {
  const { productList, categoryName } = useRouteData<typeof routeData>();
  const [css, $theme] = useStyletron();
  const [showFilter, setShowFilter] = createSignal(false);

  return (
    <>
      <div
        class={css({
          display: 'flex',
          marginTop: $theme.sizing.scale500,
          marginBottom: $theme.sizing.scale500,
        })}
        data-type="plp-page"
      >
        <Breadcrumbs
          list={[
            { key: '1', title: 'Home', link: '/' },
            { key: '2', title: 'Collections', link: '/collections' },
            {
              key: '3',
              title: categoryName(),
              link: '#',
            },
          ]}
        />
        <Button
          $override={{
            Root: {
              style: {
                [$theme.mediaQuery?.md || '']: {
                  display: 'none',
                },
                display: 'block',
                paddingLeft: '10px',
                paddingRight: '10px',
                paddingTop: '10px',
                paddingBottom: '10px',
                borderTopRightRadius: '4px',
                borderTopLeftRadius: '4px',
                borderBottomLeftRadius: '4px',
                borderBottomRightRadius: '4px',
                marginRight: $theme.sizing.scale500,
                border: '1px solid #e4e4d9',
                ':hover': {
                  background: '#E5E5EA',
                },
              },
            },
          }}
          onClick={() => {
            setShowFilter(!showFilter());
          }}
          $size={Size.Mini}
          $kind={Kind.Secondary}
          $startEnhancer={() => <IconSlidersLarge width="20px" height="20px" />}
        />
      </div>
      <div
        class={css({
          maxWidth: $theme.sizing.maxWidth,
          margin: '0 auto',
          width: `calc(100% - ${$theme.sizing.scale500} - ${$theme.sizing.scale500})`,
        })}
      >
        <CategoryList
          items={[
            {
              id: 1,
              href: '/collections/fruits',
              title: 'Fruits',
              title_ar: 'الفاكهة',
              key: 'fruits',
              image:
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_900x.jpg?v=1653586970',
            },
            {
              id: 2,
              href: '/collections/vegetables',
              title: 'Vegetables',
              title_ar: 'خضروات',
              key: 'vegetables',
              image:
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_900x.jpg?v=1653677616',
            },
            {
              id: 3,
              href: '/collections/bulkbuy',
              title: 'Bulk Buy',
              title_ar: 'شراء بالجملة',
              key: 'bulkbuy',
              image:
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_900x.jpg?v=1653677196',
            },
            {
              id: 4,
              href: '/collections/organic',
              title: 'Organic',
              title_ar: 'عضوي',
              key: 'organic',
              image:
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_900x.jpg?v=1653586970',
            },
            {
              id: 5,
              href: '/collections/precut',
              title: 'Pre-Cut',
              title_ar: 'قص مسبق',
              key: 'precut',
              image:
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_900x.jpg?v=1653677616',
            },
            {
              id: 6,
              href: '/collections/prepacked',
              title: 'Pre-Packed',
              title_ar: 'معبأة مسبقا',
              key: 'prepacked',
              image:
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_900x.jpg?v=1653677196',
            },
            {
              id: 7,
              href: '/collections/giftcorner',
              title: 'Gift Corner',
              title_ar: 'ركن الهدايا',
              key: 'giftcorner',
              image:
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_900x.jpg?v=1653586970',
            },
            {
              id: 8,
              href: '/collections/juices',
              title: 'Juices',
              title_ar: 'عصائر',
              key: 'juices',
              image:
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_900x.jpg?v=1653677616',
            },
            {
              id: 9,
              href: '/collections/freshblooms',
              title: 'Fresh Blooms',
              title_ar: 'أزهار منعشة',
              key: 'freshblooms',
              image:
                'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_900x.jpg?v=1653677196',
            },
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
          data-type="filter-container"
          class={css({
            [$theme.mediaQuery?.md || '']: {
              display: 'block',
              flexShrink: 0,
              width: '25%',
            },
            display: 'none',
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
            flexGrow: 3,
            flexShrink: 1,
            [$theme.mediaQuery?.lg || '']: {
              flexGrow: 2,
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
            [$theme.mediaQuery?.md || '']: {
              flexShrink: 0,
              width: '25%',
            },
          })}
        >
          <SideBarFilter platform="web" />
        </div>
        <Show keyed={true} when={showFilter()} fallback={<></>}>
          <SideBarFilter platform="mobile" />
        </Show>
        <div
          class={css({
            [$theme.mediaQuery?.md || '']: {
              flexShrink: 0,
              width: '75%',
            },
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
                  flexWrap: 'wrap',
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
                <For each={productList()}>
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

const SideBarFilter = (props: { platform: 'mobile' | 'web' }) => {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        [$theme.mediaQuery?.md || '']: {
          display: props.platform === 'web' ? 'block' : 'none',
        },
        display: props.platform === 'web' ? 'none' : 'block',
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
    </div>
  );
};

export const categoryList = [
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
