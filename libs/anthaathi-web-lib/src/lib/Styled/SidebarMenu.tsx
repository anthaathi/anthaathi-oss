import * as React from 'react';
import { styled, Theme, useStyletron } from 'baseui';
import { Button, SHAPE } from 'baseui/button';
import { PLACEMENT, StatefulTooltip } from 'baseui/tooltip';
import { useAtom } from 'jotai';
// @ts-ignore TODO: FIX IT
import { ChevronRight } from '@carbon/icons-react';
import SidebarOpen from '../Atoms/SidebarOpen';

const SidebarMenuInt = styled(
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
    boxShadow: $theme!.lighting.shadow700,
  }),
);

export function SidebarMenu(
  props: React.ComponentProps<typeof SidebarMenuInt>,
) {
  const [isOpen] = useAtom(SidebarOpen);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <SidebarMenuInt $expanded={isOpen} {...props} />;
}

export const SidebarMenuDivider = styled('div', ({ $theme }) => ({
  width: `calc(100% - ${$theme.sizing.scale600})`,
  backgroundColor: $theme.colors.backgroundTertiary,
  marginTop: $theme.sizing.scale100,
  marginBottom: $theme.sizing.scale100,
  opacity: '.2',
  height: '1px',
}));

export interface SidebarMenuIconButtonProps {
  icon: React.ReactElement;
  title: React.ReactNode;
  tooltip?: React.ReactNode;
  iconClass?: string;
  onClick?: () => void;
}

export function SidebarMenuIconButton({
  icon: icon_,
  title,
  tooltip,
  iconClass,
  onClick,
}: SidebarMenuIconButtonProps) {
  const [css, $theme] = useStyletron();
  const [isOpen] = useAtom(SidebarOpen);

  const icon = React.cloneElement(icon_, {
    className: `${css({
      overflow: 'inherit',
    })} ${iconClass || ''}`.trim(),
    size: 22,
    width: '48px',
  });

  return (
    <StatefulTooltip
      content={isOpen ? null : tooltip || title}
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
        <span
          className={css({
            transition: `padding ${$theme!.animation.easeInCurve} ${
              $theme!.animation.timing200
            }`,
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            placeContent: 'center',
            ...(isOpen ? { paddingLeft: '12px', paddingRight: '6px' } : {}),
          })}
        >
          {icon}
        </span>

        <span
          className={css({
            overflow: 'hidden',
            width: isOpen ? '100%' : 0,
            opacity: isOpen ? 1 : 0,
            transition: `transform ${$theme!.animation.easeInCurve} ${
              $theme!.animation.timing200
            }, opacity ${$theme!.animation.easeInCurve} ${
              $theme!.animation.timing200
            }, width ${$theme!.animation.easeInCurve} ${
              $theme!.animation.timing200
            }`,
            textAlign: 'left',
            display: 'block',
            whiteSpace: 'nowrap',
            ...$theme.typography.LabelSmall,
          })}
        >
          {title}
        </span>
      </Button>
    </StatefulTooltip>
  );
}

export function SidebarMenuToggle() {
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

export default SidebarMenu;
