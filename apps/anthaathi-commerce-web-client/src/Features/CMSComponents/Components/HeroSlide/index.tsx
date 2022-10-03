import { useStyletron } from '@anthaathi/solid-styletron';
import { Button, Kind, Size } from '~/Features/Core/Components/Button';
import { Img } from '~/Features/Core/Components/Image';

export interface HeroSlideProps {
  backgroundImageSrc: string;
  title: string;
  subTitle: string;
  buttonTitle: string;
  handlePress?: () => void;
}

export function HeroSlide(props: HeroSlideProps) {
  const [css, $theme] = useStyletron();
  return (
    <div
      class={css({
        position: 'relative',
        width: '100%',
      })}
    >
      <Img
        src={props.backgroundImageSrc}
        alt="image"
        $override={{
          Root: {
            $style: {
              width: '100%',
              height: '520px',
              objectFit: 'cover',
              objectPosition: 'right bottom',
              [$theme.mediaQuery?.xs || '']: {
                objectPosition: 'left bottom',
              },
            },
          },
        }}
      />
      <div
        class={css({
          position: 'absolute',
          bottom: '50px',
          left: 0,
          width: '100%',
        })}
      >
        <div
          class={css({
            maxWidth: $theme.sizing.maxWidth,
            width: `calc(100% - ${$theme.sizing.scale500} - ${$theme.sizing.scale500})`,
            margin: '0 auto',
            paddingLeft: $theme.sizing.scale500,
            paddingRight: $theme.sizing.scale500,
          })}
        >
          <p
            class={css({
              color: '#fff',
              fontWeight: 'bold',
              marginBottom: '0px',
              fontSize: '48px',
            })}
          >
            {props.title}
          </p>
          <p
            class={css({
              color: '#fff',
              fontSize: '24px',
              fontWeight: 'normal',
            })}
          >
            {props.subTitle}
          </p>
          <Button
            onClick={props.handlePress}
            $kind={Kind.Secondary}
            $size={Size.Large}
          >
            {props.buttonTitle}
          </Button>
        </div>
      </div>
    </div>
  );
}
