import * as React from 'react';
import { SidebarMenuIconButton, SidebarMenuDivider } from '@anthaathi/web-lib';
import { Block } from 'baseui/block';
import {
  Dashboard,
  Settings,
  Calendar,
  Group,
  FileStorage,
  Hashtag,
  Add,
} from '@carbon/icons-react';
import { useRouter } from 'found';
import { useIntl } from 'react-intl';
import { useStyletron } from 'baseui';

export default function SidebarMenuItems() {
  const { router } = useRouter();
  const intl = useIntl();

  const [css] = useStyletron();

  return (
    <>
      <SidebarMenuIconButton
        key="add-new-task"
        icon={<Add />}
        title={intl.formatMessage({
          defaultMessage: 'Create Task',
          id: '4+iiEI',
        })}
        onClick={() => {
          router.push('/task/create');
        }}
        className={css({})}
      />

      <SidebarMenuDivider />

      <SidebarMenuIconButton
        key="overview"
        icon={<Dashboard />}
        title={intl.formatMessage({ defaultMessage: 'Overview', id: '9uOFF3' })}
        onClick={() => {
          router.push('/');
        }}
      />

      <SidebarMenuIconButton
        key="calendar"
        icon={<Calendar />}
        title={intl.formatMessage({ defaultMessage: 'Calendar', id: 'Coy6SH' })}
        onClick={() => {
          router.push('/');
        }}
      />

      <SidebarMenuIconButton
        key="team"
        icon={<Group />}
        title={intl.formatMessage({ defaultMessage: 'Group', id: 'HpoDwk' })}
        onClick={() => {
          router.push('/');
        }}
      />

      <SidebarMenuIconButton
        key="files"
        icon={<FileStorage />}
        title={intl.formatMessage({ defaultMessage: 'Files', id: 'm4vqJl' })}
        onClick={() => {
          router.push('/');
        }}
      />

      <SidebarMenuIconButton
        key="tags"
        icon={<Hashtag />}
        title={intl.formatMessage({ defaultMessage: 'Tags', id: '1EYCdR' })}
        onClick={() => {
          router.push('/');
        }}
      />

      <Block $style={{ flexGrow: 1 }} key="grow" />

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
