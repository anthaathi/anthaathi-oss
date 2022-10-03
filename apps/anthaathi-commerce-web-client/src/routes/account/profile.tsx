import { useStyletron } from '@anthaathi/solid-styletron';
import { Outlet } from '@solidjs/router';
import { Button } from 'solid-headless';
import {
  AccountOptionList,
  AccountOptionMobileList,
} from '~/Features/Commerce/Components/AccountOptionList';
import { createSignal } from 'solid-js';
import { IconReorderSmall } from '@anthaathi/oracle-apex-solid-icons';

export default function Account() {
  return <AccountPage />;
}

export function AccountPage() {
  const [css, $theme] = useStyletron();
  const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false);

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
          display: 'flex',
          flexDirection: 'row',
          fontSize: '36px',
          fontWeight: 700,
          textAlign: 'center',
          paddingBottom: $theme.sizing.scale1000,
        })}
      >
        <div class={css({ flex: 1 })}>My Account</div>
        <Button
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen());
          }}
          class={css({
            display: 'block',
            margin: 0,
            paddingBottom: $theme.sizing.scale500,
            paddingTop: $theme.sizing.scale500,
            paddingLeft: $theme.sizing.scale600,
            paddingRight: $theme.sizing.scale600,
            border: '2px solid transparent',
            ':hover': {
              border: '2px solid green',
            },
            [$theme.mediaQuery.sm || '']: {
              display: 'none',
            },
          })}
        >
          <IconReorderSmall />
        </Button>
      </div>
      {mobileMenuOpen() && <AccountOptionMobileList />}
      <div
        class={css({
          display: 'flex',
          flexDirection: 'row',
        })}
      >
        <div
          class={css({
            display: 'none',
            [$theme.mediaQuery?.sm || '']: {
              display: 'block',
              width: '180px',
            },
            [$theme.mediaQuery?.md || '']: {
              width: '260px',
            },
            [$theme.mediaQuery?.lg || '']: {
              width: '320px',
            },
            paddingRight: $theme.sizing.scale500,
          })}
        >
          <AccountOptionList />
        </div>
        <div
          class={css({
            flex: 1,
          })}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
