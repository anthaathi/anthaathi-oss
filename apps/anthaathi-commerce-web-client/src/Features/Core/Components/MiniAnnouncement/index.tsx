import { useStyletron } from '@anthaathi/solid-styletron';
import { Link } from '@solidjs/router';
import { For } from 'solid-js';
import AngleLeft from '../../../../icons/angle-left.svg';
import AngleRight from '../../../../icons/angle-right.svg';
import { useSnapscroll } from '../../Hooks/useSnapscroll';
import { Button, Kind } from '~/Features/Core/Components/Button';
import { IconGlobeSmall } from '@anthaathi/oracle-apex-solid-icons';
import { useCssToken } from '~/Features/Core/Hooks/useCssToken';

export function MiniAnnouncement() {
  let ref: HTMLDivElement | null = null;

  const [css, $theme] = useStyletron();

  const { scrollLeft, scrollRight } = useSnapscroll(() => ref!);
  const cssVar = useCssToken();

  return (
    <div
      data-type="mini-announcement"
      class={css({
        color: cssVar('primary-b-color', '#FFF'),
        background: cssVar('primary-color', '#118b44'),
        paddingTop: $theme.sizing.scale100,
        paddingBottom: $theme.sizing.scale100,
        paddingLeft: '12px',
        paddingRight: '12px',
        position: 'relative',
      })}
    >
      <div
        class={css({
          maxWidth: $theme.sizing.maxWidth,
          textAlign: 'center',
          margin: '0 auto',
          position: 'relative',
        })}
      >
        <div
          class={css({
            position: 'absolute',
            display: 'none',
            [$theme.mediaQuery?.md || '']: {
              display: 'block',
            },
          })}
        >
          <button
            class={css({
              display: 'flex',
              alignItems: 'center',
              placeContent: 'center',
              width: '24px',
              height: '24px',
              border: 'none',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, .6)',
              cursor: 'pointer',
            })}
            onClick={scrollLeft}
          >
            <AngleLeft />
          </button>
        </div>
        <div
          class={css({
            display: 'flex',
            flexWrap: 'nowrap',
            scrollSnapType: 'x mandatory',
            overflowY: 'hidden',
            scrollbarWidth: 'none',
            flexDirection: 'row',
            '::-webkit-scrollbar': {
              display: 'none',
            },
          })}
          ref={(p) => (ref = p)}
        >
          <For each={[{}, {}]}>
            {() => {
              return (
                <Link
                  href="/"
                  class={css({
                    width: '100%',
                    flexShrink: 0,
                    textDecoration: 'none',
                    color: 'currentColor',
                    scrollSnapAlign: 'center',
                  })}
                  draggable={false}
                >
                  <h6
                    class={css([
                      $theme.typography.LabelMedium,
                      {
                        marginTop: $theme.sizing.scale0,
                        marginBottom: $theme.sizing.scale0,
                        fontWeight: 'normal',
                      },
                    ])}
                  >
                    FREE DELIVERY | MINIMUM ORDER AED 60/-
                  </h6>
                </Link>
              );
            }}
          </For>
        </div>

        <div
          class={css({
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            display: 'none',
            [$theme.mediaQuery?.md || '']: {
              display: 'flex',
            },
          })}
        >
          <button
            class={css({
              display: 'flex',
              alignItems: 'center',
              placeContent: 'center',
              width: '24px',
              height: '24px',
              border: 'none',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, .6)',
              cursor: 'pointer',
            })}
            onClick={scrollRight}
          >
            <AngleRight />
          </button>
        </div>

        <div
          class={css({
            position: 'absolute',
            right: '28px',
            top: 0,
            bottom: 0,
            display: 'none',
            alignItems: 'center',
            [$theme.mediaQuery?.md || '']: {
              display: 'flex',
            },
            color: '#FFF',
          })}
        >
          <Button
            $startEnhancer={() => {
              return <IconGlobeSmall class={css({ fill: '#FFF' })} />;
            }}
            $kind={Kind.Tertiary}
          ></Button>
        </div>
      </div>

      <div></div>
    </div>
  );
}
