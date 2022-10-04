import { useStyletron } from '@anthaathi/solid-styletron';
import { Button } from 'solid-headless';
import { CartAddOrderNote } from '~/Features/Commerce/Components/CartAddNote';
import { Kind } from '~/Features/Core/Components/Button';
import { Link } from '@solidjs/router';

export interface CartCheckOutProps {
  subTotal: string;
}

export function CartCheckOut(props: CartCheckOutProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        padding: $theme.sizing.scale900,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: '#F0F0F0',
      })}
    >
      <div class={css({ marginBottom: '20px' })}>
        <CartAddOrderNote />
      </div>
      <div class={css({ marginBottom: '20px' })}>
        <CheckOutInfo name="Subtotal" value="Dhs. 10.52" />
        <CheckOutInfo name="Tax (5% VAT)" value="Dhs. 0.52" />
        <CheckOutInfo name="Discount" value="Dhs. 0.0" />
        <CheckOutInfo name="Shipping Charges" value="Dhs. 0.0" />
        <div
          class={css({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: $theme.sizing.scale400,
          })}
        >
          <div
            class={css({
              fontSize: '18px',
              fontWeight: 700,
            })}
          >
            Total
          </div>
          <div
            class={css({
              fontSize: '18px',
              fontWeight: 700,
              color: '#008D3E',
            })}
          >
            Dhs. 11.04
          </div>
        </div>
      </div>
      <Button
        as={Link}
        href="/checkout"
        class={css({
          textAlign: 'center',
          textDecoration: 'none',
          width: 'calc(100% - 20px)',
          paddingLeft: '10px',
          paddingTop: '10px',
          paddingRight: '10px',
          paddingBottom: '10px',
          color: '#ffffff',
          backgroundColor: '#272b42',
          lineHeight: '1.42',
          fontSize: '18px',
          fontWeight: 700,
          cursor: 'pointer',
          marginBottom: '20px',
          border: '1px solid #000000',
        })}
      >
        Check Out
      </Button>
      <Button
        as={Link}
        href="/collections"
        class={css({
          width: 'calc(100% - 20px)',
          textAlign: 'center',
          textDecoration: 'none',
          paddingLeft: '10px',
          paddingTop: '10px',
          paddingRight: '10px',
          paddingBottom: '10px',
          color: 'black',
          backgroundColor: '#ffffff',
          lineHeight: '1.42',
          fontSize: '18px',
          fontWeight: 600,
          cursor: 'pointer',
          marginBottom: '20px',
          border: '1px solid #272b42',
        })}
      >
        Continue Shopping
      </Button>
      <p
        class={css({
          marginBottom: $theme.sizing.scale400,
          textAlign: 'center',
          fontSize: '.85em',
          fontWeight: 400,
        })}
      >
        Terms and condition applied
      </p>
    </div>
  );
}

export function CheckOutInfo(props: { name: string; value: string }) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: $theme.sizing.scale400,
      })}
    >
      <div
        class={css({
          fontSize: '18px',
          fontWeight: 500,
        })}
      >
        {props.name}
      </div>
      <div
        class={css({
          fontSize: '18px',
          fontWeight: 500,
        })}
      >
        {props.value}
      </div>
    </div>
  );
}
