import { useStyletron } from '@anthaathi/solid-styletron';
import {
  IconDotCircleOLarge,
  IconGlobeLarge,
  IconLeafLarge,
  IconLockLarge,
} from '@anthaathi/oracle-apex-solid-icons';
import { FAQ } from '../FAQ';
import { Img } from '~/Features/Core/Components/Image';
import { Button } from 'solid-headless';
import { CartQuantityChange } from '~/Features/Commerce/Components/CartQuantityChange';
import { createSignal } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import { produce } from 'solid-js/store';
import { useCart } from '~/Features/Cart/Hooks';
import { cartItems } from '~/Features/Cart/Components/CartItems/CartItems';

type BlockInfoProps = {
  freeShipping: string;
  isFresh: string;
  securePayments: string;
  inStock: string;
};

type ListInfoProps = {
  description: string;
  shippingInformation: string;
};
export interface ProductDetails {
  id: number;
  name: string;
  notes: string;
  listInfo?: ListInfoProps;
  blockInfo: BlockInfoProps;
  image: string[];
  price: number;
  currency: string;
}

export interface ProductDetailsProps {
  productInfo: ProductDetails;
}

export function FeaturedProduct(props: ProductDetailsProps) {
  const [css, $theme] = useStyletron();

  const [quantity, setQuantity] = createSignal(0);

  const navigate = useNavigate();

  const { setCartItem } = useCart();

  const handleAddToCart = () => {
    setCartItem(props.productInfo.id, quantity(), true);
  };

  const handleBuyItNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  return (
    <div
      class={css({
        marginLeft: 'auto',
        marginRight: 'auto',
        width: $theme.sizing.maxWidth,
        maxWidth: `calc(100% - ${$theme.sizing.scale500} - ${$theme.sizing.scale500})`,
        paddingLeft: $theme.sizing.scale500,
        paddingRight: $theme.sizing.scale500,
        marginTop: $theme.sizing.scale1000,
        marginBottom: $theme.sizing.scale1000,
      })}
    >
      <div
        class={css({
          marginBottom: $theme.sizing.scale1000,
          display: 'flex',
          flexDirection: 'column',
          [$theme.mediaQuery?.md || '']: {
            flexDirection: 'row',
          },
        })}
      >
        <div
          class={css({
            flex: 1,
            alignItems: 'center',
            display: 'flex',
            placeContent: 'center',
          })}
        >
          <Img
            src={props.productInfo.image[0]}
            $override={{
              Root: {
                $style: {
                  height: '520px',
                  width: '100%',
                  objectFit: 'cover',
                  [$theme.mediaQuery?.xl || '']: {
                    height: '520px',
                  },
                  [$theme.mediaQuery?.lg || '']: {
                    height: '420px',
                  },
                  [$theme.mediaQuery?.md || '']: {
                    width: '90%',
                  },
                  [$theme.mediaQuery?.sm || '']: {
                    height: '420px',
                  },
                  [$theme.mediaQuery?.xs || '']: {
                    height: '320px',
                  },
                },
              },
            }}
          />
        </div>

        <div
          class={css({
            flex: 1,
          })}
        >
          <p
            class={css({
              ...$theme.typography.HeadingLarge,
              marginTop: $theme.sizing.scale600,
              marginBottom: $theme.sizing.scale600,
              fontWeight: 'bold',
              color: '#000',
            })}
          >
            {props.productInfo.name}
          </p>
          <h5
            class={css([
              $theme.typography.LabelMedium,
              {
                marginTop: $theme.sizing.scale100,
                marginBottom: 0,
                color: '#858585',
              },
            ])}
          >
            {props.productInfo.notes}
          </h5>

          <p
            class={css({
              ...$theme.typography.LabelLarge,
              marginTop: $theme.sizing.scale200,
              marginBottom: $theme.sizing.scale600,
              fontWeight: 'bold',
              color: '#000',
            })}
          >
            {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: props.productInfo.currency ?? 'AED',
            }).format(props.productInfo.price)}
          </p>

          <BlockInfo data={props.productInfo.blockInfo} />

          <div
            class={css({
              marginTop: $theme.sizing.scale400,
            })}
          >
            <CartQuantityChange
              id={props.productInfo.id}
              initialValue={0}
              onChangeQuantity={(value) => {
                setQuantity(value);
              }}
            />
          </div>
          <Button
            onClick={handleAddToCart}
            class={css({
              textAlign: 'center',
              marginTop: $theme.sizing.scale600,
              width: '100%',
              [$theme.mediaQuery?.md || '']: {
                width: '80%',
              },
              paddingTop: '12px',
              paddingBottom: '12px',
              fontWeight: 'bold',
              fontSize: '18px',
              outline: 'none',
              border: 'none',
              borderRadius: '2px',
              color: '#313652',
              marginVertical: 10,
              ':hover': { cursor: 'pointer' },
            })}
          >
            Add to cart
          </Button>
          <Button
            onClick={handleBuyItNow}
            class={css({
              marginTop: '10px',
              width: '100%',
              [$theme.mediaQuery?.md || '']: {
                width: '80%',
              },
              textAlign: 'center',
              border: '1px solid #108742',
              backgroundColor: '#008d3e',
              paddingTop: '12px',
              paddingBottom: '12px',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '18px',
              borderRadius: '2px',
              ':hover': { cursor: 'pointer', backgroundColor: '#108742' },
            })}
          >
            Buy it now
          </Button>
        </div>
      </div>
      <FAQ
        list={[
          {
            question: 'Description',
            answer: `
              100% fresh.
              Sourced from India.
              Benefits:
              Mango with its rich flavor and amazing taste is a perfect refreshing beverage for scorching summer months. It is low in calories and a source of vital nutrients comprising dietary fiber, vitamins, and minerals.
              `,
          },
          {
            question: 'Shipping Information',
            answer: `
              Use collapsible tabs for more detailed information that will help customers make a purchasing decision.
              Ex: Shipping and return policies, size guides, and other common questions.
              `,
          },
        ]}
      />
    </div>
  );
}

const BlockInfo = ({ data }: { data: BlockInfoProps }) => {
  return (
    <>
      <TextIcon
        title={data.freeShipping}
        icon={<IconGlobeLarge height="20px" width="20px" />}
      />
      <TextIcon
        title={data.isFresh}
        icon={<IconLeafLarge height="20px" width="20px" />}
      />
      <TextIcon
        title={data.securePayments}
        icon={<IconLockLarge height="20px" width="20px" />}
      />
      <TextIcon
        title={data.inStock}
        icon={
          <IconDotCircleOLarge color="#54c63a" height="20px" width="20px" />
        }
      />
    </>
  );
};

const TextIcon = ({ icon, title }: { icon: any; title: string }) => {
  const [css, $theme] = useStyletron();
  return (
    <div
      class={css({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: $theme.sizing.scale300,
        marginBottom: $theme.sizing.scale300,
      })}
    >
      {icon}
      <p
        class={css({
          ...$theme.typography.ParagraphSmall,
          marginTop: 0,
          marginBottom: 0,
          marginLeft: $theme.sizing.scale300,
          color: '#000',
        })}
      >
        {title}
      </p>
    </div>
  );
};
