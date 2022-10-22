import { useStyletron } from 'baseui';
import { VisuallyHiddenStyle } from '../../../Core/Style/VisuallyHidden';

export function CartSummary() {
  const [css, $theme] = useStyletron();

  return (
    <div className={css({})}>
      <table className={css({ width: '100%' })}>
        <caption className={css({ ...VisuallyHiddenStyle })}>
          Cost summary
        </caption>
        <thead>
          <tr>
            <th scope="col">
              <span className={css(VisuallyHiddenStyle)}>Description</span>
            </th>
            <th scope="col">
              <span className={css(VisuallyHiddenStyle)}>Price</span>
            </th>
          </tr>
        </thead>
        <tbody className={css({})}>
          <tr className={css({})}>
            <th
              className={css({
                ...$theme.typography.LabelSmall,
                textAlign: 'left',
              })}
              scope="row"
            >
              Subtotal (Excl. VAT)
            </th>
            <td className={css({ textAlign: 'right' })}>
              <span
                className={css({
                  ...$theme.typography.LabelSmall,
                  textAlign: 'right',
                })}
                data-checkout-subtotal-price-target="7300"
              >
                AED73.00
              </span>
            </td>
          </tr>

          <tr className={css({})}>
            <th className={css({ textAlign: 'left' })} scope="row">
              <span
                className={css({
                  ...$theme.typography.LabelSmall,
                  textAlign: 'left',
                })}
              >
                Shipping (Incl. VAT)
              </span>

              <a
                aria-haspopup="dialog"
                data-modal="policy-shipping-policy"
                data-title-text="Shipping policy"
                data-close-text="Close"
                data-iframe="true"
                href="/60128493784/policies/shipping-policy.html?locale=en"
              >
                <span className={css(VisuallyHiddenStyle)}>Shipping costs</span>
              </a>
            </th>
            <td className={css({ textAlign: 'right' })}>
              <span
                className={css({
                  ...$theme.typography.LabelSmall,
                  textAlign: 'right',
                })}
                data-checkout-total-shipping-target="0"
              >
                Calculated at next step
              </span>
            </td>
          </tr>
        </tbody>
        <tfoot
          className={css({
            ':after': {
              content: '',
              position: 'absolute',
              width: '100%',
            },
          })}
        >
          <tr className={css({})}>
            <th className={css({ textAlign: 'left' })} scope="row">
              <span
                className={css({
                  ...$theme.typography.LabelLarge,
                  textAlign: 'left',
                })}
              >
                Total
              </span>
              <span
                className={css({
                  ...$theme.typography.LabelSmall,
                  display: 'block',
                  textAlign: 'left',
                })}
              >
                Including&nbsp;
                <span data-checkout-total-taxes-target="348">AED3.48</span> in
                taxes
              </span>
            </th>
            <td
              className={css({ textAlign: 'right' })}
              data-presentment-currency="AED"
            >
              <span className={css({ ...$theme.typography.LabelSmall })}>
                AED
              </span>
              <span
                className={css({ ...$theme.typography.LabelSmall })}
                data-checkout-payment-due-target="7300"
              >
                73.00
              </span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
