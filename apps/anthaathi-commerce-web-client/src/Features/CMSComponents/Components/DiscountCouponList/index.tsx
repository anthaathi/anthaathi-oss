import { useStyletron } from '@anthaathi/solid-styletron';
import { Button } from '~/Features/Core/Components/Button';
import { Img } from '~/Features/Core/Components/Image';
import { Dialog } from '~/Features/Core/Components/Dialog';
import { Accessor } from 'solid-js';

export interface DiscountCouponDialogProps {
  isOpen: Accessor<boolean>;
  setOpen: (input: boolean) => void;
  setSelectedCoupon: (input: string) => void;
}

export function DiscountCouponDialog(props: DiscountCouponDialogProps) {
  const [css, $theme] = useStyletron();

  return (
    <Dialog isOpen={props.isOpen} setOpen={props.setOpen}>
      <DiscountCouponList dialog={{ ...props }} />
    </Dialog>
  );
}

export interface DiscountCouponListProps {
  dialog: DiscountCouponDialogProps;
}

export function DiscountCouponList(props: DiscountCouponListProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <DiscountCoupon
        imgSrc="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.png"
        title="Get up to 10 AED Paytm cashback using Paytm Wallet"
        subtitle="Valid on total value of items worth 100 AED or more."
        highlightedSubtitle="You will get up to 10 AED Paytm cashback with this code"
        couponCode="N E W M E M B E R"
        onApplyClick={() => {
          props.dialog.setSelectedCoupon('N E W M E M B E R');
          props.dialog.setOpen(false);
        }}
      />
      <DiscountCoupon
        imgSrc="https://mma.prnewswire.com/media/1699082/Simpl_Logo.jpg?w=200"
        title="Get 5% cashback on transactions above 500 AED"
        subtitle="Valid on total value of items worth 500 AED or more."
        highlightedSubtitle="You will get flat 5% discount on total price"
        couponCode="S I M P L"
        onApplyClick={() => {
          props.dialog.setSelectedCoupon('C O U P O N');
          props.dialog.setOpen(false);
        }}
      />
      <DiscountCoupon
        imgSrc="https://assets.stickpng.com/images/580b57fcd9996e24bc43c530.png"
        title="Get up to 10% cashback using PayPal Wallet"
        subtitle="Valid on total value of items worth 100 AED or more."
        highlightedSubtitle="You will get up to 10 AED PayPal cashback with this code"
        couponCode="P A L"
        onApplyClick={() => {
          props.dialog.setSelectedCoupon('N E W M E M B E R');
          props.dialog.setOpen(false);
        }}
      />
    </div>
  );
}

export interface DiscountCouponProps {
  imgSrc: string;
  title: string;
  subtitle: string;
  couponCode: string;
  highlightedSubtitle: string;
  onApplyClick: () => void;
}

export function DiscountCoupon(props: DiscountCouponProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: $theme.sizing.scale500,
        borderBottom: '1px solid #d9d9d9',
      })}
    >
      <div
        class={css({
          height: '50px',
          width: '100px',
          marginBottom: $theme.sizing.scale300,
          lineHeight: '1.5',
          letterSpacing: '0.05em',
        })}
      >
        <Img
          src={props.imgSrc}
          $override={{
            Root: {
              $style: {
                height: '100%',
                width: '100%',
                objectFit: 'contain',
              },
            },
          }}
        />
      </div>
      <div
        class={css({
          ...$theme.typography.LabelLarge,
          marginBottom: $theme.sizing.scale300,
        })}
      >
        {props.title}
      </div>
      <div
        class={css({
          ...$theme.typography.LabelSmall,
          color: 'slategrey',
          marginBottom: $theme.sizing.scale300,
        })}
      >
        {props.subtitle}
      </div>
      <div
        class={css({
          marginBottom: $theme.sizing.scale300,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          columnGap: $theme.sizing.scale500,
          rowGap: $theme.sizing.scale200,
        })}
      >
        <CouponCode title={props.couponCode} />
        <Button onClick={props.onApplyClick}>Apply</Button>
      </div>
      <div
        class={css({
          ...$theme.typography.LabelSmall,
          color: '#0077ff',
          marginBottom: $theme.sizing.scale300,
        })}
      >
        {props.highlightedSubtitle}
      </div>
    </div>
  );
}

export interface CouponCodeProps {
  title: string;
}

export function CouponCode(props: CouponCodeProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        padding: '7px',
        minWidth: '150px',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        border: '2px dashed #0077ff',
        borderRadius: '5px',
        ...$theme.typography.LabelMedium,
      })}
    >
      {props.title}
    </div>
  );
}
