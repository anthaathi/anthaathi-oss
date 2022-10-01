import { useStyletron } from '@anthaathi/solid-styletron';
import { AccountOptionListItem } from '~/Features/Commerce/Components/AccountOptionListItem';

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
      <AccountOptionListItem name="Dashboard" onClick={() => {}} />
      <AccountOptionListItem name="Orders" onClick={() => {}} />
      <AccountOptionListItem name="Address Book" onClick={() => {}} />
      <AccountOptionListItem name="Dashboard" onClick={() => {}} />
      <AccountOptionListItem name="Dashboard" onClick={() => {}} />
    </div>
  );
}
