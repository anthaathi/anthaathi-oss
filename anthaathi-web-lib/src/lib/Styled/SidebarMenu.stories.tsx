import * as React from 'react';
import { Block } from 'baseui/block';
// @ts-ignore
import { Home } from '@carbon/icons-react';
import { useStyletron } from 'baseui';
import SidebarCmp, {
  SidebarMenuDivider,
  SidebarMenuIconButton,
  SidebarMenuToggle,
} from './SidebarMenu';
import { CommonAppProvider } from '../CommonAppProvider';
import Anthaathi from '../Icon/Anthaathi';

export default {
  title: 'Anthaathi/Styled',
};

export function SidebarMenu() {
  const [css] = useStyletron();

  return (
    <CommonAppProvider>
      <SidebarCmp>
        <SidebarMenuIconButton
          icon={
            <Anthaathi
              width={48}
              height={48}
              className={css({ overflow: 'hidden' })}
            />
          }
          title="Anthaathi"
          tooltip="Anthaathi"
        />

        <SidebarMenuDivider />

        <SidebarMenuIconButton
          icon={<Home />}
          title="Home page"
          tooltip="Home page"
          onClick={() => {}}
        />

        <SidebarMenuIconButton
          icon={<Home />}
          title="Home page"
          tooltip="Home page"
          onClick={() => {}}
        />

        <Block $style={{ flexGrow: 1 }} />

        <SidebarMenuIconButton
          icon={
            <Anthaathi
              className={css({ overflow: 'hidden' })}
              width={48}
              height={48}
            />
          }
          title="Anthaathi"
          tooltip="Anthaathi"
        />

        <SidebarMenuDivider />

        <SidebarMenuToggle />
      </SidebarCmp>
    </CommonAppProvider>
  );
}
