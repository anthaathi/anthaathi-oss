import React from 'react';
import { Block } from 'baseui/block';
// @ts-ignore
import { Home } from '@carbon/icons-react';
import DefaultLayout from './index';
import { CommonAppProvider } from '../../CommonAppProvider';
import { SidebarToolbar } from '../../Styled/Sidebar';
import { SidebarMenuIconButton } from '../../Styled/SidebarMenu';

export default {
  title: 'Anthaathi/Layouts',
  component: DefaultLayout,
};

export function Default() {
  return (
    <CommonAppProvider>
      <DefaultLayout
        sidebarMenuItem={
          <>
            <SidebarMenuIconButton
              icon={<Home />}
              title="Home"
              tooltip="Home"
              onClick={() => {}}
            />
            <Block $style={{ flexGrow: 1 }} />
          </>
        }
      >
        <SidebarToolbar $as="div">JSXOK</SidebarToolbar>
      </DefaultLayout>
    </CommonAppProvider>
  );
}
