import { useStyletron } from '@anthaathi/solid-styletron';
import { Link } from '@solidjs/router';
import { For } from 'solid-js';
import { Grid } from '~/Features/Core/Components/Grid';
import { Img } from '~/Features/Core/Components/Image';

export interface CategoryDetailsProps {
  id: number;
  title_ar: string;
  title: string;
  image: string;
  key: string;
  href: string;
}

export interface CategoryListProps {
  title?: string;
  items: CategoryDetailsProps[];
  handlePress?: (key: string) => void;
}

export function CategoryList(props: CategoryListProps) {
  const [css, $theme] = useStyletron();
  return (
    <div
      class={css({
        maxWidth: $theme.sizing.maxWidth,
        margin: '0 auto',
        width: `calc(100% - ${$theme.sizing.scale500} - ${$theme.sizing.scale500})`,
      })}
    >
      {props.title && (
        <h5
          class={css([
            $theme.typography.HeadingMedium,
            {
              marginTop: $theme.sizing.scale600,
              marginBottom: $theme.sizing.scale600,
              fontWeight: 'bold',
              color: '#000',
            },
          ])}
        >
          {props.title}
        </h5>
      )}
      <div
        class={css({
          display: 'flex',
          overflowY: 'auto',
          marginTop: $theme.sizing.scale700,
          marginBottom: $theme.sizing.scale700,
        })}
      >
        <For each={props.items}>
          {(item) => <CategoryDetails item={item} />}
        </For>
      </div>
    </div>
  );
}

const CategoryDetails = ({ item }: { item: CategoryDetailsProps }) => {
  const [css, $theme] = useStyletron();
  return (
    <Link
      href={item.href}
      class={css({
        textDecoration: 'none',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: $theme.sizing.scale600,
        marginRight: $theme.sizing.scale600,
      })}
    >
      <Img
        src={item.image}
        $override={{
          Root: {
            $style: {
              margin: '0px',
              objectFit: 'cover',
              [$theme.mediaQuery?.md || '']: {
                width: '104px',
                height: '104px',
              },
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              ':hover': {
                animation: 'fade-in-show .4s',
                transform: 'scale(1.03)',
              },
            },
          },
        }}
      />
      <h5
        class={css([
          $theme.typography.ParagraphLarge,
          {
            marginTop: $theme.sizing.scale600,
            marginBottom: $theme.sizing.scale500,
            fontWeight: 'bold',
            color: '#000',
          },
        ])}
      >
        {item.title}
      </h5>
    </Link>
  );
};
