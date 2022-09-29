import { useStyletron } from '@anthaathi/solid-styletron';
import { For } from 'solid-js';
import { Grid } from '~/Features/Core/Components/Grid';

export interface ProductGridProps {
  name: string;
  heading: string;
  description?: string;
  price: number;
  currency: string;
  image: string;
  buttonTitle: string;
  label: string;
  handlePress?: () => void;
}

export interface PromotionalProductGridProps {
  products: ProductGridProps[];
}

export function PromotionalProductGrid(props: PromotionalProductGridProps) {
  const [, $theme] = useStyletron();
  return (
    <Grid
      $override={{
        Root: {
          style: {
            width: '100%',
            gridRowGap: '10px',
            gridColumnGap: '5px',
          },
        },
      }}
      columns={[1, 1, 2]}
    >
      <For each={props.products}>
        {(product) => <ProductGrid product={product} />}
      </For>
    </Grid>
  );
}

const ProductGrid = ({ product }: { product: ProductGridProps }) => {
  const [css, $theme] = useStyletron();

  return (
    <div>
      <div
        class={css({
          backgroundColor: '#f8f8f8',
          width: '100%',
          height: '380px',
          display: 'flex',
          alignItems: 'center',
          placeContent: 'center',
        })}
      >
        <div
          class={css({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          })}
        >
          <div
            class={css({
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              [$theme.mediaQuery.xl]: {
                width: '280px',
              },
              [$theme.mediaQuery.lg]: {
                width: '280px',
              },
              [$theme.mediaQuery.md]: {
                width: '200px',
              },
              [$theme.mediaQuery.sm]: {
                width: '280px',
              },
              [$theme.mediaQuery.xs]: {
                width: '200px',
              },
            })}
          >
            <p
              class={css({
                color: '#000',
                fontWeight: 'normal',
                marginBottom: '0px',
                fontSize: '20px',
              })}
            >
              {product.heading}
            </p>
            <p
              class={css({
                color: '#000',
                fontWeight: 'bold',
                marginTop: '5px',
                marginBottom: '0px',
                fontSize: '24px',
              })}
            >
              {product.name}
            </p>
            <p
              class={css({
                color: '#000',
                fontWeight: 'normal',
                marginTop: '5px',
                marginBottom: '10px',
                fontSize: '20px',
              })}
            >
              {product.description}
            </p>
            <div
              onclick={product.handlePress}
              class={css({
                textAlign: 'center',
                backgroundColor: '#000',
                paddingTop: '10px',
                paddingBottom: '10px',
                color: '#fff',
                width: '120px',
                fontWeight: 'bold',
                fontSize: '18px',
                borderRadius: '4px',
                ':hover': { cursor: 'pointer' },
              })}
            >
              {product.buttonTitle}
            </div>
          </div>
          <div
            class={css({
              position: 'relative',
            })}
          >
            <img
              src={product.image}
              class={css({
                objectFit: 'cover',
                width: '320px',
                height: '280px',
                [$theme.mediaQuery.xl]: {
                  width: '320px',
                  height: '280px',
                },

                [$theme.mediaQuery.lg]: {
                  width: '280px',
                  height: '240px',
                },
                [$theme.mediaQuery.md]: {
                  width: '240px',
                  height: '200px',
                },
                [$theme.mediaQuery.sm]: {
                  width: '280px',
                  height: '240px',
                },

                [$theme.mediaQuery.xs]: {
                  width: '200px',
                  height: '180px',
                },
              })}
            />
            <p
              class={css({
                color: '#fff',
                backgroundColor: '#313652',
                fontWeight: 'normal',
                position: 'absolute',
                top: '-22px',
                right: '-10px',
                paddingTop: '5px',
                paddingBottom: '5px',
                paddingLeft: '15px',
                paddingRight: '15px',
                borderRadius: '2px',
              })}
            >
              {product.label}
            </p>

            <p
              class={css({
                color: '#000',
                backgroundColor: '#fff',
                fontWeight: 'normal',
                position: 'absolute',
                top: '12px',
                right: '-10px',
                paddingTop: '5px',
                paddingBottom: '5px',
                paddingLeft: '15px',
                paddingRight: '15px',
                borderRadius: '2px',
              })}
            >
              {'Dhs.' + product.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
