import { useStyletron } from '@anthaathi/solid-styletron';
import { Button, Kind, Size } from '~/Features/Core/Components/Button';
import {
  IconHeartOLarge,
  IconMinusSmall,
  IconSearchLarge,
} from '@anthaathi/oracle-apex-solid-icons';
import { createMemo, createSignal } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import { Img } from '~/Features/Core/Components/Image';
import debounce from 'lodash.debounce';
import { cartItems } from '~/Features/Cart/Components/CartItems/CartItems';
import { useCart } from '~/Features/Cart/Hooks';

export interface ProductProps {
  id: number;
  name: string;
  name_ar?: string;
  description?: string;
  category?: string;
  price: string;
  currency: string;
  image: string;
  weight_unit?: string;
  packaging?: string;
  key?: string;
  notes?: string;
}

export function ProductTile(props: ProductProps) {
  const [css, $theme] = useStyletron();
  const [isOpen, setIsOpen] = createSignal(false);
  const navigate = useNavigate();
  const [cartItem] = cartItems;

  const { setCartItem } = useCart();

  const cartProductData = createMemo(() => {
    if (cartItem.some((el) => el.id === props.id)) {
      return cartItem.find((el) => el.id === props.id);
    }
  }, [cartItem, props.id]);

  function getReduceQuantity() {
    return debounce(() => {
      setCartItem(props.id, -1, true);
    }, 200);
  }

  function getOnIncreaseQuantity() {
    return debounce((e: Event) => {
      const datasetElement = (e.target as HTMLDivElement).closest('button')
        ?.dataset['action'];
      switch (datasetElement) {
        case 'view-product':
          navigate('/product/' + props.id);
          return;
        case 'reduce-quantity':
          return;
        case 'ratings':
          return;
        case '':
          return;
      }

      setCartItem(props.id, 1, true);
    }, 100);
  }

  const onIncreaseQuantity = getOnIncreaseQuantity();

  return (
    <div
      onClick={onIncreaseQuantity}
      class={css({
        textDecoration: 'none',
        color: '#000',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        borderTopRightRadius: '10px',
        borderTopLeftRadius: '10px',
        userSelect: 'none',
        border: '1px solid #e4e4d9',
        ':hover': {
          boxShadow:
            '0 1px 1px 0 rgba(66, 66, 66, 0.08), 0 1px 3px 1px rgba(66, 66, 66, 0.16)',
        },
      })}
      onTouchEnd={onIncreaseQuantity}
    >
      <div
        class={css({
          width: 'auto',
          position: 'relative',
          height: `calc(100% - ${$theme.sizing.scale600})`,
          cursor: 'pointer',
          paddingLeft: $theme.sizing.scale600,
          paddingRight: $theme.sizing.scale600,
          paddingTop: $theme.sizing.scale600,
          [$theme.mediaQuery?.md || '']: {
            height: `calc(100% - ${$theme.sizing.scale800})`,
            paddingLeft: $theme.sizing.scale800,
            paddingRight: $theme.sizing.scale800,
            paddingTop: $theme.sizing.scale800,
          },
        })}
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        <div
          class={css({
            position: 'absolute',
            left: '5px',
            top: '14px',
            opacity:
              (cartProductData &&
                cartProductData()?.id === props.id &&
                cartProductData()?.numberOfItems !== 0) ||
              isOpen()
                ? 1
                : 0,
            transitionTimingFunction: 'ease',
            transitionDuration: '100ms',
            transitionProperty: 'opacity',
            zIndex: 1,
            display: 'block',
          })}
        >
          <Button
            $override={{
              Root: {
                style: {
                  position: 'absolute',
                  opacity:
                    cartProductData &&
                    cartProductData()?.id === props.id &&
                    cartProductData()?.numberOfItems !== 0
                      ? 1
                      : 0,
                  userSelect:
                    cartProductData &&
                    cartProductData()?.id === props.id &&
                    cartProductData()?.numberOfItems !== 0
                      ? 'element'
                      : 'none',
                  display:
                    cartProductData &&
                    cartProductData()?.id === props.id &&
                    cartProductData()?.numberOfItems !== 0
                      ? 'block'
                      : 'none',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  borderTopRightRadius: '50%',
                  borderTopLeftRadius: '50%',
                  borderBottomLeftRadius: '50%',
                  borderBottomRightRadius: '50%',
                  marginBottom: '12px',
                  border: '1px solid #ea3323',
                  background: '#ea3323',
                  ':hover': {
                    background: '#ea3323',
                  },
                },
              },
            }}
            data-action="reduce-quantity"
            onClick={getReduceQuantity()}
            $size={Size.Mini}
            $kind={Kind.Secondary}
            $startEnhancer={() => (
              <IconMinusSmall width="20px" height="20px" fill="#fff" />
            )}
          />
        </div>
        <div
          class={css({
            position: 'absolute',
            right: '5px',
            top: '14px',
            opacity:
              (cartProductData &&
                cartProductData()?.id === props.id &&
                cartProductData()?.numberOfItems !== 0) ||
              isOpen()
                ? 1
                : 0,
            transitionTimingFunction: 'ease',
            transitionDuration: '100ms',
            transitionProperty: 'opacity',
            zIndex: 1,
            display: 'block',
          })}
        >
          <Button
            $override={{
              Root: {
                style: {
                  opacity:
                    cartProductData &&
                    cartProductData()?.id === props.id &&
                    cartProductData()?.numberOfItems !== 0
                      ? 1
                      : 0,
                  userSelect:
                    cartProductData &&
                    cartProductData()?.id === props.id &&
                    cartProductData()?.numberOfItems !== 0
                      ? 'element'
                      : 'none',
                  display:
                    cartProductData &&
                    cartProductData()?.id === props.id &&
                    cartProductData()?.numberOfItems !== 0
                      ? 'block'
                      : 'none',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  borderTopRightRadius: '50%',
                  borderTopLeftRadius: '50%',
                  borderBottomLeftRadius: '50%',
                  borderBottomRightRadius: '50%',
                  marginBottom: '12px',
                  background: '#108943',
                  ':hover': {
                    background: '#108943',
                  },
                },
              },
            }}
            $size={Size.Mini}
            $kind={Kind.Secondary}
            $startEnhancer={() => (
              <div
                class={css([
                  $theme.typography.LabelLarge,
                  {
                    marginTop: 0,
                    marginBottom: 0,
                    color: '#fff',
                    height: '20px',
                    width: '20px',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                  },
                ])}
              >
                {cartProductData()?.numberOfItems}
              </div>
            )}
          />
          <Button
            $override={{
              Root: {
                style: {
                  opacity:
                    (cartProductData &&
                      cartProductData()?.id === props.id &&
                      cartProductData()?.numberOfItems !== 0) ||
                    isOpen()
                      ? 1
                      : 0,
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  borderTopRightRadius: '50%',
                  borderTopLeftRadius: '50%',
                  borderBottomLeftRadius: '50%',
                  borderBottomRightRadius: '50%',
                  marginBottom: '12px',
                  border: '1px solid #e4e4d9',
                  ':hover': {
                    background: '#E5E5EA',
                  },
                },
              },
            }}
            onClick={() => {
              navigate('/product/' + props.id);
            }}
            data-action="view-product"
            $size={Size.Mini}
            $kind={Kind.Secondary}
            $startEnhancer={() => (
              <IconSearchLarge width="20px" height="20px" />
            )}
          />
          <Button
            $override={{
              Root: {
                style: {
                  opacity:
                    (cartProductData &&
                      cartProductData()?.id === props.id &&
                      cartProductData()?.numberOfItems !== 0) ||
                    isOpen()
                      ? 1
                      : 0,
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  borderTopRightRadius: '50%',
                  borderTopLeftRadius: '50%',
                  borderBottomLeftRadius: '50%',
                  borderBottomRightRadius: '50%',
                  marginBottom: '12px',
                  border: '1px solid #e4e4d9',
                  ':hover': {
                    background: '#E5E5EA',
                  },
                },
              },
            }}
            $size={Size.Mini}
            data-action="ratings"
            $kind={Kind.Secondary}
            $startEnhancer={() => (
              <IconHeartOLarge width="20px" height="20px" />
            )}
          />
        </div>

        <div
          class={css({
            width: '100%',
          })}
        >
          <Img
            src={props.image}
            alt=""
            $override={{
              Root: {
                $style: {
                  width: '100%',
                  flexGrow: 1,
                  objectFit: 'cover',
                  [$theme.mediaQuery?.md || '']: {
                    width: `calc(100% - ${$theme.sizing.scale400} - ${$theme.sizing.scale400})`,
                    paddingLeft: $theme.sizing.scale400,
                    paddingRight: $theme.sizing.scale400,
                  },
                },
              },
            }}
          />
          <h4
            class={css([
              $theme.typography.HeadingXSmall,
              {
                marginBottom: $theme.sizing.scale200,
                marginTop: $theme.sizing.scale800,
              },
            ])}
          >
            {props.name}
          </h4>

          <h5
            class={css([
              $theme.typography.ParagraphSmall,
              {
                marginTop: $theme.sizing.scale100,
                marginBottom: 0,
                color: '#858585',
              },
            ])}
          >
            {props.notes}
          </h5>

          <h5
            class={css([
              $theme.typography.ParagraphLarge,
              {
                marginTop: 0,
                marginBottom: $theme.sizing.scale800,
                fontWeight: 'bold',
              },
            ])}
          >
            {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: props.currency,
            }).format(+props.price) +
              ' / ' +
              props.packaging}
          </h5>
        </div>
      </div>
    </div>
  );
}
