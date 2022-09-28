import {
  Dialog as HeadlessDialog,
  DialogOverlay,
  DialogPanel,
  Transition,
  TransitionChild,
} from 'solid-headless';
import { useStyletron } from '@anthaathi/solid-styletron';
import { useCssToken } from '~/Features/Core/Hooks/useCssToken';
import { Accessor, children, createEffect, createSignal, JSX } from 'solid-js';
import { StyleObject } from 'styletron-standard';

export interface DialogProps {
  isOpen: Accessor<boolean>;
  setOpen: (input: boolean) => void;
  children: JSX.Element;
  $override?: {
    Panel?: {
      $style: StyleObject;
    };
  };
}

export function Dialog(props: DialogProps) {
  const [css] = useStyletron();
  const cssVar = useCssToken();

  function closeModal() {
    props.setOpen(false);
  }

  function openModal() {
    props.setOpen(true);
  }

  createEffect(() => {});

  return (
    <>
      <Transition appear show={props.isOpen()}>
        <HeadlessDialog
          isOpen
          class={css({
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10,
            overflowY: 'auto',
          })}
          onClose={() => closeModal()}
        >
          <div
            class={css({
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            })}
          >
            <TransitionChild
              enter={css({
                transitionTimingFunction: 'ease-out',
                transitionDuration: '300ms',
              })}
              enterFrom={css({
                opacity: 0,
              })}
              enterTo={css({
                opacity: 1,
              })}
              leave={css({
                transitionTimingFunction: 'ease-in',
                transitionDuration: '200ms',
              })}
              leaveFrom={css({
                opacity: 1,
              })}
              leaveTo={css({
                opacity: 0,
              })}
            >
              <DialogOverlay
                class={css({
                  position: 'fixed',
                  bottom: 0,
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: 99,
                  background: cssVar(
                    'dialog-overlay-color',
                    'rgba(255, 255, 255, .6)',
                  ),
                })}
              />
            </TransitionChild>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span class="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>

            <TransitionChild
              enter={css({
                transitionDuration: '300ms',
                transitionTimingFunction: 'ease-out',
              })}
              enterFrom={css({
                opacity: 0,
                scale: '95%',
              })}
              enterTo={css({
                opacity: 1,
                scale: '100%',
              })}
              leave={css({
                transitionDuration: 'ease-in',
                transitionTimingFunction: '200ms',
              })}
              leaveFrom={css({
                opacity: 1,
                scale: '100%',
              })}
              leaveTo={css({
                opacity: 0,
                scale: '95%',
              })}
              class={css({
                zIndex: 100,
              })}
            >
              <DialogPanel
                class={css([
                  {
                    paddingBottom: cssVar(
                      'dialog-inner-padding-bottom',
                      '2rem',
                    ),
                    paddingTop: cssVar('dialog-inner-padding-top', '2rem'),
                    paddingLeft: cssVar('dialog-inner-padding', '2rem'),
                    paddingRight: cssVar('dialog-inner-padding', '2rem'),
                    backgroundColor: cssVar('dialog-background-color', '#FFF'),
                    borderBottomLeftRadius: cssVar(
                      'dialog-border-bottom-left-radius',
                      '6px',
                    ),
                    borderBottomRightRadius: cssVar(
                      'dialog-border-bottom-right-radius',
                      '6px',
                    ),
                    borderTopLeftRadius: cssVar(
                      'dialog-border-bottom-left-radius',
                      '6px',
                    ),
                    borderTopRightRadius: cssVar(
                      'dialog-border-bottom-right-radius',
                      '6px',
                    ),
                  },
                  props?.$override?.Panel?.$style,
                ])}
              >
                {children(() => {
                  return props.children;
                })}
              </DialogPanel>
            </TransitionChild>
          </div>
        </HeadlessDialog>
      </Transition>
    </>
  );
}
