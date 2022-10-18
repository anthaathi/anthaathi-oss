import { useStyletron } from '@anthaathi/solid-styletron';
import { Link } from '@solidjs/router';
import { For } from 'solid-js';
import { Img } from '~/Features/Core/Components/Image';

type BlogProps = {
  id: number;
  title: string;
  image: string;
  published_date: string;
  author: string;
};

export interface BlogPostProps {
  title: string;
  onClick?: () => void;
  blogs: BlogProps[];
  mainBlog: BlogProps;
}

export function BlogPosts(props: BlogPostProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        maxWidth: $theme.sizing.maxWidth,
        margin: '0 auto',
        width: `calc(100% - ${$theme.sizing.scale500} - ${$theme.sizing.scale500})`,
        paddingTop: $theme.sizing.scale800,
        paddingBottom: $theme.sizing.scale800,
      })}
    >
      <div
        class={css({
          marginTop: $theme.sizing.scale300,
          marginBottom: $theme.sizing.scale500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        })}
      >
        <div
          class={css({
            fontWeight: $theme.typography.font550.fontWeight,
            fontSize: $theme.typography.font750.fontSize,
          })}
        >
          {props.title}
        </div>

        <Link
          href={'/'}
          class={css({
            color: 'black',
            fontWeight: $theme.typography.font550.fontWeight,
            textUnderlineOffset: '2px',
          })}
        >
          View all
        </Link>
      </div>
      <div
        class={css({
          display: 'flex',
          flexDirection: 'column',
          [$theme.mediaQuery?.md || '']: {
            flexDirection: 'row',
          },
        })}
      >
        <div
          class={css({
            flex: 7,
          })}
        >
          <HighlightedPost blog={props.mainBlog} />
        </div>
        <div
          class={css({
            flex: 0.7,
            display: 'flex',
          })}
        >
          <div
            class={css({
              flex: 1,
              borderRight: '0.5px solid #d9d9d9',
            })}
          ></div>
          <div
            class={css({
              flex: 1,
              borderLeft: '0.5px solid #d9d9d9',
            })}
          ></div>
        </div>
        <div
          class={css({
            flex: 3,
          })}
        >
          <div
            class={css({
              fontWeight: $theme.typography.font450.fontWeight,
              fontSize: $theme.typography.font550.fontSize,
              marginBottom: '20px',
              paddingTop: '40px',
              [$theme.mediaQuery?.md || '']: {
                paddingTop: '0px',
              },
            })}
          >
            Latest posts
          </div>
          <For each={props.blogs}>
            {(post: BlogProps) => <SmallPost blog={post} />}
          </For>
        </div>
      </div>
    </div>
  );
}

export function HighlightedPost(props: { blog: BlogProps }) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      })}
    >
      <Img
        src={props.blog.image}
        $override={{
          Root: {
            $style: { width: '100%' },
          },
        }}
      />
      <h2
        class={css({
          marginTop: $theme.sizing.scale700,
          marginBottom: $theme.sizing.scale400,
          fontWeight: $theme.typography.font550.fontWeight,
          fontSize: $theme.typography.font650.fontSize,
        })}
      >
        {props.blog.title}
      </h2>
      <div
        class={css({
          fontWeight: $theme.typography.font450.fontWeight,
          fontSize: $theme.typography.font350.fontSize,
          color: '#7d7d7d',
        })}
      >
        {props.blog.published_date}
      </div>
    </div>
  );
}

export function SmallPost(props: { blog: BlogProps }) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        display: 'flex',
        flexDirection: 'row',
        marginBottom: $theme.sizing.scale700,
      })}
    >
      <div
        class={css({
          flex: 4,
          alignSelf: 'flex-start',
        })}
      >
        <Img
          src={props.blog.image}
          $override={{
            Root: {
              $style: {
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              },
            },
          }}
        />
      </div>
      <div
        class={css({
          flex: 6,
          paddingLeft: '15px',
          letterSpacing: '0.025em',
          lineHeight: '1.5',
        })}
      >
        <div
          class={css({
            fontWeight: $theme.typography.font400.fontWeight,
            fontSize: $theme.typography.font350.fontSize,
          })}
        >
          {props.blog.title}
        </div>
        <div
          class={css({
            fontWeight: $theme.typography.font400.fontWeight,
            fontSize: $theme.typography.font250.fontSize,
            color: '#7d7d7d',
          })}
        >
          {props.blog.published_date}
        </div>
      </div>
    </div>
  );
}
