import {
  useResponsiveStyletron,
  useStyletron,
} from '@anthaathi/solid-styletron';
import { Button, Kind } from '~/Features/Core/Components/Button';
import { Grid } from '~/Features/Core/Components/Grid';
import { Img } from '~/Features/Core/Components/Image';
import { Link } from '@solidjs/router';
import { Responsive } from '~/utils/common';
import { Property } from 'csstype';
import { For } from 'solid-js';

export interface PromoThings {
  srsSet: string[];
  sizes: string;
  src: string;
  alt: string;
  title: string;
  href: string;
}

const Data: PromoThings[] = [
  {
    srsSet: [
      'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/image-fruit_256x256_crop_center.png?v=1653650751',
    ],
    sizes: '448px',
    src: '//cdn.shopify.com/s/files/1/0648/1303/9842/files/a-papaya-is-surrounded-by-fruit-on-yellow-background_300x.jpg?v=1653586970',
    alt: '',
    href: 'specialoffers',
    title: 'Fruits',
  },
  {
    srsSet: [
      'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/image-vegetable_256x256_crop_center.png?v=1653650884',
    ],
    sizes: '448px',
    alt: '',
    href: 'vegetables',
    title: 'Vegetables',
    src: '//cdn.shopify.com/s/files/1/0648/1303/9842/files/fresh-vegetables-flatlay_300x.jpg?v=1653677616',
  },
  {
    title: 'Pre-Packed',
    src: '//cdn.shopify.com/s/files/1/0648/1303/9842/files/basket-of-fresh-picked-apple_300x.jpg?v=1653677196',
    srsSet: [
      'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/image-prepacked_256x256_crop_center.png?v=1653650902',
    ],
    sizes: '448px',
    alt: '',
    href: 'prepacked',
  },
];

export function PromoGrid({ shape, size }: { shape?: Shape; size?: Size }) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        maxWidth: $theme.sizing.maxWidth,
        margin: '0 auto',
        width: `calc(100% - ${$theme.sizing.scale500} - ${$theme.sizing.scale500})`,
      })}
    >
      <Grid
        $override={{
          Root: {
            style: {
              maxWidth: $theme.sizing.maxWidth,
              marginLeft: 'auto',
              marginRight: 'auto',
              // paddingTop: $theme.sizing.scale800,
              // paddingBottom: $theme.sizing.scale800,
              // paddingLeft: $theme.sizing.scale500,
              // paddingRight: $theme.sizing.scale500,
              gridRowGap: '8px',
              gridColumnGap: '24px',
            },
          },
        }}
        columns={[1, 2, 3, 3]}
      >
        <For each={Data}>
          {(product) => (
            <PromoGridCell $size={size} $shape={shape} {...product} />
          )}
        </For>
      </Grid>
    </div>
  );
}

export interface PromoGridCellProps {
  src: string;
  srsSet: string[];
  sizes: string;
  alt: string;
  href: string;
  title: string;
  $shape?: Shape;
  $size?: Size;
}

export enum Shape {
  Default = 'default',
  Circle = 'circle',
}

export enum Size {
  Default = 'default',
  Mini = 'mini',
}

export function PromoGridCell(props: PromoGridCellProps) {
  const [css, $theme] = useStyletron();
  const [css$] = useResponsiveStyletron();
  const srcSet = props.srsSet.join(', ');

  let heightWidth: (Property.Width | undefined)[];

  switch (props.$size) {
    case Size.Mini:
      heightWidth = ['180px', '180px', '220px'];
      break;
    default:
      heightWidth = ['140px', '180px', '240px'];
  }

  return (
    <Link
      href={`/collections/${props.href}`}
      class={css({
        display: 'flex',
        alignItems: 'center',
        placeContent: 'center',
      })}
    >
      <div
        class={css$({
          height: heightWidth as never,
          width:
            props.$shape === Shape.Circle ? (heightWidth as never) : '100%',
          maxHeight: '100%',
          display: 'flex',
          alignItems: 'center',
          placeContent: 'center',
          flexDirection: 'column',
          position: 'relative',
          borderRadius: props.$shape === Shape.Circle ? '50%' : '0',
        })}
      >
        <Img
          src={props.src}
          $override={{
            Root: {
              $style: {
                objectFit: 'contain',
                width: '100%',
                height: '100%',
                borderRadius: props.$shape === Shape.Circle ? '50%' : '0',
                ':hover': {
                  animation: 'fade-in-show .4s',
                  transform: 'scale3d(1.01, 1.01, 1.01)',
                },
              },
            },
          }}
          alt={props.alt}
          data-srcset={srcSet}
          sizes={props.sizes}
          srcSet={srcSet}
        />
      </div>
    </Link>
  );
}
