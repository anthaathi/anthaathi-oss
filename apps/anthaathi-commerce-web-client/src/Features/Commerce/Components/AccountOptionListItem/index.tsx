import { useStyletron } from '@anthaathi/solid-styletron';
import { Link } from '@solidjs/router';

export interface AccountOptionListItemProps {
  name: string;
  href: string;
}

export function AccountOptionListItem(props: AccountOptionListItemProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        paddingBottom: $theme.sizing.scale500,
        width: '100%',
        height: '100%',
      })}
    >
      <Link
        href={props.href}
        class={css({
          display: 'block',
          padding: $theme.sizing.scale400,
          border: '0px solid',
          fontSize: '16px',
          textDecoration: 'none',
          fontWeight: 500,
          borderBottom: '3px solid transparent',
          color: 'black',
          ':hover': {
            borderBottom: '3px solid green',
            color: 'green',
          },
          [$theme.mediaQuery?.sm || '']: {
            textAlign: 'left',
          },
          textAlign: 'center',
          backgroundColor: 'transparent',
        })}
      >
        {props.name}
      </Link>
    </div>
  );
}
