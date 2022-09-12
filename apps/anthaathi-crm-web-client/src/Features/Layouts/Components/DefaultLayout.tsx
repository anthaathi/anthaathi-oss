import React from 'react';
import { useStyletron } from 'baseui';
import { Footer } from '../../Core/Components/Footer';
import { useRecoilValue } from 'recoil';
import { headerOpenAtom } from '../../Core/Components/Header/atom';
import { MiniActionbar } from '../../MiniActionbar/Components/MiniActionbar';
import { miniActionbarActiveItemAtom } from '../../MiniActionbar/Atoms/miniActionbar';

export interface DefaultLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
}

export function DefaultLayout({ children, header }: DefaultLayoutProps) {
  const [css, $theme] = useStyletron();

  const headerOpen = useRecoilValue(headerOpenAtom);
  const isActionSidebarMenu = useRecoilValue(miniActionbarActiveItemAtom);

  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      })}
    >
      {header}

      <main
        id="main-scroll"
        className={css({
          flexGrow: 1,
          backgroundColor: $theme.colors.primaryB,
          marginTop: '48px',
          marginLeft: headerOpen ? '280px' : 0,
          marginRight: isActionSidebarMenu ? '320px' : 0,
          transitionProperty: 'margin,width',
          transitionDuration: '100ms',
          transitionTimingFunction: 'ease',
          width: `calc(100% ${headerOpen ? '- 280px' : ''} ${
            isActionSidebarMenu ? '- 320px' : ''
          })`,
          height: '100%',
        })}
      >
        {children}
        <MiniActionbar />
      </main>

      <Footer />
    </div>
  );
}
