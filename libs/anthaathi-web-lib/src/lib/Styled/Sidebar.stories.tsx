import * as React from 'react';
import { Button, SIZE, KIND } from 'baseui/button';
// @ts-ignore
// eslint-disable-next-line camelcase
import { Settings, Network_1, Home } from '@carbon/icons-react';
import { Block } from 'baseui/block';
import SidebarCpm, {
  SidebarItem,
  SidebarItemLink,
  SidebarToolbar,
} from './Sidebar';
import { CommonAppProvider } from '../Components/CommonAppProvider';
import SidebarMenu, {
  SidebarMenuDivider,
  SidebarMenuIconButton,
  SidebarMenuToggle,
} from './SidebarMenu';
import Anthaathi from '../Icon/Anthaathi';

export default {
  title: 'Anthaathi/Styled',
};

export function Sidebar() {
  return (
    <CommonAppProvider>
      <Block display="flex">
        <SidebarMenu>
          <SidebarMenuIconButton
            icon={<Anthaathi width={48} height={48} />}
            title="Anthaathi"
            tooltip="Home"
          />
          <SidebarMenuDivider />
          <Block $style={{ flexGrow: 1 }} />
          <SidebarMenuToggle />
        </SidebarMenu>

        <SidebarCpm>
          <SidebarToolbar>Workspace</SidebarToolbar>

          {/* eslint-disable-next-line react/jsx-pascal-case */}
          <SidebarItemLink onClick={() => {}} icon={<Home />}>
            Home
          </SidebarItemLink>
          <SidebarItem title="MODELS">Angular</SidebarItem>
          <SidebarItem
            title="MODELS"
            action={
              <Button
                kind={KIND.secondary}
                size={SIZE.compact}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <Settings />
              </Button>
            }
          >
            <SidebarItem
              title="MODELS"
              action={
                <Button
                  kind={KIND.secondary}
                  size={SIZE.compact}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <Settings />
                </Button>
              }
            >
              <SidebarItem
                title="MODELS"
                action={
                  <Button
                    kind={KIND.secondary}
                    size={SIZE.compact}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <Settings />
                  </Button>
                }
              >
                {/* eslint-disable-next-line react/jsx-pascal-case */}
                <SidebarItemLink onClick={() => {}} icon={<Network_1 />}>
                  Network
                </SidebarItemLink>
                {/* eslint-disable-next-line react/jsx-pascal-case */}
                <SidebarItemLink onClick={() => {}} icon={<Home />}>
                  Home
                </SidebarItemLink>
              </SidebarItem>
            </SidebarItem>
          </SidebarItem>
          <SidebarItem
            title="MODELS"
            action={
              <Button
                kind={KIND.secondary}
                size={SIZE.compact}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <Settings />
              </Button>
            }
          >
            Tool
          </SidebarItem>
        </SidebarCpm>
        <Block flex={1}>
          <SidebarToolbar $as="div">JSXOK</SidebarToolbar>
        </Block>
      </Block>
    </CommonAppProvider>
  );
}
