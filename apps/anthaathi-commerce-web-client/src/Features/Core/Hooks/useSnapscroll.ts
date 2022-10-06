import { onCleanup } from 'solid-js';

export function useSnapscroll(ref: () => HTMLElement) {
  const calculateWidth = () => {
    const returnValue: number[] = [];

    for (let child of ref().children) {
      returnValue.push(child.clientWidth);
    }

    return returnValue;
  };

  const getPrevious = () => {
    const children = ref().children;

    return children.item(0);
  };

  onCleanup(() => {});

  return {
    scrollLeft: () => {},
    scrollRight: () => {},
  };
}
