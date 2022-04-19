import * as React from 'react';
import { styled, Theme, useStyletron } from 'baseui';
import { Button, SHAPE } from 'baseui/button';
import { PLACEMENT, StatefulTooltip } from 'baseui/tooltip';
import { useAtom } from 'jotai';
// @ts-ignore TODO: FIX IT
import { ChevronRight } from '@carbon/icons-react';
import Anthaathi from '../Icon/Anthaathi';
import SidebarOpen from '../Atoms/SidebarOpen';

const Sidebar = styled(
  'div',
  ({ $theme, $expanded }: { $theme?: Theme; $expanded?: boolean }) => ({
    display: 'flex',
    minHeight: `calc(100vh - ${$theme!.sizing.scale400} - ${
      $theme!.sizing.scale400
    })`,
    flexDirection: 'column',
    width: $expanded ? '320px' : '64px',
    backgroundColor: $theme?.colors.primary700,
    alignItems: 'center',
    transition: `width ${$theme!.animation.easeInCurve} ${
      $theme!.animation.timing200
    }`,
    paddingTop: $theme?.sizing.scale400,
    paddingBottom: $theme?.sizing.scale400,
  }),
);

export const SidebarDivider = styled('div', ({ $theme }) => ({
  width: `calc(100% - ${$theme.sizing.scale600})`,
  backgroundColor: $theme.colors.backgroundTertiary,
  marginTop: $theme.sizing.scale100,
  marginBottom: $theme.sizing.scale100,
  opacity: '.2',
  height: '1px',
}));

export interface SidebarIconButtonProps {
  isOpen: boolean;
  icon?: React.ReactElement;
  title: React.ReactNode;
  tooltip: React.ReactNode;
  iconClass?: string;
  onClick?: () => void;
}

export function SidebarIconButton({
  isOpen,
  icon: icon_,
  title,
  tooltip,
  iconClass,
  onClick,
}: SidebarIconButtonProps) {
  const [css, $theme] = useStyletron();

  const icon = React.cloneElement(icon_ || <Anthaathi />, {
    width: 48,
    className: `${css({
      overflow: 'inherit',
      width: '48px',
      height: '48px',
    })} ${iconClass}`.trim(),
  });

  return (
    <StatefulTooltip
      content={tooltip}
      popoverMargin={18}
      placement={$theme.direction === 'rtl' ? PLACEMENT.left : PLACEMENT.right}
    >
      <Button
        shape={SHAPE.square}
        $style={{
          backgroundColor: 'transparent',
          width: `calc(100% - ${$theme.sizing.scale600})`,
          display: 'flex',
          cursor: onClick ? 'pointer' : 'default',
          placeContent: 'start',
          alignItems: 'center',
          ':active': {
            ...(onClick
              ? {}
              : {
                  backgroundColor: 'transparent',
                }),
          },
        }}
        onClick={onClick}
      >
        {icon}

        <span
          className={css({
            overflow: 'hidden',
            opacity: isOpen ? 1 : 0,
            transition: `transform ${$theme!.animation.easeInCurve} ${
              $theme!.animation.timing200
            }, opacity ${$theme!.animation.easeInCurve} ${
              $theme!.animation.timing200
            }`,
            display: 'block',
            whiteSpace: 'nowrap',
          })}
        >
          {title}
        </span>
      </Button>
    </StatefulTooltip>
  );
}

export function SidebarToggle() {
  const [isOpen, setIsOpen] = useAtom(SidebarOpen);
  const [css, $theme] = useStyletron();

  return (
    <Button
      $style={{
        width: `calc(100% - ${$theme.sizing.scale600})`,
        backgroundColor: 'transparent',
      }}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <ChevronRight
        className={css({
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: `transform ${$theme.animation.easeInCurve} ${$theme.animation.timing200}`,
        })}
        size={18}
      />
    </Button>
  );
}

export default Sidebar;
