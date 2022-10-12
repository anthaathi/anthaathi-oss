import { useStyletron } from '@anthaathi/solid-styletron';
import { CartCheckOut } from '~/Features/Commerce/Components/CartCheckOut';
import { createSignal, Show } from 'solid-js';
import { CartItems } from '~/Features/Cart/Components/CartItems';
import { useNavigate } from '@solidjs/router';
import { DiscountCouponDialog } from '~/Features/CMSComponents/Components/DiscountCouponList';
import { Button } from '~/Features/Core/Components/Button';
import { cartItems } from '~/Features/Cart/Components/CartItems/CartItems';

export default () => {
  const [css, $theme] = useStyletron();
  const [cartItem] = cartItems;

  const [discountDialogOpen, setDiscountDialogOpen] = createSignal(false);
  const [selectedCoupon, setSelectedCoupon] = createSignal('');
  const navigate = useNavigate();

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
      <Show
        when={cartItem.length > 0}
        keyed={true}
        fallback={
          <div
            class={css({
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            })}
          >
            <div
              class={css({
                ...$theme.typography.HeadingMedium,
                color: '#000',
                paddingBottom: $theme.sizing.scale400,
              })}
            >
              Your cart is empty
            </div>

            <div
              class={css({
                ...$theme.typography.ParagraphLarge,
                color: '#000',
                paddingBottom: $theme.sizing.scale400,
                textAlign: 'center',
              })}
            >
              Looks like you haven't added any items to the cart yet. Start
              Shopping to fill it in.
            </div>
            <div
              onClick={() => {
                navigate('/');
              }}
              class={css({
                marginTop: $theme.sizing.scale900,
                [$theme.mediaQuery?.md || '']: {
                  width: '240px',
                },
                width: '100%',
                textAlign: 'center',
                backgroundColor: '#118b44',
                paddingTop: '12px',
                paddingBottom: '12px',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '18px',
                borderRadius: '4px',
                ':hover': { cursor: 'pointer' },
              })}
            >
              Start Shopping
            </div>
          </div>
        }
      >
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
            <CartItems />
            <div
              class={css({
                display: 'flex',
                flexDirection: 'row-reverse',
              })}
            >
              <Button
                $override={{
                  Root: {
                    style: {
                      ...$theme.typography.LabelMedium,
                      justifyContent: 'center',
                      flex: 1,
                      [$theme.mediaQuery?.md || '']: {
                        flex: 'none',
                      },
                    },
                  },
                }}
                onClick={() => setDiscountDialogOpen(true)}
              >
                <div
                  class={css({
                    lineHeight: '1.42',
                    fontSize: '16px',
                    fontWeight: 600,
                  })}
                >
                  {selectedCoupon() == '' ? 'Apply Coupon' : 'Coupon Applied !'}
                </div>
              </Button>
              <DiscountCouponDialog
                isOpen={discountDialogOpen}
                setOpen={setDiscountDialogOpen}
                setSelectedCoupon={setSelectedCoupon}
              />
            </div>
          </div>
          <div
            class={css({
              flex: 0.5,
            })}
          />
          <div
            class={css({
              flex: 3.5,
            })}
          >
            <CartCheckOut />
          </div>
        </div>
      </Show>
    </div>
  );
};
