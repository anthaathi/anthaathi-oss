import { useStyletron } from '@anthaathi/solid-styletron';
import { AccountOptionListItem } from '~/Features/Commerce/Components/AccountOptionListItem';
import { For } from 'solid-js';

export function AccountOptionList() {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        display: 'none',
        [$theme.mediaQuery.sm || '']: {
          display: 'flex',
        },
        flexDirection: 'column',
        minWidth: '150px',
      })}
    >
      <For each={Items}>
        {(value) => (
          <AccountOptionListItem href={value.href} name={value.title} />
        )}
      </For>
    </div>
  );
}

export function AccountOptionMobileList() {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        display: 'flex',
        [$theme.mediaQuery?.sm || '']: {
          display: 'none',
        },
        flexDirection: 'column',
        minWidth: '150px',
        marginBottom: $theme.sizing.scale800,
      })}
    >
      <For each={Items}>
        {(value) => (
          <AccountOptionListItem href={value.href} name={value.title} />
        )}
      </For>
    </div>
  );
}

export const Items = [
  {
    title: 'Dashboard',
    href: '/account/profile',
  },
  {
    title: 'Orders',
    href: '/account/profile/orders',
  },
  {
    title: 'Address Book',
    href: '/account/profile/address-book',
  },
];
