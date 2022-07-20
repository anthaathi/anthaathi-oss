import React from 'react';
import { Toolbar } from '../../Core/Components/Toolbar';
import { ToolbarTitle } from '../../Core/Components/Toolbar/styled';
import { useStyletron } from 'baseui';
import { Footer } from '../../Core/Components/Footer';
import { Sidebar } from '../../Core/Components/Sidebar';
import { useRecoilValue } from 'recoil';
import { headerOpenAtom } from '../../Core/Components/Header/atom';
import { ProjectSelection } from '../../Core/Components/ProjectSelection';
import { Search } from '../../Core/Components/Search';
import { FlexFill } from '../../Core/Components/FlexFill';
import { Navigation } from 'baseui/side-navigation';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '../../Core/Components/Icon';

export interface DefaultLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
}

export function DefaultLayout({ children, header }: DefaultLayoutProps) {
  const [css, $theme] = useStyletron();

  const headerOpen = useRecoilValue(headerOpenAtom);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      })}
    >
      <div
        className={css({
          boxShadow: $theme.lighting.shadow400,
          position: 'fixed',
          width: '100%',
          zIndex: 2,
        })}
      >
        <Toolbar>
          <ToolbarTitle>Anthaathi CRM</ToolbarTitle>

          <FlexFill />
          <Search />
          <FlexFill />
        </Toolbar>
      </div>

      <main
        className={css({
          flexGrow: 1,
          backgroundColor: $theme.colors.backgroundSecondary,
          marginTop: '96px',
          marginLeft: headerOpen ? '320px' : 0,
          transitionProperty: 'margin',
          transitionDuration: '100ms',
          transitionTimingFunction: 'ease',
          width: '100%',
          height: '100%',
        })}
      >
        {header}

        <Sidebar
          $style={{
            transform: headerOpen ? 'translateX(0)' : 'translateX(-100%)',
          }}
        >
          <ProjectSelection />

          <Navigation
            items={[
              {
                title: <SidebarItem icon="home" title="Overview" />,
                itemId: '/',
              },
              {
                title: <SidebarItem icon="calendar" title="Calendar" />,
                itemId: '/calendar',
              },
            ]}
            activeItemId={pathname}
            onChange={({ event, item }) => {
              // prevent page reload
              event.preventDefault();
              navigate(item.itemId);
            }}
          />
        </Sidebar>

        {children}
      </main>

      <Footer />
    </div>
  );
}

export function SidebarItem({ icon, title }: { icon: string; title: string }) {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
      })}
    >
      <Icon icon={icon} />
      <span className={css({ width: '10px' })} />
      {title}
    </div>
  );
}
