import {
  useResponsiveStyletron,
  useStyletron,
} from '@anthaathi/solid-styletron';
import { Button, Kind } from '~/Features/Core/Components/Button';
import { Grid } from '~/Features/Core/Components/Grid';
import { Img } from '~/Features/Core/Components/Image';
import { Link } from '@solidjs/router';

export function PromoGrid() {
  const [css, $theme] = useStyletron();

  return (
    <Grid
      $override={{
        Root: {
          style: {
            maxWidth: $theme.sizing.maxWidth,
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: $theme.sizing.scale800,
            paddingBottom: $theme.sizing.scale800,
            paddingLeft: $theme.sizing.scale500,
            paddingRight: $theme.sizing.scale500,
            gridRowGap: '24px',
            gridColumnGap: '24px',
          },
        },
      }}
      columns={[1, 2, 3, 3]}
    >
      <PromoGridCell
        srsSet={[
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_180x.jpg?v=1653586970 180w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_360x.jpg?v=1653586970 360w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_540x.jpg?v=1653586970 540w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_720x.jpg?v=1653586970 720w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_900x.jpg?v=1653586970 900w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_1080x.jpg?v=1653586970 1080w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_1296x.jpg?v=1653586970 1296w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_1512x.jpg?v=1653586970 1512w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_1728x.jpg?v=1653586970 1728w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_1944x.jpg?v=1653586970 1944w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_2160x.jpg?v=1653586970 2160w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_2376x.jpg?v=1653586970 2376w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_2592x.jpg?v=1653586970 2592w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_2808x.jpg?v=1653586970 2808w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_3024x.jpg?v=1653586970 3024w',
        ]}
        sizes="448px"
        src="//cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_300x.jpg?v=1653586970"
        alt=""
        title="Fruits"
      />
      <PromoGridCell
        src="//cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_300x.jpg?v=1653677616"
        srsSet={[
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_180x.jpg?v=1653677616 180w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_360x.jpg?v=1653677616 360w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_540x.jpg?v=1653677616 540w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_720x.jpg?v=1653677616 720w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_900x.jpg?v=1653677616 900w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_1080x.jpg?v=1653677616 1080w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_1296x.jpg?v=1653677616 1296w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_1512x.jpg?v=1653677616 1512w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_1728x.jpg?v=1653677616 1728w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_1944x.jpg?v=1653677616 1944w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_2160x.jpg?v=1653677616 2160w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_2376x.jpg?v=1653677616 2376w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_2592x.jpg?v=1653677616 2592w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_2808x.jpg?v=1653677616 2808w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_3024x.jpg?v=1653677616 3024w',
        ]}
        sizes="448px"
        alt=""
        title="Vegetables"
      />
      <PromoGridCell
        title="Pre-Packed"
        src="//cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_300x.jpg?v=1653677196"
        srsSet={[
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_180x.jpg?v=1653677196 180w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_360x.jpg?v=1653677196 360w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_540x.jpg?v=1653677196 540w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_720x.jpg?v=1653677196 720w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_900x.jpg?v=1653677196 900w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_1080x.jpg?v=1653677196 1080w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_1296x.jpg?v=1653677196 1296w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_1512x.jpg?v=1653677196 1512w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_1728x.jpg?v=1653677196 1728w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_1944x.jpg?v=1653677196 1944w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_2160x.jpg?v=1653677196 2160w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_2376x.jpg?v=1653677196 2376w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_2592x.jpg?v=1653677196 2592w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_2808x.jpg?v=1653677196 2808w',
          '//cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_3024x.jpg?v=1653677196 3024w',
        ]}
        sizes="448px"
        alt=""
      />
    </Grid>
  );
}

export interface PromoGridCellProps {
  src: string;
  srsSet: string[];
  sizes: string;
  alt: string;
  title: string;
}

export function PromoGridCell(props: PromoGridCellProps) {
  const [css, $theme] = useStyletron();
  const [css$] = useResponsiveStyletron();
  const srcSet = props.srsSet.join(', ');

  return (
    <Link href="/collections/test">
      <div
        class={css$({
          width: '100%',
          height: ['220px', '280px', '320px'],
          maxHeight: '100%',
          display: 'flex',
          alignItems: 'center',
          placeContent: 'center',
          flexDirection: 'column',
          position: 'relative',
        })}
      >
        <div
          class={css({
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          })}
        >
          <Img
            src={props.src}
            class={css({
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            })}
            alt={props.alt}
            data-srcset={srcSet}
            sizes={props.sizes}
            srcSet={srcSet}
          />
        </div>
        <div
          class={css({
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            placeContent: 'center',
            flexDirection: 'column',
          })}
        >
          <h1 class={css([{ color: '#FFF' }, $theme.typography.DisplaySmall])}>
            {props.title}
          </h1>
          <Button $kind={Kind.Secondary}>Shop this</Button>
        </div>
      </div>
    </Link>
  );
}
