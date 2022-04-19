import * as React from 'react';
import { useState } from 'react';
import { Button } from 'baseui/button';
import { Block } from 'baseui/block';
import { useAtom } from 'jotai';
import SidebarCmp, {
  SidebarDivider,
  SidebarIconButton,
  SidebarToggle,
} from './Sidebar';
import { CommonAppProvider } from '../CommonAppProvider';
import Anthaathi from '../Icon/Anthaathi';
import SidebarOpen from '../Atoms/SidebarOpen';

export default {
  title: 'Anthaathi/Styled',
};

export function Sidebar() {
  const [isOpen, setIsOpen] = useAtom(SidebarOpen);

  return (
    <CommonAppProvider>
      <SidebarCmp $expanded={isOpen}>
        <SidebarIconButton
          isOpen={isOpen}
          icon={<Anthaathi />}
          title="Anthaathi"
          tooltip="Anthaathi"
        />

        <SidebarDivider />

        <SidebarIconButton
          isOpen={isOpen}
          icon={<Anthaathi />}
          title="Home page"
          tooltip="Home page"
          onClick={() => {}}
        />

        <Block $style={{ flexGrow: 1 }} />

        <SidebarIconButton
          isOpen={isOpen}
          icon={<Anthaathi />}
          title="Anthaathi"
          tooltip="Anthaathi"
        />

        <SidebarDivider />

        <SidebarToggle />
      </SidebarCmp>
    </CommonAppProvider>
  );
}
