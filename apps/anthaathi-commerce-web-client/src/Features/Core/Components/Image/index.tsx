import { JSX } from 'solid-js';

export function loader(url: string) {
  return {
    src: '',
  };
}

export interface ImageProps {}

export function Image(
  props: JSX.ImageSVGAttributes<HTMLImageElement> & ImageProps,
) {
  return <img {...props} onLoad={() => {}} />;
}
