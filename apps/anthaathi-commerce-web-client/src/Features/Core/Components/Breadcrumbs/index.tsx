import { useStyletron } from '@anthaathi/solid-styletron';
import { For } from 'solid-js';
import { IconAngleRightSmall } from '@anthaathi/oracle-apex-solid-icons';
import { Link } from '@solidjs/router';
export interface BreadcrumbsProps {
  key: string;
  title: string;
  link?: string;
}

export function Breadcrumbs({ list }: { list: BreadcrumbsProps[] }) {
  const [css, $theme] = useStyletron();
  return (
    <div
      class={css({
        marginTop: $theme.sizing.scale800,
        marginBottom: $theme.sizing.scale800,
        display: 'flex',
        flexDirection: 'row',
        margin: '0 auto',
        width: $theme.sizing.maxWidth,
        maxWidth: `calc(100% - ${$theme.sizing.scale500} - ${$theme.sizing.scale500})`,
        paddingLeft: $theme.sizing.scale500,
        paddingRight: $theme.sizing.scale500,
      })}
    >
      <For each={list}>
        {(item, index) => (
          <>
            <div
              class={css({
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              })}
            >
              <Link
                href={item.link}
                class={css({
                  textDecoration: 'none',
                  textAlign: 'center',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  paddingLeft: '12px',
                  paddingRight: '12px',
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  borderRadius: '4px',
                  ':hover': { cursor: 'pointer' },
                })}
              >
                {item.title}
              </Link>
              {index() !== list.length - 1 && (
                <IconAngleRightSmall height="40px" width="30px" />
              )}
            </div>
          </>
        )}
      </For>
    </div>
  );
}
