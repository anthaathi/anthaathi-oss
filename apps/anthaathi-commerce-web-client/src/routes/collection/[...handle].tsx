import { useStyletron } from '@anthaathi/solid-styletron';
import { Breadcrumbs } from '~/Features/Core/Components/Breadcrumbs';

export default function () {
  const [css, $theme] = useStyletron();

  return (
    <>
      <Breadcrumbs
        list={[
          { key: '1', title: 'Home', link: '/' },
          { key: '2', title: 'Collections', link: '/' },
        ]}
      />
      <div
        class={css({
          maxWidth: $theme.sizing.maxWidth,
          margin: '0 auto',
          width: '100%',
        })}
      >
        <div
          class={css({
            display: 'flex',
          })}
        >
          <div
            class={css({
              width: '320px',
              paddingTop: $theme.sizing.scale200,
              paddingBottom: $theme.sizing.scale200,
            })}
          >
            Hello world
          </div>
          <div class={css({ flexGrow: 1 })}>Hello world</div>
        </div>
      </div>
    </>
  );
}
