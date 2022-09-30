import { useStyletron } from '@anthaathi/solid-styletron';
import { Link } from '@solidjs/router';
import { For } from 'solid-js';
import { Img } from '~/Features/Core/Components/Image';

export function BlogPostJournal() {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: $theme.sizing.maxWidth,
        paddingLeft: $theme.sizing.scale1000,
        paddingRight: $theme.sizing.scale1000,
      })}
    >
      <div
        class={css({
          marginBottom: '40px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        })}
      >
        <header
          class={css({
            flex: 1,
            fontSize: '29px',
          })}
        >
          <div>From the journal</div>
        </header>
        <div
          class={css({
            paddingLeft: '10px',
            paddingRight: '10px',
          })}
        >
          <Link
            href={''}
            class={css({
              color: 'black',
              fontWeight: 700,
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
            })}
          >
            View all
          </Link>
        </div>
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
          <HighlightedPost
            imgSrc="https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/Fathers-day-recipe-ideas-by-fresh-fruit-company-in-Dubai-1200x600_1080x.jpg?v=1653586976"
            title="3 Fantastic Father’s Day Meals with help from NRTC Fresh"
            date="MAY 26, 2022"
          />
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
              fontSize: '22px',
              fontWeight: 300,
              marginBottom: '20px',
              paddingTop: '40px',
              [$theme.mediaQuery?.md || '']: {
                paddingTop: '0px',
              },
            })}
          >
            Latest posts
          </div>
          <For each={LatestPosts}>
            {(post: BlogPostProps) => (
              <SmallPost
                imgSrc={post.imgSrc}
                title={post.title}
                date={post.date}
              />
            )}
          </For>
        </div>
      </div>
    </div>
  );
}

export interface BlogPostProps {
  imgSrc: string;
  title: string;
  date: string;
}

export function HighlightedPost(props: BlogPostProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      })}
    >
      <Img src={props.imgSrc} class={css({ width: '100%' })} />
      <h2>{props.title}</h2>
      <div>{props.date}</div>
    </div>
  );
}

export function SmallPost(props: BlogPostProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '20px',
      })}
    >
      <div
        class={css({
          flex: 4,
          alignSelf: 'flex-start',
        })}
      >
        <Img
          src={props.imgSrc}
          class={css({
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          })}
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
        <Link
          href={'/'}
          class={css({
            fontSize: '17px',
            fontWeight: 400,
            color: '#000000',
            textDecoration: 'none',
            marginBottom: '20px',
          })}
        >
          {props.title}
        </Link>
        <div
          class={css({
            fontSize: '14px',
            fontWeight: 400,
            marginBottom: '2px',
            marginRight: '2px',
          })}
        >
          {props.date}
        </div>
      </div>
    </div>
  );
}

const LatestPosts: BlogPostProps[] = [
  {
    imgSrc:
      'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/5-ways-to-reduce-food-wastage-with-Fresh-fruits-and-Vegetables-1200x600_360x.jpg?v=1653586497',
    title: '5 Fruit and Vegetable preparation tips with NRTC Fresh',
    date: 'MAY 26, 2022',
  },
  {
    imgSrc:
      'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/5-tips-to-cook-delicious-vegetable-online-Dubai-1200x600_360x.jpg?v=1653586237',
    title: '5 tips to cook delicious Vegetables from NRTC Fresh',
    date: 'MAY 26, 2022',
  },
  {
    imgSrc:
      'https://cdn.shopify.com/s/files/1/0648/1303/9842/articles/Make-perfect-Veggie-burger-with-online-vegetables-Dubai-1200x600_360x.jpg?v=1653585741',
    title: 'How To Make The Perfect Veggie Burger With NRTC Fresh Vegetables',
    date: 'MAY 26, 2022',
  },
];
