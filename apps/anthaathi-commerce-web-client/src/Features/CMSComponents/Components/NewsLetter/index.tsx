import { createEffect, createSignal } from 'solid-js';
import { Dialog, Kind as DialogKind } from '~/Features/Core/Components/Dialog';
import { useStyletron } from '@anthaathi/solid-styletron';
import { preloadImage } from '~/utils/preload-image';
import { EmailSignup } from '~/Features/CMSComponents/Components/EmailSignup';
import { Img } from '~/Features/Core/Components/Image';
import { Button, Kind } from '~/Features/Core/Components/Button';

const newsLetterKey = '____NEWS_LETTER';

export const NewsLetter = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  const [css, $theme] = useStyletron();

  function remindMeLater() {
    localStorage.setItem(newsLetterKey, new Date().getTime() + '');
    setIsOpen(false);
  }

  createEffect(() => {
    let shouldLoad = true;

    const newsLetterValue = +(localStorage.getItem(newsLetterKey) || 'NaN');

    if (!isNaN(newsLetterValue)) {
      const closeDateKey = new Date(newsLetterValue);

      closeDateKey.setMonth(closeDateKey.getMonth() + 1);

      shouldLoad = closeDateKey < new Date();
    }

    if (!shouldLoad) {
      return;
    }

    Promise.all([
      preloadImage(
        'https://cdn.shopify.com/s/files/1/0648/1303/9842/files/office-furniture-grey-chairs_1000x_8a2683aa-b3bd-4816-9ae5-3098b868d287_1000x.webp?v=1653582461',
      ),
      new Promise((resolve) => {
        setTimeout(resolve, 10_000);
      }),
    ]).then(() => {
      setIsOpen(true);
    });
  });

  const DialogContent = () => {
    return (
      <>
        <div
          class={css({
            display: 'flex',
            flexDirection: 'column',
            [$theme.mediaQuery?.md || '']: {
              flexDirection: 'row',
            },
          })}
        >
          <div
            class={css({
              width: '100%',
              display: 'none',
              [$theme.mediaQuery?.md || '']: {
                width: '50%',
                display: 'block',
              },
            })}
          >
            <Img
              src="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/office-furniture-grey-chairs_1000x_8a2683aa-b3bd-4816-9ae5-3098b868d287_1000x.webp?v=1653582461"
              alt=""
              $override={{
                Root: {
                  $style: {
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  },
                },
              }}
            />
          </div>

          <div
            class={css({
              width: `calc(100% - ${$theme.sizing.scale400} - ${$theme.sizing.scale400})`,
              paddingLeft: $theme.sizing.scale400,
              paddingRight: $theme.sizing.scale400,

              [$theme.mediaQuery?.md || '']: {
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                maxHeight: '80vh',
                height: '520px',
                paddingLeft: $theme.sizing.scale400,
                paddingRight: $theme.sizing.scale400,
                alignItems: 'center',
                placeContent: 'center',
              },
            })}
          >
            <EmailSignup />

            <Button $kind={Kind.Tertiary} onClick={() => remindMeLater()}>
              Remind me later
            </Button>
          </div>
        </div>
      </>
    );
  };

  return (
    <Dialog
      isOpen={isOpen}
      setOpen={(input) => setIsOpen(input)}
      $kind={DialogKind.BottomShit}
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
