import { createEffect, createSignal } from 'solid-js';
import { Dialog } from '~/Features/Core/Components/Dialog';
import { useStyletron } from '@anthaathi/solid-styletron';
import { preloadImage } from '~/utils/preload-image';

export const NewsLetter = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  const [css] = useStyletron();

  createEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
      console.log('called');
    }, 2000);
  });

  preloadImage(
    'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/office-furniture-grey-chairs_1000x_8a2683aa-b3bd-4816-9ae5-3098b868d287_1000x.webp?v=1653582461',
  );

  const DialogContent = () => {
    return (
      <>
        <div class={css({ display: 'flex' })}>
          <img
            src="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/office-furniture-grey-chairs_1000x_8a2683aa-b3bd-4816-9ae5-3098b868d287_1000x.webp?v=1653582461"
            alt=""
          />

          <div></div>
        </div>
      </>
    );
  };

  return (
    <Dialog
      isOpen={isOpen}
      setOpen={(input) => setIsOpen(input)}
      $override={{
        Panel: {
          $style: {
            paddingLeft: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingRight: 0,
          },
        },
      }}
    >
      {() => <DialogContent />}
    </Dialog>
  );
};
