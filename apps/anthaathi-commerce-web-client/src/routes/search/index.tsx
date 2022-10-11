import { Searchbar } from '~/Features/Core/Components/Searchbar';
import { useStyletron } from '@anthaathi/solid-styletron';
import { For } from 'solid-js';
import {
  ProductProps,
  ProductTile,
} from '~/Features/Commerce/Components/ProductTile';
import { Grid } from '~/Features/Core/Components/Grid';
import productJson from '../../config/products';

export default function Search() {
  const [css, $theme] = useStyletron();

  const products = () => productJson.featuredCollection.products;

  return (
    <div
      class={css({ backgroundColor: '#FFF', padding: $theme.sizing.scale500 })}
    >
      <Searchbar />

      <Grid
        $override={{
          Root: {
            style: {
              gridGap: '15px',
              paddingTop: '12px',
            },
          },
        }}
        columns={[2, 2, 3, 4]}
      >
        <For each={products()}>
          {(product: ProductProps) => <ProductTile {...product} />}
        </For>
      </Grid>
    </div>
  );
}
