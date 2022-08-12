import React from 'react';
import {useStyletron} from 'baseui';
import {Footer} from '../../Core/Components/Footer';
import {Sidebar} from '../../Core/Components/Sidebar';
import {useRecoilValue} from 'recoil';
import {headerOpenAtom} from '../../Core/Components/Header/atom';
import {Navigation} from 'baseui/side-navigation';
import {useLocation, useNavigate} from 'react-router-dom';
import {Icon} from '../../Core/Components/Icon';
import {Header} from '../../Core/Components/Header';

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
          <Navigation
            items={[
              {
                title: <SidebarItem icon="dashboard" title="Dashboard" />,
                itemId: '/',
              },
              {
                title: <SidebarItem icon="layout-header-sidebar-left" title="Spaces" />,
                itemId: '/spaces',
              },
              {
                title: <SidebarItem icon="users" title="Customers" />,
                itemId: '/customer',
              },
              {
                title: <SidebarItem icon="check-circle-o" title="Todos" />,
                itemId: '/todos',
              },
              {
                title: <SidebarItem icon="calendar" title="Calendar" />,
                itemId: '/calendar',
              },
              {
                title: <SidebarItem icon="bell-o" title="Notifications" />,
                itemId: '/notification',
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
                  if (!$active) {
                      return {
                          paddingLeft: $theme.sizing.scale600,
                          color: $theme.colors.primarySideBarA,
                      };
                  }

                  return {
                    paddingLeft: $theme.sizing.scale600,
                    backgroundImage: $theme.colors.primarySideBarA,
                    borderLeftColor: $theme.colors.primaryHeaderA,
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
