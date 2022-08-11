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
import { Header } from '../../Core/Components/Header';

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

      <main
        className={css({
          flexGrow: 1,
          backgroundColor: $theme.colors.primaryB,
          marginTop: '48px',
          marginLeft: headerOpen ? '320px' : 0,
          transitionProperty: 'margin,width',
          transitionDuration: '100ms',
          transitionTimingFunction: 'ease',
          width: headerOpen ? 'calc(100% - 320px)' : '100%',
          height: '100%',
        })}
      >
        {header || <Header />}

        <Sidebar
          $style={{
            transform: headerOpen ? 'translateX(0)' : 'translateX(-100%)',
          }}
        >
          {/* <ProjectSelection /> */}

          <Navigation
            items={[
              {
                title: <SidebarItem icon="home" title="Overview" />,
                itemId: '/',
              },
              {
                title: <SidebarItem icon="users" title="Customer" />,
                itemId: '/customer',
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
            overrides={{
              NavItem: {
                style: ({ $active }) => {
                  if (!$active)
                    return {
                      color: $theme.colors.primarySideBarA,
                    };
                  return {
                    backgroundImage: $theme.colors.primarySideBarB,
                    borderLeftColor: $theme.colors.primarySideBarA,
                  };
                },
              },
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
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        ...$theme.typography.LabelSmall,
        color: '#fff',
      })}
    >
      <Icon icon={icon} />
      <span className={css({ width: '10px' })} />
      {title}
    </div>
  );
}
