import { useStyletron } from '@anthaathi/solid-styletron';
import { Img } from '~/Features/Core/Components/Image';
import { IconTimesLarge } from '@anthaathi/oracle-apex-solid-icons';
import { Button } from '~/Features/Core/Components/Button';

export default function MobileAppPromoter() {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        display: 'flex',
        backgroundColor: '#EEE',
        alignItems: 'center',
        paddingLeft: $theme.sizing.scale500,
        paddingTop: $theme.sizing.scale500,
        paddingBottom: $theme.sizing.scale500,
        paddingRight: $theme.sizing.scale500,
        [$theme.mediaQuery?.md || '']: {
          display: 'none',
        },
      })}
    >
      <div
        role="button"
        class={css({
          width: '36px',
          display: 'flex',
          alignItems: 'center',
          placeContent: 'center',
        })}
      >
        <IconTimesLarge width="20px" />
      </div>
      <Img
        src="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/everyday_1_256x256.png?v=1662529180"
        height="56px"
        width="auto"
      />

      <div
        class={css({
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '12px',
        })}
      >
        <h2
          class={css({
            ...$theme.typography.HeadingSmall,
            marginTop: 0,
            marginBottom: 0,
          })}
        >
          NRTC Fresh
        </h2>
        <h6
          class={css({
            marginTop: 0,
            marginBottom: 0,
            ...$theme.typography.LabelSmall,
          })}
        >
          Get the Nessa App now
        </h6>
      </div>

      <span class={css({ flexGrow: 1 })} />

      <Button>Download</Button>
    </div>
  );
}
