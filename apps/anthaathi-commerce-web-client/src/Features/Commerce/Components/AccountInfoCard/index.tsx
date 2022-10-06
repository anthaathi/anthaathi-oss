import { useStyletron } from '@anthaathi/solid-styletron';
import { Link } from '@solidjs/router';

export interface AccountInfoCardProps {
  title: string;
  content: string;
  urlTitle: string;
  url: string;
}

export function AccountInfoCard(props: AccountInfoCardProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '100%',
        width: '100%',
        minHeight: '120px',
        paddingLeft: $theme.sizing.scale500,
        paddingRight: $theme.sizing.scale500,
        paddingBottom: $theme.sizing.scale500,
        paddingTop: $theme.sizing.scale800,
        boxSizing: 'border-box',
        border: '1px solid #d9d9d9',
      })}
    >
      <div
        class={css({
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        <div
          class={css({
            fontSize: $theme.sizing.scale700,
            fontWeight: 300,
            paddingLeft: $theme.sizing.scale500,
            paddingBottom: $theme.sizing.scale500,
          })}
        >
          {props.title}
        </div>
        <div
          class={css({
            fontSize: $theme.sizing.scale750,
            fontWeight: 400,
            paddingLeft: $theme.sizing.scale500,
            paddingBottom: $theme.sizing.scale500,
            whiteSpace: 'pre-line',
          })}
        >
          {props.content}
        </div>
      </div>
      {props.urlTitle.length != 0 ? (
        <div
          class={css({
            alignSelf: 'flex-end',
          })}
        >
          <Link
            href={props.url}
            class={css({ fontSize: $theme.sizing.scale500, color: '#000' })}
          >
            {props.urlTitle}
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
