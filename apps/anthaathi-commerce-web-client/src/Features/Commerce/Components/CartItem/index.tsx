import { useStyletron } from '@anthaathi/solid-styletron';
import { CartQuantityChange } from '~/Features/Commerce/Components/CartQuantityChange';
import { Img } from '~/Features/Core/Components/Image';
import { ProductProps } from '../ProductTile';

export interface CartItemProps {
  product: ProductProps;
  numberOfItems: number;
  handleAddProduct?: () => void;
  handleRemoveProduct?: () => void;
}

export function CartItem(props: CartItemProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        display: 'flex',
        height: '105px',
        flexDirection: 'row',
        borderBottom: '1px solid #d9d9d9',
        paddingBottom: '20px',
        marginBottom: '20px',
      })}
    >
      <div
        class={css({
          width: '100%',
          maxWidth: '120px',
          display: 'none',
          [$theme.mediaQuery?.sm || '']: {
            display: 'block',
          },
        })}
      >
        <Img
          src={props.product.image}
          $override={{
            Root: {
              $style: {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                border: '1px solid #e4e4d9',
              },
            },
          }}
        />
      </div>
      <div
        class={css({
          display: 'flex',
          flex: 6,
          marginLeft: $theme.sizing.scale600,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          lineHeight: '1.5',
          letterSpacing: '0.05em',
        })}
      >
        <div
          class={css({
            ...$theme.typography.HeadingXSmall,
            paddingBottom: $theme.sizing.scale400,
          })}
        >
          {props.product.name}
        </div>
        <div
          class={css({
            ...$theme.typography.LabelMedium,
            paddingBottom: $theme.sizing.scale400,
            marginTop: 0,
            marginBottom: $theme.sizing.scale100,
          })}
        >
          {Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: props.product.currency,
          }).format(props.product.price) + ' / Piece'}
        </div>

        <div
          class={css({
            paddingBottom: $theme.sizing.scale400,
            display: 'flex',
          })}
        >
          <CartQuantityChange
            trashIcon
            id={props.product.id}
            handleAddProduct={props.handleAddProduct}
            handleRemoveProduct={props.handleRemoveProduct}
          />
        </div>
      </div>
      <div
        class={css({
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        })}
      >
        <div
          class={css({
            marginRight: $theme.sizing.scale700,
            fontSize: '18px',
            fontWeight: 700,
          })}
        >
          {Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: props.product.currency,
          }).format(props.product.price * props.numberOfItems)}
        </div>
      </div>
    </div>
  );
}
