import { useStyletron } from 'baseui';
import { HeadingXXLarge } from 'baseui/typography';

export function Header() {
  const [css, $theme] = useStyletron();

  return (
    <header
      className={css({
        paddingTop: $theme.sizing.scale3200,
        paddingBottom: $theme.sizing.scale900,
        backgroundImage:
          'url(https://www.nrtcfresh.com/wp-content/uploads/2020/11/nrtc-img-bg.jpg)',
        backgroundSize: 'cover',
      })}
      role="banner"
    >
      <div
        className={css({
          maxWidth: '1200px',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
        })}
      >
        <div
          className={css({
            paddingLeft: '2rem',
            paddingRight: '2rem',
          })}
        >
          <HeadingXXLarge marginTop="0" marginBottom="0">
            <img
              src="https://www.nrtcfresh.com/wp-content/uploads/elementor/thumbs/logo-oxvdmbxi6g2vpdrt9kcwy3xyhpvajr03in9rykvzfk.png"
              alt=""
            />
          </HeadingXXLarge>
        </div>
      </div>
    </header>
  );
}
