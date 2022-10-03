import { useStyletron } from '@anthaathi/solid-styletron';
import { CartItem, CartItems } from '~/Features/Commerce/Components/CartItem';
import { CartCheckOut } from '~/Features/Commerce/Components/CartCheckOut';

export default () => {
  return <CartPage />;
};

function CartPage() {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        margin: '0 auto',
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
          <CartItem {...CartItems[0]} />
          <CartItem {...CartItems[1]} />
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
