import { createSignal, JSX, onCleanup, onMount } from 'solid-js';
import { useStyletron } from '@anthaathi/solid-styletron';

export function loader(url: string) {
  return {
    src: url,
  };
}

export interface ImageProps {
  src: string;
  noLazy?: boolean;
}

export function Img(props: JSX.IntrinsicElements['img'] & ImageProps) {
  const [css, $theme] = useStyletron();
  const [isLoaded, setIsLoaded] = createSignal(false);
  const [shouldAnimate, setShouldAnimated] = createSignal(false);

  let observer: IntersectionObserver | null = null;

  let img: HTMLImageElement | null = null;

  onMount(() => {
    if ('IntersectionObserver' in window) {
      let options = {
        rootMargin: `${Math.abs((window.screen.height / 100) * 15)}px`,
        threshold: 1.0,
      };

      observer = new IntersectionObserver((entries) => {
        setShouldAnimated((prev) => {
          return prev || entries?.[0].isIntersecting;
        });
      }, options);

      if (img) {
        observer.observe(img);
      }
    } else {
      setShouldAnimated(true);
    }
  });

  onCleanup(() => {
    if (img && observer) {
      observer.unobserve(img);
    }
  });

  return (
    <img
      ref={(ref) => (img = ref)}
      {...props}
      {...loader(props.src)}
      onLoad={() => {
        setIsLoaded(true);
      }}
      loading={props.noLazy ? 'eager' : 'lazy'}
      class={
        css([
          {
            transitionTimingFunction: 'ease',
            transitionDuration: '.1s',
            transitionProperty: 'opacity,transform',
            transformOrigin: 'center center',
          },
          (isLoaded() && shouldAnimate()) || props.noLazy
            ? {
                opacity: 1,
                transform: 'scale(1)',
                [$theme.mediaQuery?.md || '']: {
                  transform: 'scale(1)',
                },
              }
            : {
                opacity: 0,
                transform: 'scale(.1)',
                [$theme.mediaQuery?.md || '']: {
                  transform: 'scale(.95)',
                },
              },
        ]) + (props.class ? ' ' + props.class : '')
      }
    />
  );
}
