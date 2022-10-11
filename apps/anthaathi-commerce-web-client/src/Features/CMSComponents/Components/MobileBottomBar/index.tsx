import { useStyletron } from '@anthaathi/solid-styletron';
import { Button } from 'solid-headless';
import {
  IconHomeLarge,
  IconSearchLarge,
  IconBellOLarge,
  IconUserLarge,
} from '@anthaathi/oracle-apex-solid-icons';
import { Link, NavLink } from '@solidjs/router';

export function MobileBottomBar() {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        display: 'flex',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '64px',
        backgroundColor: '#FFF',
        borderTop: '1px solid #EEE',
        zIndex: 99,
        [$theme.mediaQuery?.md || '']: {
          display: 'none',
        },
      })}
    >
      {Options.map((option) => {
        return (
          <Button
            as={NavLink}
            end={true}
            href={option.href}
            class={css({
              borderTop: '4px solid transparent',
              width: '100%',
              border: 'none',
              flexDirection: 'column',
              alignItems: 'center',
              placeContent: 'center',
              backgroundColor: '#FFF',
              paddingTop: '6px',
              paddingBottom: '6px',
              cursor: 'pointer',
              textDecoration: 'none',
              color: '#444',
              display: 'flex',
            })}
            activeClass={css({
              borderTop: '4px solid #000',
            })}
          >
            {option.icon}
            <span
              class={css({
                marginTop: '8px',
                ...$theme.typography.LabelSmall,
              })}
            >
              {option.title}
            </span>
          </Button>
        );
      })}
    </div>
  );
}

export const Options = [
  {
    title: 'Home',
    icon: () => <IconHomeLarge />,
    href: '/',
  },
  {
    title: 'Search',
    icon: () => <IconSearchLarge />,
    href: '/search',
  },
  {
    title: 'Notification',
    icon: () => <IconBellOLarge />,
    href: '/account/profile/orders/my-orders',
  },
  {
    title: 'Account',
    icon: () => <IconUserLarge />,
    href: '/account/profile',
  },
];
