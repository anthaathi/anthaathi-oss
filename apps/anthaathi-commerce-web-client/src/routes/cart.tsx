import { useStyletron } from '@anthaathi/solid-styletron';
import { CartItem } from '~/Features/Commerce/Components/CartItem';
import { CartCheckOut } from '~/Features/Commerce/Components/CartCheckOut';
import { For } from 'solid-js';

export default () => {
  return <CartPage />;
};

function CartPage() {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        marginLeft: 'auto',
        marginRight: 'auto',
        width: $theme.sizing.maxWidth,
        maxWidth: `calc(100% - ${$theme.sizing.scale500} - ${$theme.sizing.scale500})`,
        paddingLeft: $theme.sizing.scale500,
        paddingRight: $theme.sizing.scale500,
        marginTop: $theme.sizing.scale1000,
        marginBottom: $theme.sizing.scale1000,
      })}
    >
      <div
        class={css({
          ...$theme.typography.HeadingLarge,
          fontSize: '36px',
          textAlign: 'center',
          paddingLeft: $theme.sizing.scale1000,
          paddingRight: $theme.sizing.scale1000,
          paddingTop: $theme.sizing.scale900,
          paddingBottom: $theme.sizing.scale1200,
        })}
      >
        Cart
      </div>
      <div
        class={css({
          display: 'flex',
          flexDirection: 'column',
          [$theme.mediaQuery?.md || '']: {
            flexDirection: 'row',
          },
        })}
      >
        <div
          class={css({
            flex: 6.5,
            [$theme.mediaQuery?.md || '']: {
              flexDirection: 'row',
            },
          })}
        >
          <For each={CartItems}>{(item) => <CartItem {...item} />}</For>
        </div>
        <div
          class={css({
            flex: 0.5,
          })}
        ></div>
        <div
          class={css({
            flex: 3.5,
          })}
        >
          <CartCheckOut subTotal={'10 Dhr'} />
        </div>
      </div>
    </div>
  );
}

const CartItems = [
  {
    id: 1,
    name: 'Baby Yellow Pepper',
    image:
      'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
    key: '12',
    price: 12,
    numberOfItems: 2,
    currency: 'AED',
    weight_unit: 'KG',
    packaging: '500 gms',
  },
  {
    id: 2,
    name: 'Capsicum mixed',
    image:
      'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
    key: '23',
    price: 23,
    numberOfItems: 2,
    currency: 'AED',
    weight_unit: 'KG',
    packaging: '500 gms',
  },
];
