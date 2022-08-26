import { useStyletron } from 'baseui';
import { miniActionbarActiveItemAtom } from '../../Atoms/miniActionbar';
import { useRecoilState } from 'recoil';
import { Button, KIND, SIZE } from 'baseui/button';
import { Icon } from '../../../Core/Components/Icon';
import { useMemo } from 'react';
import { CalendarAction } from '../CalendarAction';
import { TodoAction } from '../TodoAction';
import { ApprovalAction } from '../ApprovalAction';

const sidebarItems = [
  {
    key: 'calendar',
    icon: 'calendar',
    title: 'Calendar',
    component: () => <CalendarAction />,
  },
  {
    key: 'todo',
    icon: 'check-circle-o',
    title: 'Todos',
    component: () => <TodoAction />,
  },
  {
    key: 'approval',
    icon: 'notebook',
    title: 'Approval',
    component: () => <ApprovalAction />,
  },
];

export function MiniActionbar() {
  const [css, $theme] = useStyletron();
  const [activeMenu, setActiveMenu] = useRecoilState(
    miniActionbarActiveItemAtom
  );

  const ActiveItem = useMemo(() => {
    return (
      sidebarItems.find((item) => item.key === activeMenu)?.component ||
      (() => <></>)
    );
  }, [activeMenu]);

  return (
    <div
      className={css({
        position: 'fixed',
        right: 0,
        top: '48px',
        bottom: 0,
        display: 'flex',
        transitionDuration: $theme.animation.timing100,
        transitionProperty: 'all',
        transitionTimingFunction: $theme.animation.easeInCurve,
        transform: activeMenu ? 'translateX(0)' : 'translateX(320px)',
        zIndex: 101,
      })}
    >
      <div className={css({ display: 'flex', flexDirection: 'column' })}>
        {sidebarItems.map((item) => {
          return (
            <Button
              key={item.key}
              isSelected={item.key === activeMenu}
              onClick={() =>
                setActiveMenu((currentMenu) => {
                  if (item.key === currentMenu) {
                    return null;
                  }
                  return item.key;
                })
              }
              kind={KIND.secondary}
              size={SIZE.default}
              overrides={{
                Root: {
                  style: {
                    borderBottomLeftRadius: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                },
              }}
            >
              <Icon icon={item.icon} />
            </Button>
          );
        })}

        <span className={css({ flexGrow: 1 })} />
      </div>
      <div
        data-kind="mini-actionbar"
        className={css({
          width: '320px',
          borderLeftColor: $theme.borders.border200.borderColor,
          borderLeftWidth: $theme.borders.border200.borderWidth,
          borderLeftStyle: $theme.borders.border200.borderStyle as never,
          backgroundColor: $theme.colors.backgroundPrimary,
        })}
      >
        <ActiveItem />
      </div>
    </div>
  );
}
