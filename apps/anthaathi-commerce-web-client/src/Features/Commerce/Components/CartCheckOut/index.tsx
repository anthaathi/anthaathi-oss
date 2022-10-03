import { useStyletron } from '@anthaathi/solid-styletron';
import { Button } from 'solid-headless';
import { CartAddOrderNote } from '~/Features/Commerce/Components/CartAddNote';
import { CheckOutInfo } from '~/Features/Commerce/Components/CartCheckOutInfo';
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
        <CheckOutInfo name="VAT" value="Dhs. 1.1" />
        <CheckOutInfo name="Discount" value="Dhs. 0.0" />
      </div>
      <button
        class={css({
          width: '100%',
          padding: '10px',
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
      </button>
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
