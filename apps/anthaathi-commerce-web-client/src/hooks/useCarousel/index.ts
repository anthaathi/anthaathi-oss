import { createSignal } from 'solid-js';

export const useCarousel = (divRef: () => HTMLElement | null) => {
  const [indexNumber, setIndexNumber] = createSignal(0);
 
  async function getCurrentItem() {
    const ref = divRef();
    if (!ref) {
      return 0;
    }

    let currentWidth = 0;
    let index = 0;

    for (let child of ref.children) {
      if (ref.scrollLeft <= currentWidth) {
        return index;
      }

      index++;
      currentWidth += child.clientWidth;
    }

    return ref.children.length - 1;
  }

  async function scrollNext() {
    const ref = divRef();
    if (!ref) {
      return;
    }

    const currentItemIndex = getCurrentItem();

    ref.children
      .item(
        (await currentItemIndex) === ref.children.length - 1
          ? 0
          : (await currentItemIndex) + 1,
      )
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest',
      });
  }

  async function scrollPrevious() {
    const ref = divRef();
    if (!ref) {
      return;
    }

    const currentItemIndex = getCurrentItem();

    const goToIndex =
      (await currentItemIndex) === 0
        ? ref.children.length - 1
        : (await currentItemIndex) - 1;

    ref.children.item(goToIndex)?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest',
    });
  }

  function scrollToIndex(scrollIndex: number) {
    const ref = divRef();
    if (!ref) {
      return;
    }

    ref.children.item(scrollIndex)?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest',
    });
    setIndexNumber(scrollIndex);
  }

  return {
    indexNumber,
    scrollNext,
    scrollPrevious,
    scrollToIndex,
  };
};
