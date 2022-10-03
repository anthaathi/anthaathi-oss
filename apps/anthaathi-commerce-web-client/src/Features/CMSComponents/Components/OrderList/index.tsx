import { useStyletron } from '@anthaathi/solid-styletron';
import { For } from 'solid-js';
import { Grid } from '~/Features/Core/Components/Grid';

export interface OrderDetailsCardProps {
  key: string;
  orderNumber: string;
  placedOn: string;
  orderStatus: string;
  shipping: number;
  total: number;
  numberOfItems: number;
}

export function OrderList(props: {
  title: string;
  list: OrderDetailsCardProps[];
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
      <p
        class={css({
          ...$theme.typography.ParagraphLarge,
          fontWeight: 'bold',
          color: '#767676',
          marginTop: $theme.sizing.scale500,
          marginBottom: $theme.sizing.scale500,
        })}
      >
        {props.title}
      </p>
      <Grid
        $override={{
          Root: {
            style: {
              rowGap: '8px',
              gridGap: '15px',
            },
          },
        }}
        columns={[1, 2, 2, 3, 3]}
      >
        <For each={props.list}>
          {(item) => <OrderDetailsCard item={item} />}
        </For>
      </Grid>
    </div>
  );
}

const OrderDetailsCard = ({ item }: { item: OrderDetailsCardProps }) => {
  const [css, $theme] = useStyletron();
  return (
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
      <RowData label1="Order number" label2={item.orderNumber} />
      <RowData label1="Placed on" label2={item.placedOn} />
      <RowData label1="Status" label2={item.orderStatus} />
      <RowData label1="Shipping" label2={item.shipping} />
      <RowData label1="Total" label2={item.total} />
      <RowData label1="Items" label2={item.numberOfItems} />
      <div
        // onclick={props.handlePress}
        class={css({
          textAlign: 'center',
          marginTop: $theme.sizing.scale600,
          width: '100%',
          paddingTop: '12px',
          paddingBottom: '12px',
          fontWeight: 'bold',
          fontSize: '18px',
          borderRadius: '2px',
          color: '#0f8443',
          border: '1px solid #0f8443',
          marginVertical: 10,
          ':hover': { cursor: 'pointer' },
        })}
      >
        View Details
      </div>
    </div>
  );
};

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
          flex: 1,
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
          flex: 1,
        })}
      >
        {label2}
      </p>
    </div>
  );
};
