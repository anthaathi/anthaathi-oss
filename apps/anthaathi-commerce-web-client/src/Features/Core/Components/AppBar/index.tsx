import { useStyletron } from '@anthaathi/solid-styletron';
import { Searchbar } from '../Searchbar';
import { Button, Kind } from '../Button';
import {
  IconReorderSmall,
  IconShoppingCartLarge,
  IconUserLarge,
} from '@anthaathi/oracle-apex-solid-icons';
import { Link } from '@solidjs/router';
import { createSignal, For } from 'solid-js';
import { Transition, TransitionChild } from 'solid-headless';
import { Img } from '~/Features/Core/Components/Image';

export function AppBar() {
  const [css, $theme] = useStyletron();

  const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false);

  const [isOpen, _setIsOpen] = createSignal(true, {});

  let categoryHTML: HTMLDivElement;

  return (
    <nav
      class={css({
        position: 'sticky',
        top: 0,
        boxShadow: '0 0 25px rgb(0 0 0 / 10%)',
        backgroundColor: '#FFF',
        zIndex: 10,
      })}
    >
      <header
        data-type="app-bar"
        class={css({
          display: 'flex',
          alignItems: 'center',
          height: '64px',
          padding: '0 12px',
          borderBottom: '1px solid #EEE',
        })}
      >
        <div
          class={css({
            maxWidth: $theme.sizing.maxWidth,
            margin: '0 auto',
            width: '100%',
          })}
        >
          <div
            class={css({
              display: 'flex',
              paddingTop: $theme.sizing.scale500,
              paddingBottom: $theme.sizing.scale500,
              position: 'relative',
            })}
          >
            <div
              class={css({
                position: 'absolute',
                left: 0,
                display: 'none',
                [$theme.mediaQuery?.md || '']: {
                  display: 'flex',
                },
              })}
            >
              <Transition show={!isOpen()}>
                <TransitionChild
                  enter={css({
                    transitionDuration: '300ms',
                    transitionTimingFunction: 'ease-in',
                  })}
                  enterFrom={css({
                    opacity: 0,
                    maxWidth: 0,
                  })}
                  enterTo={css({
                    opacity: 1,
                    maxWidth: '1200px',
                  })}
                  leave={css({
                    transitionDuration: 'ease-out',
                    transitionTimingFunction: '200ms',
                  })}
                  leaveFrom={css({
                    opacity: 1,
                    maxWidth: '1200px',
                  })}
                  leaveTo={css({
                    opacity: 0,
                    maxWidth: 0,
                  })}
                >
                  <Button
                    $kind={Kind.Tertiary}
                    $startEnhancer={() => <IconReorderSmall />}
                    $override={{
                      Root: {
                        style: {
                          paddingLeft: '12px',
                          paddingRight: '12px',
                          paddingTop: '12px',
                          paddingBottom: '12px',
                          marginRight: '12px',
                        },
                      },
                    }}
                  />
                </TransitionChild>
              </Transition>
              <Searchbar />
            </div>

            <span class={css({ flexGrow: 1 })} />

            <Link href="/">
              <Img
                src="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/logo-oxvdmbxi6g2vpdrt9kcwy3xyhpvajr03in9rykvzfk_220x@2x.png?v=1653569545"
                alt=""
                class={css({ height: '38px', width: 'auto' })}
              />
            </Link>

            <span class={css({ flexGrow: 1 })} />

            <div
              class={css({
                position: 'absolute',
                right: 0,
                alignItems: 'center',
                display: 'none',
                [$theme.mediaQuery?.md || '']: {
                  display: 'flex',
                },
              })}
            >
              <Button
                $as={Link}
                href="/account"
                $kind={Kind.Tertiary}
                $startEnhancer={() => (
                  <IconUserLarge height="18px" width="18px" class={css({})} />
                )}
              >
                Account
              </Button>
              <Button
                $as={Link}
                $kind={Kind.Tertiary}
                href="/cart"
                $startEnhancer={() => (
                  <IconShoppingCartLarge
                    height="18px"
                    width="18px"
                    class={css({})}
                  />
                )}
              >
                Cart
              </Button>
            </div>
            <div
              class={css({
                position: 'absolute',
                right: 0,
                alignItems: 'center',
                display: 'flex',
                placeContent: 'center',
                [$theme.mediaQuery?.md || '']: {
                  display: 'none',
                },
              })}
            >
              <Button
                $kind={Kind.Tertiary}
                $startEnhancer={() => (
                  <IconShoppingCartLarge
                    height="18px"
                    width="18px"
                    class={css({})}
                  />
                )}
              />
              <Button
                onClick={() => {
                  setMobileMenuOpen((prev) => !prev);
                }}
                $kind={Kind.Tertiary}
                $startEnhancer={() => (
                  <IconReorderSmall
                    height="18px"
                    width="18px"
                    class={css({})}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </header>

      <div
        class={css({
          padding: $theme.sizing.scale500,
          [$theme.mediaQuery?.md || '']: {
            display: 'none',
          },
          margin: '0 auto',
          maxWidth: '520px',
        })}
        data-type="app-bar-search"
      >
        <Searchbar />
      </div>

      <div
        class={css({
          maxWidth: $theme.sizing.maxWidth,
          margin: '0 auto',
          alignItems: 'center',
          placeContent: 'center',
          display: 'none',
          [$theme.mediaQuery?.md || '']: {
            display: 'flex',
          },
          maxHeight: isOpen() ? '100px' : 0,
          transitionProperty: 'max-height',
          transitionDuration: '.2s',
          transitionTimingFunction: 'ease',
          overflow: 'hidden',
        })}
        data-type="categories"
        ref={(pref) => categoryHTML}
      >
        <For each={Categories}>
          {(category) => {
            return (
              <Button $as={Link} href="/" $kind={Kind.Tab}>
                {category.title}
              </Button>
            );
          }}
        </For>
      </div>

      <div
        data-type="mobile-menu"
        class={css({
          paddingBottom: mobileMenuOpen() ? $theme.sizing.scale300 : 0,
          maxHeight: mobileMenuOpen() ? '80vh' : '0',
          overflow: 'hidden',
          transition: 'all ease .2s',
        })}
      >
        <MobileMenu />
      </div>
    </nav>
  );
}

function MobileMenu() {
  const [css] = useStyletron();

  return (
    <ul
      class={css({
        marginLeft: 0,
        paddingLeft: 0,
        overflow: 'auto',
        height: '100%',
      })}
    >
      <For each={Categories}>
        {(category) => {
          return (
            <li class={css({ listStyle: 'none', width: '100%' })}>
              <Button $kind={Kind.Tertiary} $fullWidth={true}>
                {category.title}
              </Button>
            </li>
          );
        }}
      </For>
    </ul>
  );
}

const Categories = [
  {
    title: 'Special Offers',
    href: '/collections/special-offers',
  },
  {
    title: 'Organic',
    href: '/collections/organic',
  },
  {
    title: 'Fruits',
    href: '/collections/fruits',
  },
  {
    title: 'Vegetables',
    href: '/collections/fruits',
  },
  {
    title: 'Bulk Buy',
    href: '/collections/fruits',
  },
  {
    title: 'Precut',
    href: '/collections/fruits',
  },
  {
    title: 'Pre-Packed',
    href: '/collections/fruits',
  },
  {
    title: 'Gift Corner',
    href: '/collections/fruits',
  },
  {
    title: 'Juices',
    href: '/collections/fruits',
  },
  {
    title: 'Fresh blooms',
    href: '/collections/fruits',
  },
];
