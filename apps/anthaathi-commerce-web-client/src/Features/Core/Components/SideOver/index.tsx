import {
  Dialog as HeadlessDialog,
  DialogOverlay,
  DialogPanel,
  Transition,
  TransitionChild,
} from 'solid-headless';
import { useStyletron } from '@anthaathi/solid-styletron';
import { useCssToken } from '~/Features/Core/Hooks/useCssToken';
import { children } from 'solid-js';
import { Button, Kind as ButtonKind } from '../Button';
import { IconTimesLarge } from '@anthaathi/oracle-apex-solid-icons';
import { DialogProps } from '../Dialog';

export enum Kind {
  Dialog,
  BottomShit,
}

export enum Size {
  Mini = 'mini',
}

export interface SideOverProps extends DialogProps {
  title?: string;
}

export function SideOver(props: SideOverProps) {
  const [css, $theme] = useStyletron();
  const cssVar = useCssToken();

  function closeModal() {
    props.setOpen(false);
  }

  function openModal() {
    props.setOpen(true);
  }

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
            // overflowY: 'auto',
            backgroundColor: 'rgba(66, 66, 66, 0.16)',
          })}
          onClose={() => closeModal()}
        >
          <div
            class={css({
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            })}
          >
            <TransitionChild
              enter={css({
                transitionProperty: 'all',
                transitionDuration: '400ms',
                transitionTimingFunction: 'ease',
              })}
              enterFrom={css({
                opacity: 0,
              })}
              enterTo={css({
                opacity: 1,
              })}
              leave={css({
                transitionProperty: 'all',
                transitionDuration: '300ms',
                transitionTimingFunction: 'ease',
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
            <span
              class={css({
                display: 'inline-block',
                height: '100vh',
                alignItems: 'middle',
              })}
              aria-hidden="true"
            >
              &#8203;
            </span>

            <TransitionChild
              enter={css({
                transitionProperty: 'all',
                transitionDuration: '400ms',
                transitionTimingFunction: 'ease',
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
                transitionProperty: 'all',
                transitionDuration: '300ms',
                transitionTimingFunction: 'ease',
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
                    position: 'relative',
                    height: 'calc(100vh - 4rem)',
                    paddingBottom: cssVar(
                      'dialog-inner-padding-bottom',
                      '2rem',
                    ),
                    paddingTop: cssVar('dialog-inner-padding-top', '2rem'),
                    paddingLeft: cssVar('dialog-inner-padding', '2rem'),
                    paddingRight: cssVar('dialog-inner-padding', '2rem'),
                    backgroundColor: cssVar('dialog-background-color', '#FFF'),
                    [$theme.mediaQuery?.sm || '']: {
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
                    maxWidth: '100vw',
                    overflowY: 'auto',
                  },
                  props.$size === Size.Mini
                    ? {
                        maxWidth: '850px',
                      }
                    : {},
                  typeof props.$size === 'string'
                    ? {
                        maxWidth: props.$size,
                      }
                    : {},
                  props?.$override?.Panel?.$style,
                ])}
              >
                <div
                  class={css({
                    display: 'flex',
                    justifyContent: props.title ? 'space-between' : 'flex-end',
                    paddingLeft: $theme.sizing.scale400,
                    paddingRight: $theme.sizing.scale400,
                    alignItems: 'center',
                  })}
                >
                  {props.title && (
                    <h4
                      class={css([
                        $theme.typography.HeadingSmall,
                        {
                          marginTop: 0,
                          marginBottom: 0,
                          fontWeight: 500,
                        },
                      ])}
                    >
                      {props.title}
                    </h4>
                  )}
                  <Button
                    $override={{
                      Root: {
                        style: {
                          borderTopRightRadius: '50%',
                          borderTopLeftRadius: '50%',
                          borderBottomRightRadius: '50%',
                          borderBottomLeftRadius: '50%',
                          paddingLeft: '8px',
                          paddingRight: '8px',
                          paddingBottom: '8px',
                          paddingTop: '8px',
                        },
                      },
                    }}
                    onClick={() => {
                      props.setOpen(false);
                    }}
                    $kind={ButtonKind.Secondary}
                    $startEnhancer={() => {
                      return <IconTimesLarge height="24px" width="24px" />;
                    }}
                  />
                </div>
                {children(() => props.children)}
              </DialogPanel>
            </TransitionChild>
          </div>
        </HeadlessDialog>
      </Transition>
    </>
  );
}
