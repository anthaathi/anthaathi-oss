import { useResponsiveStyletron } from '@anthaathi/solid-styletron';
import { createSignal, For, onMount, Show } from 'solid-js';
import { Button, Kind } from '~/Features/Core/Components/Button';
import {
  IconArrowLeftLarge,
  IconArrowRightLarge,
} from '@anthaathi/oracle-apex-solid-icons';
import { Img } from '~/Features/Core/Components/Image';
import { useCarousel } from '~/hooks/useCarousel';

export function BannerSlide(props: {
  list: { id: string; imgSrc: string; href?: string }[];
}) {
  const [css, $theme] = useResponsiveStyletron();
  let divRef: HTMLDivElement | null;
  
  const { indexNumber, scrollNext, scrollPrevious, scrollToIndex } = useCarousel(() => divRef);
  const [condition] = createSignal(false);

  return (
    <div
      class={css({
        maxWidth: $theme.sizing.maxWidth,
        margin: '0 auto',
        width: `calc(100% - ${$theme.sizing.scale500} - ${$theme.sizing.scale500})`,
        position: 'relative',
        paddingTop: $theme.sizing.scale700,
      })}
    >
      <div
        ref={(ref) => (divRef = ref)}
        class={css({
          display: 'flex',
          flexWrap: 'nowrap',
          scrollSnapType: 'x mandatory',
          overflowY: 'hidden',
          scrollbarWidth: 'none',
          flexDirection: 'row',
          maxHeight: '60vh',
          height: ['240px', '280px', '320px', '420px'],
          backgroundColor: '#EEE',
          '::-webkit-scrollbar': {
            display: 'none',
          },
          scrollBehavior: 'smooth',
        })}
      >
        <For each={props.list}>
          {(item) => {
            return (
              <div
                class={css({
                  scrollSnapAlign: 'center',
                  flexShrink: 0,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  [$theme.mediaQuery?.md || '']: {
                    flexDirection: 'row',
                  },
                })}
              >
                <div
                  class={css({
                    flexGrow: 1,
                    width: '100%',
                    [$theme.mediaQuery?.md || '']: {
                      width: '60%',
                    },
                  })}
                >
                  <Img
                    src={item.imgSrc}
                    data-aspectratio="2.018728437654017"
                    data-sizes="auto"
                    alt=""
                    $override={{
                      Root: {
                        $style: {
                          objectPosition: 'center center',
                          height: '100%',
                          width: '100%',
                          objectFit: 'cover',
                        },
                      },
                    }}
                    data-srcset="//cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_180x.jpg?v=1653569634 180w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_360x.jpg?v=1653569634 360w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_540x.jpg?v=1653569634 540w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_720x.jpg?v=1653569634 720w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_900x.jpg?v=1653569634 900w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_1080x.jpg?v=1653569634 1080w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_1296x.jpg?v=1653569634 1296w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_1512x.jpg?v=1653569634 1512w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_1728x.jpg?v=1653569634 1728w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_1944x.jpg?v=1653569634 1944w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_2160x.jpg?v=1653569634 2160w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_2376x.jpg?v=1653569634 2376w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_2592x.jpg?v=1653569634 2592w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_2808x.jpg?v=1653569634 2808w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_3024x.jpg?v=1653569634 3024w"
                    sizes="655px"
                  />
                </div>
              </div>
            );
          }}
        </For>
      </div>

      <Show
        when={condition()}
        fallback={() => (
          <div
            class={css({
              marginTop: $theme.sizing.scale500,
              marginBottom: $theme.sizing.scale1200,
              display: 'flex',
              justifyContent: 'center',
            })}
          >
            <For each={props.list} fallback={<div>Loading...</div>}>
              {(_, index) => (
                <div
                  onClick={() => scrollToIndex(index())}
                  class={css({
                    marginLeft: $theme.sizing.scale200,
                    marginRight: $theme.sizing.scale200,
                    background:
                      indexNumber() === index() ? '#108742' : '#C8F9DC',
                    height: '10px',
                    width: '20px',
                    borderRadius: '35%',
                    ':hover': {
                      background: '#5AED95',
                      cursor: 'pointer',
                    },
                  })}
                />
              )}
            </For>
          </div>
        )}
      >
        <div
          class={css({
            position: 'absolute',
            right: '36px',
            bottom: '-22px',
            zIndex: 1,
            display: 'flex',
          })}
        >
          <Button
            $kind={Kind.Secondary}
            $override={{
              Root: {
                style: {
                  borderTopLeftRadius: '50%',
                  borderTopRightRadius: '50%',
                  borderBottomLeftRadius: '50%',
                  borderBottomRightRadius: '50%',
                  paddingLeft: '12px',
                  paddingRight: '12px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  marginLeft: $theme.sizing.scale200,
                  marginRight: $theme.sizing.scale200,
                },
              },
            }}
            $startEnhancer={() => (
              <IconArrowLeftLarge width="21px" height="21px" />
            )}
            onClick={() => {
              scrollPrevious();
            }}
          />
          <Button
            $kind={Kind.Secondary}
            $override={{
              Root: {
                style: {
                  borderTopLeftRadius: '50%',
                  borderTopRightRadius: '50%',
                  borderBottomLeftRadius: '50%',
                  borderBottomRightRadius: '50%',
                  paddingLeft: '12px',
                  paddingRight: '12px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  marginLeft: $theme.sizing.scale200,
                  marginRight: $theme.sizing.scale200,
                },
              },
            }}
            onClick={() => scrollNext()}
            $startEnhancer={() => (
              <IconArrowRightLarge width="21px" height="21px" />
            )}
          />
        </div>
      </Show>
    </div>
  );
}
