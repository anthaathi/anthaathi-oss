import { useStyletron } from '@anthaathi/solid-styletron';
import { For } from 'solid-js';

export interface ItemProps {
  id: number;
  name: string;
  description?: string;
  price: number;
  currency: string;
  image: string;
  weight_unit: string;
  packaging: string;
  key: string;
  numberOfItems: number;
  notes?: string;
}

export interface OrderedItemProps {
  title?: string;
  items: ItemProps[];
  handlePress?: (item: ItemProps) => void;
}

function OrderedItems(props: OrderedItemProps) {
  const [css, $theme] = useStyletron();
  return (
    <div
      class={css({
        margin: '0 auto',
        marginTop: $theme.sizing.scale800,
        marginBottom: $theme.sizing.scale800,
      })}
    >
      <For each={props.items}>{(item) => <ItemRenderer item={item} />}</For>
    </div>
  );
}

export default OrderedItems;

const ItemRenderer = ({ item }: { item: ItemProps }) => {
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
        marginBottom: $theme.sizing.scale600,
        display: 'flex',
      })}
    >
      <img
        src={item.image}
        class={css({
          height: '120px',
          width: '120px',
          objectFit: 'cover',
        })}
      />
      <div
        class={css({
          marginLeft: $theme.sizing.scale400,
        })}
      >
        <p
          class={css({
            ...$theme.typography.LabelLarge,
            fontWeight: 'bold',
            color: '#364A15',
            marginTop: 0,
            marginBottom: $theme.sizing.scale300,
          })}
        >
          {item.name}
        </p>
        <p
          class={css({
            ...$theme.typography.LabelMedium,
            fontWeight: 'normal',
            color: '#364A15',
            marginTop: 0,
            marginBottom: $theme.sizing.scale100,
          })}
        >
          {item.price + ' / Piece'}
        </p>
        <FlexText label1="Quantity" label2={item.numberOfItems} />
        <FlexText label1="Total" label2={item.numberOfItems * item.price} />
      </div>
    </div>
  );
};

const FlexText = ({
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
      })}
    >
      <p
        class={css({
          ...$theme.typography.LabelLarge,
          fontWeight: 'bold',
          color: '#364A15',
          marginTop: 0,
          marginBottom: $theme.sizing.scale300,
        })}
      >
        {label1 + ': '}
      </p>

      <p
        class={css({
          ...$theme.typography.LabelLarge,
          fontWeight: 'bold',
          color: '#008D3E',
          marginTop: 0,
          marginBottom: $theme.sizing.scale300,
        })}
      >
        {label2}
      </p>
    </div>
  );
};
