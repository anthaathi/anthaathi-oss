import * as React from 'react';
import { SidebarMenuIconButton } from '@anthaathi/web-lib';
import { Block } from 'baseui/block';
import {
  Development,
  BlockStorage,
  MediaLibrary,
  Api,
  Http,
  Settings,
} from '@carbon/icons-react';
import { useRouter } from 'found';

export default function SidebarMenuItems() {
  const { router } = useRouter();

  return (
    <>
      <SidebarMenuIconButton
        key="content"
        icon={<BlockStorage />}
        title="Content"
        onClick={() => {
          router.push('/content');
        }}
      />
      <SidebarMenuIconButton
        icon={<Development />}
        title="Entities"
        key="Entities"
        onClick={() => {
          router.push('/entities');
        }}
      />
      <SidebarMenuIconButton
        icon={<MediaLibrary />}
        title="Media"
        key="Media"
        onClick={() => {
          router.push('/media');
        }}
      />
      <SidebarMenuIconButton
        icon={<Api />}
        title="Playground"
        key="Playground"
        onClick={() => {
          router.push('/playground');
        }}
      />
      <Block $style={{ flexGrow: 1 }} key="grow" />
      <SidebarMenuIconButton
        icon={<Http />}
        key="webhook"
        title="Webhook"
        onClick={() => {
          router.push('/config/webhooks');
        }}
      />
      <SidebarMenuIconButton
        icon={<Settings />}
        key="settings"
        title="Settings"
        onClick={() => {
          router.push('/settings');
        }}
      />
    </>
  );
}
