import { useStyletron } from '@anthaathi/solid-styletron';
import { CartQuantityChange } from '~/Features/Commerce/Components/CartQuantityChange';
import { Img } from '~/Features/Core/Components/Image';
import { Button, Kind, Size } from '~/Features/Core/Components/Button';
import { Link } from '@solidjs/router';
import { ProductProps } from '../ProductTile';

export interface CartItemProps extends ProductProps {
  numberOfItems: number;
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
          flex: 4,
          width: '150px',
          minWidth: '100px',
          maxWidth: '150px',
        })}
      >
        <Img
          src={props.image}
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
          {props.name}
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
            currency: props.currency,
          }).format(props.price) + ' / Piece'}
        </div>

        <div
          class={css({
            paddingBottom: $theme.sizing.scale400,
            display: 'flex',
          })}
        >
          <CartQuantityChange />
          <Button
            $kind={Kind.Tertiary}
            $size={Size.Medium}
            $override={{
              Root: {
                style: {
                  marginLeft: $theme.sizing.scale500,
                },
              },
            }}
          >
            Remove
          </Button>
        </div>
      </div>
      <div
        class={css({
          flex: 8,
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
            currency: props.currency,
          }).format(props.price)}
        </div>
      </div>
    </div>
  );
}
