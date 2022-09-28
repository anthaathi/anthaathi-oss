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
          display: 'flex',
          paddingTop: '6rem',
          paddingBottom: '6rem',
        })}
      >
        <div
          class={css({
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            paddingLeft: $theme.sizing.scale1200,
            paddingRight: $theme.sizing.scale1200,
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

          <div>
            <Button $size={Size.Large} $kind={Kind.Primary}>
              Know More
            </Button>
          </div>
        </div>

        <div
          class={css({ display: 'flex', position: 'relative', width: '50%' })}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/fruit-bowl-with-linnens_360x.jpg?v=1653677718"
            alt=""
            class={css({ transform: 'translate(50px,50px)' })}
          />

          <img
            src="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/colorful-fresh-vegetables-flatlay_360x.jpg?v=1653677881"
            alt=""
            class={css({})}
          />
        </div>
      </div>
    </div>
  );
}
