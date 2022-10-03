import { useStyletron } from '@anthaathi/solid-styletron';
import { CartQuantityChange } from '~/Features/Commerce/Components/CartQuantityChange';
import { Img } from '~/Features/Core/Components/Image';
import { Button, Kind, Size } from '~/Features/Core/Components/Button';
import { Link } from '@solidjs/router';

interface CartItemProps {
  imgSrc: string;
  name: string;
  quantity: number;
  price: string;
}

export function CartItem(props: CartItemProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        display: 'flex',
        height: '105px',
        flexDirection: 'row',
        borderBottom: '1px solid #d9d9d9',
        paddingBottom: '20px',
        marginBottom: '20px',
      })}
    >
      <div
        class={css({
          flex: 4,
          width: '150px',
          minWidth: '100px',
          maxWidth: '150px',
        })}
      >
        <Img
          src={props.imgSrc}
          $override={{
              Root: {
                  $style: {
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      border: '1px solid #e4e4d9',
                  },
              },
          }}
        />
      </div>
      <div
        class={css({
          display: 'flex',
          flex: 6,
          marginLeft: $theme.sizing.scale600,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          lineHeight: '1.5',
          letterSpacing: '0.05em',
        })}
      >
        <div
          class={css({
            ...$theme.typography.HeadingXSmall,
            paddingBottom: $theme.sizing.scale400,
          })}
        >
          {props.name}
        </div>
        <div
          class={css({
            ...$theme.typography.LabelMedium,
            paddingBottom: $theme.sizing.scale400,
            marginTop: 0,
            marginBottom: $theme.sizing.scale100,
          })}
        >
          {'Dhs. 12.00 / Piece'}
        </div>

        <div
          class={css({
            paddingBottom: $theme.sizing.scale400,
            display: 'flex',
          })}
        >
          <CartQuantityChange />
          <Button
            $kind={Kind.Tertiary}
            $size={Size.Medium}
            $override={{
              Root: {
                style: {
                  marginLeft: $theme.sizing.scale500,
                },
              },
            }}
          >
            Remove
          </Button>
        </div>
      </div>
      <div
        class={css({
          flex: 8,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        })}
      >
        <div
          class={css({
            marginRight: $theme.sizing.scale700,
            fontSize: '18px',
            fontWeight: 700,
          })}
        >
          {props.price}
        </div>
      </div>
    </div>
  );
}

export const CartItems: CartItemProps[] = [
  {
    name: 'Cucumber',
    imgSrc:
      'https://cdn.shopify.com/s/files/1/0648/1303/9842/products/Cucumber-1_ffc54c42-5ffe-4209-9e55-d9ff2fa729ad_360x.jpg?v=1653583119',
    quantity: 1,
    price: 'Dhs. 5.52',
  },
  {
    name: 'Capsicum Mixed - 3 Color',
    imgSrc:
      'https://cdn.shopify.com/s/files/1/0648/1303/9842/products/Capsicum_Mixed_-_3_Color-1_360x.jpg?v=1653582153',
    quantity: 2,
    price: 'Dhs. 5.00',
  },
];
