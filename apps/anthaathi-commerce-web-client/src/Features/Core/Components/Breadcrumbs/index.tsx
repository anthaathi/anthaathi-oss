import { useStyletron } from '@anthaathi/solid-styletron';
import { For } from 'solid-js';
import { IconAngleRightSmall } from '@anthaathi/oracle-apex-solid-icons';
import { Link } from '@solidjs/router';
import { useCssToken } from '~/Features/Core/Hooks/useCssToken';

export interface BreadcrumbsProps {
  extraChild?: () => Element;
  list: BreadcrumbItem[];
}

export interface BreadcrumbItem {
  key: string;
  title: string;
  link: string;
}

export function Breadcrumbs(props: BreadcrumbsProps) {
  const [css, $theme] = useStyletron();
  const cssVar = useCssToken();

  return (
    <div
      class={css({
        display: 'flex',
        flexDirection: 'row',
        margin: `${$theme.sizing.scale200} auto`,
        width: $theme.sizing.maxWidth,
        maxWidth: `calc(100% - ${$theme.sizing.scale500} - ${$theme.sizing.scale500})`,
      })}
    >
      <For each={props.list}>
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
                class={css([
                  {
                    textDecoration: 'none',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    paddingLeft: $theme.sizing.scale500,
                    paddingRight: $theme.sizing.scale500,
                    borderRadius: '4px',
                    color: cssVar('breadcrumbs-link-color', '#000'),
                    ':hover': { cursor: 'pointer' },
                  },
                  $theme.typography.LabelMedium,
                ])}
              >
                {item.title}
              </Link>
              {index() !== props.list.length - 1 && (
                <IconAngleRightSmall height="20px" width="20px" />
              )}
            </div>
          </>
        )}
      </For>

      <span class={css({ flexGrow: 1 })} />

      {props?.extraChild || <></>}
    </div>
  );
}
