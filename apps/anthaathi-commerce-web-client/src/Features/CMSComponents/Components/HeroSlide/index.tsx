import { useStyletron } from '@anthaathi/solid-styletron';

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
      })}
    >
      <img
        src={props.backgroundImageSrc}
        alt="image"
        class={css({
          width: '100%',
          height: '520px',
          objectFit: 'cover',
          objectPosition: 'right bottom',
          [$theme.mediaQuery.xs]: {
            objectPosition: 'left bottom',
          },
        })}
      />
      <div
        class={css({
          position: 'absolute',
          bottom: '50px',
          left: '10%',
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
          class={css({ color: '#fff', fontSize: '24px', fontWeight: 'normal' })}
        >
          {props.subTitle}
        </p>
        <div
          onclick={props.handlePress}
          class={css({
            textAlign: 'center',
            backgroundColor: '#fff',
            paddingTop: '10px',
            paddingBottom: '10px',
            color: '#000',
            width: '160px',
            fontWeight: 'bold',
            fontSize: '18px',
            borderRadius: '4px',
            ':hover': { cursor: 'pointer' },
          })}
        >
          {props.buttonTitle}
        </div>
      </div>
    </div>
  );
}