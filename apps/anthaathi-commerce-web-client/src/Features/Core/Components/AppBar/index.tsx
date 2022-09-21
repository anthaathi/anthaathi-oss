import { useStyletron } from '@anthaathi/solid-styletron';
import { Searchbar } from '../Searchbar';

export function AppBar() {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        display: 'flex',
        alignItems: 'center',
        height: '64px',
        padding: '0 12px',
      })}
    >
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
            paddingTop: $theme.sizing.scale500,
            paddingBottom: $theme.sizing.scale500,
            position: 'relative',
          })}
        >
          <div
            class={css({
              position: 'absolute',
              left: 0,
            })}
          >
            <Searchbar />
          </div>

          <span class={css({ flexGrow: 1 })} />

          <img
            src="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/logo-oxvdmbxi6g2vpdrt9kcwy3xyhpvajr03in9rykvzfk_220x@2x.png?v=1653569545"
            alt=""
            class={css({ height: '38px', width: 'auto' })}
          />

          <span class={css({ flexGrow: 1 })} />
        </div>
      </div>
    </div>
  );
}
