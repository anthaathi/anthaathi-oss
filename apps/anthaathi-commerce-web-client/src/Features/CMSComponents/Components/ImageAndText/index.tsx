import { useStyletron } from '@anthaathi/solid-styletron';
import { Button, Kind, Size } from '~/Features/Core/Components/Button';
import { useCssToken } from '~/Features/Core/Hooks/useCssToken';

export function ImageAndText() {
  const [css, $theme] = useStyletron();

  const cssVar = useCssToken();

  return (
    <div
      data-component="image-and-text"
      class={css({
        backgroundColor: cssVar('image-and-text-background-color', '#EEE'),
      })}
    >
      <div
        class={css({
          margin: '0 auto',
          width: '100%',
          maxWidth: $theme.sizing.maxWidth,
          flexDirection: 'column-reverse',
          [$theme.mediaQuery.md]: {
            flexDirection: 'row',
            paddingTop: '6rem',
          },
          paddingTop: '4rem',
          display: 'flex',
          paddingBottom: '6rem',
        })}
      >
        <div
          class={css({
            display: 'flex',
            flexDirection: 'column',
            width: `calc(100% - ${$theme.sizing.scale500} - ${$theme.sizing.scale500})`,
            paddingLeft: $theme.sizing.scale500,
            paddingRight: $theme.sizing.scale500,
            [$theme.mediaQuery.md]: {
              width: '50%',
              paddingLeft: $theme.sizing.scale1200,
              paddingRight: $theme.sizing.scale1200,
            },
          })}
        >
          <h3
            class={css({
              ...$theme.typography.HeadingMedium,
              marginTop: 0,
              marginBottom: 0,
            })}
          >
            About NRTCFresh
          </h3>
          <p
            class={css({
              ...$theme.typography.ParagraphLarge,
              width: '100%',
            })}
          >
            For more than 40 years NRTC has been successfully catering to the
            demands of both local and international markets and is one of the
            leading importers and exporters of fresh fruits and vegetables in
            the Middle East.
          </p>

          <div
            class={css({
              paddingBottom: '2rem',
              [$theme.mediaQuery.md]: {
                paddingBottom: 0,
              },
            })}
          >
            <Button $size={Size.Large} $kind={Kind.Primary}>
              Know More
            </Button>
          </div>
        </div>

        <div
          class={css({
            display: 'flex',
            position: 'relative',
            width: '100%',
            alignItems: 'center',
            placeContent: 'center',
            [$theme.mediaQuery.md]: {
              width: '50%',
            },
          })}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fruit-bowl-with-linnens_360x.jpg?v=1653677718"
            alt=""
            class={css({
              width: '100%',
              [$theme.mediaQuery.md]: {
                transform: 'translate(50px,50px)',
              },
            })}
          />

          <img
            src="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/colorful-fresh-vegetables-flatlay_360x.jpg?v=1653677881"
            alt=""
            class={css({
              display: 'none',
              [$theme.mediaQuery.md]: {
                display: 'block',
              },
            })}
          />
        </div>
      </div>
    </div>
  );
}
