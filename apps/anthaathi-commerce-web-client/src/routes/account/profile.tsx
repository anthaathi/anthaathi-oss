import { useStyletron } from '@anthaathi/solid-styletron';
import { Outlet } from '@solidjs/router';
import { createSignal } from 'solid-js';
import { AccountOptionList } from '~/Features/Commerce/Components/AccountOptionList';

export default function Account() {
  return <AccountPage />;
}

export function AccountPage() {
  const [css, $theme] = useStyletron();
  const [selectedOption, setSelectedOption] = createSignal('Dashboard');

  return (
    <div
      class={css({
        maxWidth: $theme.sizing.maxWidth,
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingTop: $theme.sizing.scale1400,
        paddingBottom: $theme.sizing.scale1400,
        paddingLeft: $theme.sizing.scale500,
        paddingRight: $theme.sizing.scale500,
      })}
    >
      <div
        class={css({
          fontSize: '36px',
          fontWeight: 700,
          textAlign: 'center',
          paddingBottom: $theme.sizing.scale1000,
        })}
      >
        My Account
      </div>
      <div
        class={css({
          display: 'flex',
          flexDirection: 'row',
        })}
      >
        <div
          class={css({
            display: 'none',
            [$theme.mediaQuery.sm || '']: {
              display: 'block',
              flex: 2,
            },
            paddingRight: $theme.sizing.scale500,
          })}
        >
          <AccountOptionList />
        </div>
        <div
          class={css({
            display: 'none',
            [$theme.mediaQuery.sm || '']: {
              flex: 0.5,
            },
          })}
        ></div>
        <div
          class={css({
            flex: 9,
          })}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export interface AccountOrderItemProp {
  order: string;
  date: string;
  status: string;
  total: string;
}
