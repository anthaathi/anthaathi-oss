import { useStyletron } from '@anthaathi/solid-styletron';

export interface OrderDetailsCardProps {
  orderNumber: string;
  placedOn: string;
  orderStatus: string;
  discount: number;
  shipping: number;
  total: number;
  numberOfItems: number;
}

export default function OrderDetailsCard(props: {
  details: OrderDetailsCardProps;
}) {
  const [css, $theme] = useStyletron();
  return (
    <div
      class={css({
        margin: '0 auto',
        width: $theme.sizing.maxWidth,
        maxWidth: `calc(100% - ${$theme.sizing.scale500} - ${$theme.sizing.scale500})`,
        marginTop: $theme.sizing.scale800,
        marginBottom: $theme.sizing.scale800,
      })}
    >
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
        <RowData label1="Order number" label2={props.details.orderNumber} />
        <RowData label1="Placed on" label2={props.details.placedOn} />
        <RowData label1="Status" label2={props.details.orderStatus} />
        <RowData label1="Shipping" label2={props.details.shipping} />
        <RowData label1="Discount" label2={props.details.discount} />
        <RowData label1="Total" label2={props.details.total} />
        <RowData label1="Items" label2={props.details.numberOfItems} />
      </div>
    </div>
  );
}

const RowData = ({
  label1,
  label2,
}: {
  label1: string;
  label2: string | number;
}) => {
  const [css, $theme] = useStyletron();
  return (
    <div
      class={css({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: $theme.sizing.scale300,
      })}
    >
      <p
        class={css({
          ...$theme.typography.LabelLarge,
          fontWeight: 'normal',
          color: '#000',
          marginTop: 0,
          marginBottom: 0,
          flex: 0.8,
          [$theme.mediaQuery?.sm || '']: {
            flex: 0.4,
          },
        })}
      >
        {label1 + ':'}
      </p>
      <p
        class={css({
          ...$theme.typography.LabelLarge,
          fontWeight: 'bold',
          color: '#000',
          marginTop: 0,
          marginBottom: 0,
          flex: 1.2,
          [$theme.mediaQuery?.sm || '']: {
            flex: 1.6,
          },
        })}
      >
        {label2}
      </p>
    </div>
  );
};
