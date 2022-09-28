import { isServer } from 'solid-js/web';

function preloadImg(img: string) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = img;
  document.head.appendChild(link);
}

export function preloadImage(url: string | string[]) {
  if (isServer) {
    return;
  }

  if (Array.isArray(url)) {
    url.forEach(preloadImg);
  } else {
    preloadImg(url);
  }
}
