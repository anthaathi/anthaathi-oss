import { useStyletron } from '@anthaathi/solid-styletron';
import { useNavigate } from '@solidjs/router';
import { For } from 'solid-js';

import { Img } from '~/Features/Core/Components/Image';
import { ProductProps } from '../ProductTile';



export interface RecentlyViewedItemsProps {
  title?: string;
  items: ProductProps[];
}
export default function RecentlyViewedItems(props: RecentlyViewedItemsProps) {
  const [css, $theme] = useStyletron();

  return (
    <div>
      {props.title && (
        <p
          class={css({
            ...$theme.typography.LabelMedium,
            fontWeight: 'bold',
            color: '#000',
            marginTop: $theme.sizing.scale800,
            marginBottom: $theme.sizing.scale100,
          })}
        >
          {props.title}
        </p>
      )}
      <For each={props.items}>
        {(item) => <RenderItem {...item} />}
      </For>
    </div>
  );
}

const RenderItem = (props: ProductProps) => {
  const [css, $theme] = useStyletron();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate('/product/' + props.id);
      }}
      class={css({
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      })}
    >
      <Img
        src={props.image}
        alt=""
        $override={{
          Root: {
            $style: {
              width: '54px',
              height: '54px',
              objectFit: 'cover',
            },
          },
        }}
      />
      <div
        class={css({
          marginLeft: $theme.sizing.scale400,
        })}
      >
        <h4
          class={css([
            $theme.typography.LabelMedium,
            {
              marginBottom: $theme.sizing.scale200,
              marginTop: $theme.sizing.scale800,
              fontWeight: 'bold',
            },
          ])}
        >
          {props.name}
        </h4>
        <h5
          class={css([
            $theme.typography.LabelMedium,
            {
              marginTop: 0,
              marginBottom: $theme.sizing.scale800,
              fontWeight: 'normal',
            },
          ])}
        >
          {Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: props.currency,
          }).format(props.price) +
            ' / ' +
            props.packaging}
        </h5>
      </div>
    </div>
  );
};
