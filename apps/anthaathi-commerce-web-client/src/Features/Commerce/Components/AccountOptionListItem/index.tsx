import { useStyletron } from '@anthaathi/solid-styletron';
import { Link, useLocation } from '@solidjs/router';

export interface AccountOptionListItemProps {
  name: string;
  href: string;
}

export function AccountOptionListItem(props: AccountOptionListItemProps) {
  const [css, $theme] = useStyletron();
  const location = useLocation();

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
          borderBottom:
            location.pathname === props.href
              ? '3px solid #108842'
              : '3px solid transparent',
          color: location.pathname === props.href ? '#108842' : 'black',
          ':hover': {
            borderBottom: '3px solid #108842',
            color: '#108842',
            // backgroundColor: '#EEE',
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
