import { useStyletron } from '@anthaathi/solid-styletron';
import { Button } from 'solid-headless';
import { CartAddOrderNote } from '~/Features/Commerce/Components/CartAddNote';
import { Link } from '@solidjs/router';
import { createEffect, createSignal, Show } from 'solid-js';
import { DiscountCouponDialog } from '~/Features/CMSComponents/Components/DiscountCouponList';
import { cartItems } from '~/Features/Cart/Components/CartItems/CartItems';

export interface CartCheckOutProps {
  subTotal?: string;
  minimal?: boolean;
}

export function CartCheckOut(props: CartCheckOutProps) {
  const [css, $theme] = useStyletron();
  const [cart] = cartItems;

  function getTotalValue() {
    return cart.reduce((prev, res) => res.numberOfItems * +res.price + prev, 0);
  }

  let [total, setTotal] = createSignal(getTotalValue());
  const [discountDialogOpen, setDiscountDialogOpen] = createSignal(false);
  const [selectedCoupon, setSelectedCoupon] = createSignal('');

  createEffect(() => {
    setTotal(getTotalValue());
  });

  return (
    <div
      class={css({
        padding: $theme.sizing.scale900,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: '#F0F0F0',
        marginTop: '12px',
      })}
    >
      <Show when={!props.minimal} keyed={true}>
        <div class={css({ marginBottom: '20px' })}>
          <CartAddOrderNote />
        </div>
      </Show>
      <div class={css({ marginBottom: props.minimal ? '0' : '20px' })}>
        <CheckOutInfo
          name="Subtotal"
          value={Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'AED',
          }).format(total())}
        />
        <CheckOutInfo
          name="Tax (5% VAT)"
          value={Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'AED',
          }).format(total() * 0.05)}
        />
        <CheckOutInfo
          name="Discount"
          value={Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'AED',
          }).format(0)}
        />
        <CheckOutInfo
          name="Shipping Charges"
          value={Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'AED',
          }).format(0)}
        />
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
            {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'AED',
            }).format(total() + total() * 0.05)}
          </div>
        </div>
        <div
          class={css({
            display: 'flex',
            flexDirection: 'row-reverse',
          })}
        >
          <Button
            onClick={() => {
              setDiscountDialogOpen(!discountDialogOpen());
            }}
            class={css({
              textAlign: 'center',
              textDecoration: 'none',
              paddingLeft: '10px',
              paddingTop: '10px',
              paddingRight: '0px',
              paddingBottom: '10px',
              color: 'green ',
              ':hover': {
                textDecoration: 'underline',
                textUnderlineOffset: '12px',
              },
              backgroundColor: 'none',
              lineHeight: '1.42',
              fontSize: '18px',
              fontWeight: 700,
              cursor: 'pointer',
              border: 'none',
            })}
          >
            {selectedCoupon() == '' ? 'Apply Coupon' : 'Coupon Applied !'}
          </Button>
          <DiscountCouponDialog
            isOpen={discountDialogOpen}
            setOpen={setDiscountDialogOpen}
            setSelectedCoupon={setSelectedCoupon}
          />
        </div>
      </div>
      <Show when={!props.minimal} keyed={false}>
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
            backgroundColor: '#108a43',
            lineHeight: '1.42',
            fontSize: '18px',
            fontWeight: 700,
            cursor: 'pointer',
            marginBottom: '20px',
            border: '1px solid #108a43',
          })}
        >
          Checkout
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
            textAlign: 'center',
            fontSize: '.85em',
            marginBottom: '30px',
            fontWeight: 400,
          })}
        >
          Terms and condition applied
        </p>
      </Show>
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
