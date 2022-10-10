import { useStyletron } from '@anthaathi/solid-styletron';
import { Searchbar } from '../Searchbar';
import { Button, Kind } from '../Button';
import {
  IconReorderSmall,
  IconShoppingCartLarge,
  IconUserLarge,
} from '@anthaathi/oracle-apex-solid-icons';
import { Link } from '@solidjs/router';
import { createMemo, createSignal, For } from 'solid-js';
import { Transition, TransitionChild } from 'solid-headless';
import { Img } from '~/Features/Core/Components/Image';
import { cartItems } from '~/Features/Cart/Components/CartItems';

export function AppBar() {
  const [css, $theme] = useStyletron();

  const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false);

  const [isOpen, _setIsOpen] = createSignal(true, {});
  const [cartItem] = cartItems;

  let categoryHTML: HTMLDivElement;

  const cartItemLength = createMemo(() => {
    return cartItem.length;
  }, [cartItem]);

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
            <Link href="/">
              <Img
                src="https://cdn.shopify.com/s/files/1/0648/1303/9842/files/logo-oxvdmbxi6g2vpdrt9kcwy3xyhpvajr03in9rykvzfk_220x@2x.png?v=1653569545"
                alt=""
                $override={{
                  Root: {
                    $style: { height: '32px', width: 'auto' },
                  },
                }}
              />
            </Link>

            <span class={css({ flexGrow: 1 })} />

            <div
              class={css({
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                alignItems: 'center',
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
              <span class={css({ flexGrow: 1 })} />

              <Button
                $as={Link}
                href="/account/profile"
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
                  <>
                    <IconShoppingCartLarge
                      height="18px"
                      width="18px"
                      class={css({})}
                    />
                    <p
                      class={css({
                        display: cartItemLength() === 0 ? 'none' : 'block',
                        fontSize: '12px',
                        position: 'absolute',
                        right: '38px',
                        top: '-12px',
                        backgroundColor: '#118b44',
                        paddingLeft: '6px',
                        paddingRight: '6px',
                        paddingTop: '1px',
                        paddingBottom: '1px',
                        borderTopRightRadius: '40%',
                        borderTopLeftRadius: '40%',
                        borderBottomLeftRadius: '40%',
                        borderBottomRightRadius: '40%',
                        color: '#fff',
                      })}
                    >
                      {cartItemLength()}
                    </p>
                  </>
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
                $as={Link}
                href="/cart"
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
              <Button $as={Link} href={`${category.href}`} $kind={Kind.Tab}>
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
          overflow: mobileMenuOpen() ? 'hidden' : 'auto',
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
              <Button
                $kind={Kind.Tertiary}
                $fullWidth={true}
                $as={Link}
                href={category.href}
              >
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
    href: '/collections/specialoffers',
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
    href: '/collections/vegetables',
  },
  {
    title: 'Bulk Buy',
    href: '/collections/bulkbuy',
  },
  {
    title: 'Precut',
    href: '/collections/precut',
  },
  {
    title: 'Pre-Packed',
    href: '/collections/prepacked',
  },
  {
    title: 'Gift Corner',
    href: '/collections/giftcorner',
  },
  {
    title: 'Juices',
    href: '/collections/juices',
  },
  {
    title: 'Fresh blooms',
    href: '/collections/freshblooms',
  },
];
