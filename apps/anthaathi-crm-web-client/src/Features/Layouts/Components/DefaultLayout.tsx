import React from 'react';
import { Toolbar } from '../../Core/Components/Toolbar';
import { ToolbarTitle } from '../../Core/Components/Toolbar/styled';
import { useStyletron } from 'baseui';
import { Footer } from '../../Core/Components/Footer';
import { Sidebar } from '../../Core/Components/Sidebar';
import { useRecoilValue } from 'recoil';
import { headerOpenAtom } from '../../Core/Components/Header/atom';
import { ProjectSelection } from '../../Core/Components/ProjectSelection';

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const [css, $theme] = useStyletron();

  const headerOpen = useRecoilValue(headerOpenAtom);

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
        </Toolbar>
      </div>

      <Sidebar
        $style={{
          transform: headerOpen ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        <ProjectSelection />
      </Sidebar>

      <main
        className={css({
          flexGrow: 1,
          backgroundColor: $theme.colors.backgroundSecondary,
          position: 'fixed',
          top: '96px',
          marginLeft: headerOpen ? '320px' : 0,
          transitionProperty: 'margin',
          transitionDuration: '100ms',
          transitionTimingFunction: 'ease',
          width: '100%',
          height: '100%',
        })}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
}
