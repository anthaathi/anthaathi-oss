import { useResponsiveStyletron } from '@anthaathi/solid-styletron';
import { For } from 'solid-js';
import { Button, Kind } from '~/Features/Core/Components/Button';
import {
  IconArrowLeftLarge,
  IconArrowRightLarge,
} from '@anthaathi/oracle-apex-solid-icons';

export function SplitSlides() {
  const [css, $theme] = useResponsiveStyletron();

  return (
    <div
      class={css({
        display: 'flex',
        flexWrap: 'nowrap',
        scrollSnapType: 'x mandatory',
        overflowY: 'hidden',
        scrollbarWidth: 'none',
        flexDirection: 'row',
        height: ['750px', '750px', '750px', '750px'],
        backgroundColor: '#EEE',
        position: 'relative',
        '::-webkit-scrollbar': {
          display: 'none',
        },
      })}
    >
      <For each={[{}, {}]}>
        {(value) => {
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
                <img
                  src="//cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_300x.jpg?v=1653569634"
                  data-aspectratio="2.018728437654017"
                  data-sizes="auto"
                  alt=""
                  class={css({
                    objectPosition: 'center center',
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                  })}
                  data-srcset="//cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_180x.jpg?v=1653569634 180w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_360x.jpg?v=1653569634 360w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_540x.jpg?v=1653569634 540w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_720x.jpg?v=1653569634 720w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_900x.jpg?v=1653569634 900w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_1080x.jpg?v=1653569634 1080w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_1296x.jpg?v=1653569634 1296w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_1512x.jpg?v=1653569634 1512w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_1728x.jpg?v=1653569634 1728w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_1944x.jpg?v=1653569634 1944w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_2160x.jpg?v=1653569634 2160w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_2376x.jpg?v=1653569634 2376w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_2592x.jpg?v=1653569634 2592w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_2808x.jpg?v=1653569634 2808w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_3024x.jpg?v=1653569634 3024w"
                  sizes="655px"
                  srcSet="//cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_180x.jpg?v=1653569634 180w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_360x.jpg?v=1653569634 360w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_540x.jpg?v=1653569634 540w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_720x.jpg?v=1653569634 720w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_900x.jpg?v=1653569634 900w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_1080x.jpg?v=1653569634 1080w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_1296x.jpg?v=1653569634 1296w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_1512x.jpg?v=1653569634 1512w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_1728x.jpg?v=1653569634 1728w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_1944x.jpg?v=1653569634 1944w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_2160x.jpg?v=1653569634 2160w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_2376x.jpg?v=1653569634 2376w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_2592x.jpg?v=1653569634 2592w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_2808x.jpg?v=1653569634 2808w, //cdn.shopify.com/s/files/1/0648/1303/9842/files/ripe-red-strawberries-in-a-white-bowl_3024x.jpg?v=1653569634 3024w"
                />
              </div>
              <div
                class={css({
                  display: 'flex',
                  flexDirection: 'column',
                  verticalAlign: 'center',
                  placeContent: 'center',
                  paddingTop: $theme.sizing.scale1000,
                  paddingBottom: $theme.sizing.scale1000,
                  width: '100%',
                  paddingLeft: $theme.sizing.scale500,
                  paddingRight: $theme.sizing.scale500,
                  [$theme.mediaQuery?.md || '']: {
                    width: '40%',
                    paddingLeft: $theme.sizing.scale1400,
                    paddingRight: $theme.sizing.scale1400,
                  },
                })}
              >
                <h1
                  class={css({ ...$theme.typography.DisplaySmall, margin: 0 })}
                >
                  Something amazing
                </h1>
                <h3
                  class={css({
                    ...$theme.typography.LabelLarge,
                    maxWidth: '80%',
                  })}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto, consequatur enim error facere id illo laudantium
                  nam possimus quaerat quam quidem quos repudiandae, rerum sed
                  sint tempore, vitae voluptate voluptatem?
                </h3>
              </div>
            </div>
          );
        }}
      </For>

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
              },
            },
          }}
          $startEnhancer={() => (
            <IconArrowLeftLarge width="21px" height="21px" />
          )}
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
              },
            },
          }}
          $startEnhancer={() => (
            <IconArrowRightLarge width="21px" height="21px" />
          )}
        />
      </div>
    </div>
  );
}
