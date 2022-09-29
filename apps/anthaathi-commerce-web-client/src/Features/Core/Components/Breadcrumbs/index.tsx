import { useStyletron } from '@anthaathi/solid-styletron';
import { For } from 'solid-js';
import { IconAngleRightSmall } from '@anthaathi/oracle-apex-solid-icons';
export interface BreadcrumbsProps {
  key: string;
  title: string;
  handlePress?: () => void;
}

export function Breadcrumbs({ list }: { list: BreadcrumbsProps[] }) {
  const [css, $theme] = useStyletron();
  return (
    <div
      class={css({
        display: 'flex',
        flexDirection: 'row',
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
              <div
                onClick={item.handlePress}
                class={css({
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
              </div>
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
