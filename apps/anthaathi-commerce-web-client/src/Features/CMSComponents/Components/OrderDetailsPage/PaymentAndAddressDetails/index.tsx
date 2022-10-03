import { useStyletron } from '@anthaathi/solid-styletron';

export interface PaymentAndAddressDetailsProps {
  paymentOption: string;
  name: string;
  apartment?: string;
  landmark?: string;
  city: string;
  country: string;
  postalCode?: string;
  mobileNumber: string;
}

export default function PaymentAndAddressDetails(props: {
  details: PaymentAndAddressDetailsProps;
}) {
  const [css, $theme] = useStyletron();
  return (
    <div
      class={css({
        marginTop: $theme.sizing.scale800,
        marginBottom: $theme.sizing.scale800,
      })}
    >
      <div
        class={css({
          border: '1px solid #F0F0F0',
          borderRadius: '2px',
          borderBottom: 0,
          backgroundColor: '#fff',
          paddingLeft: $theme.sizing.scale600,
          paddingRight: $theme.sizing.scale600,
          paddingTop: $theme.sizing.scale500,
          paddingBottom: $theme.sizing.scale500,
        })}
      >
        <p
          class={css({
            ...$theme.typography.LabelLarge,
            fontWeight: 'normal',
            color: '#000',
            marginTop: 0,
            marginBottom: $theme.sizing.scale300,
            flex: 0.4,
          })}
        >
          Payment Method
        </p>
        <p
          class={css({
            ...$theme.typography.LabelLarge,
            fontWeight: 'bold',
            color: '#000',
            marginTop: 0,
            marginBottom: 0,
            flex: 1.6,
          })}
        >
          {props.details.paymentOption}
        </p>
      </div>
      <div
        class={css({
          border: '1px solid #F0F0F0',
          borderRadius: '2px',
          backgroundColor: '#fff',
          paddingLeft: $theme.sizing.scale600,
          paddingRight: $theme.sizing.scale600,
          paddingTop: $theme.sizing.scale500,
          paddingBottom: $theme.sizing.scale500,
        })}
      >
        <p
          class={css({
            ...$theme.typography.LabelLarge,
            fontWeight: 'normal',
            color: '#000',
            marginTop: 0,
            marginBottom: $theme.sizing.scale300,
            flex: 0.4,
          })}
        >
          Shipping Address
        </p>
        <p
          class={css({
            ...$theme.typography.LabelLarge,
            fontWeight: 'bold',
            color: '#000',
            marginTop: 0,
            marginBottom: 0,
            flex: 1.6,
          })}
        >
          {`${props.details.apartment}, ${props.details.landmark} 
            ${props.details.city} - ${props.details.country},
            ${props.details.mobileNumber}
          `}
        </p>
      </div>
    </div>
  );
}
