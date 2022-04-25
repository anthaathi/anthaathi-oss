import React from 'react';
import { styled, Theme, useStyletron } from 'baseui';
import { Button, KIND, SHAPE, SIZE } from 'baseui/button';
// @ts-ignore
import { ChevronLeft } from '@carbon/icons-react';
import { atomWithStorage } from 'jotai/utils';
import { useAtom } from 'jotai';
import { useIntl } from 'react-intl';
import SidebarMenu, {
  SidebarMenuDivider,
  SidebarMenuIconButton,
  SidebarMenuToggle,
} from '../../Styled/SidebarMenu';
import Anthaathi from '../../Icon/Anthaathi';
import Sidebar, { SidebarToolbar } from '../../Styled/Sidebar';
import SkipToContent from '../../Styled/SkipToContent';

const SidebarButtonAtom = atomWithStorage('_mini_sidebarOpen', false);

function MiniSidebarButton() {
  const [css, $theme] = useStyletron();
  const [sidebarOpen, setSidebarOpen] = useAtom(SidebarButtonAtom);

  return (
    <div
      className={css({
        position: 'absolute',
        right: '-14px',
        top: '120px',
        borderRadius: '50%',
        border: '1px solid #DDD',
      })}
    >
      <Button
        size={SIZE.mini}
        shape={SHAPE.circle}
        onClick={() => setSidebarOpen((prev) => !prev)}
        kind={KIND.secondary}
      >
        <ChevronLeft
          className={css({
            transform: !sidebarOpen ? 'rotate(180deg)' : 'rotate(0)',
            transition: `transform ${$theme.animation.easeInCurve} ${$theme.animation.timing200}`,
          })}
        />
      </Button>
    </div>
  );
}

const SidebarWrapper = styled(
  'div',
  ({ $theme, $sidebarOpen }: { $theme?: Theme; $sidebarOpen: boolean }) => ({
    left: '64px',
    height: '100vh',
    position: 'absolute',
    transform: $sidebarOpen
      ? 'translateX(0px)'
      : 'translateX(calc(-100% + 24px))',
    transition: `transform ${$theme!.animation.easeInCurve} ${
      $theme!.animation.timing200
    }`,
  }),
);

export interface SidebarContentProps {
  title: React.ReactNode;
  sidebarItems: React.ReactNode;
  children: React.ReactNode;
}

export function SidebarContent({
  title,
  sidebarItems,
  children,
}: SidebarContentProps) {
  const [css, $theme] = useStyletron();
  const [sidebarOpen] = useAtom(SidebarButtonAtom);

  return (
    <>
      <SidebarWrapper $sidebarOpen={sidebarOpen}>
        <Sidebar>
          <SidebarToolbar
            $style={{
              backgroundColor: $theme.colors.primary700,
            }}
          >
            {title}
          </SidebarToolbar>
          {sidebarItems}
        </Sidebar>

        <MiniSidebarButton />
      </SidebarWrapper>

      <div
        className={css({
          marginLeft: sidebarOpen ? '320px' : '24px',
          transition: `margin-left ${$theme.animation.easeInCurve} ${$theme.animation.timing200}`,
        })}
      >
        {children}
      </div>
    </>
  );
}

export interface DefaultLayoutProps {
  children: React.ReactNode;
  sidebarMenuItem: React.ReactNode;
}

export function DefaultLayout({
  children,
  sidebarMenuItem,
}: DefaultLayoutProps) {
  const [css, $theme] = useStyletron();
  const intl = useIntl();

  return (
    <div
      className={css({
        width: '100%',
        minHeight: '100vh',
        backgroundColor: $theme.colors.backgroundPrimary,
        display: 'flex',
        position: 'relative',
      })}
    >
      <SidebarMenu className={css({ position: 'fixed', zIndex: 1, left: 0 })}>
        <SkipToContent data-component="skip-to-content">
          {intl.formatMessage({
            defaultMessage: 'Skip to content',
            id: 'ZKtRoA',
          })}
        </SkipToContent>
        <SidebarMenuIconButton
          icon={<Anthaathi width={48} height={48} />}
          title="Anthaathi"
          tooltip="Home"
        />
        <SidebarMenuDivider />
        {sidebarMenuItem}
        <SidebarMenuToggle />
      </SidebarMenu>

      <div className={css({ marginLeft: '64px', width: '100%' })}>
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
