import { isServer } from 'solid-js/web';

function preloadImg(img: string) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = img;
  document.head.appendChild(link);

  return Promise.resolve();
}

function preloadImgFromImage(img: string) {
  const image = new Image();
  image.src = img;

  return new Promise((resolve, reject) => {
    image.addEventListener('load', resolve);
    image.addEventListener('error', reject);
  });
}

export function preloadImage(url: string | string[], appendHead = false) {
  if (isServer) {
    return Promise.resolve();
  }

  if (Array.isArray(url)) {
    return Promise.all(url.map(appendHead ? preloadImg : preloadImgFromImage));
  } else {
    if (appendHead) {
      return preloadImg(url);
    } else {
      return preloadImgFromImage(url);
    }
  }
}
