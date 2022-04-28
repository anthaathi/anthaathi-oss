import * as React from 'react';
import {
  SidebarContent,
  SidebarItem,
  SidebarItemLink,
} from '@anthaathi/web-lib';
import { useIntl } from 'react-intl';
import ContentManagement from '../../Features/ContentManagement';

function SidebarItems() {
  const intl = useIntl();

  return (
    <>
      <SidebarItem
        title={intl.formatMessage({
          defaultMessage: 'Collections',
          id: 'ulh3kf',
        })}
      >
        <SidebarItemLink onClick={() => {}}>
          {intl.formatMessage({ defaultMessage: 'Pages', id: 'CxfKLC' })}
        </SidebarItemLink>
      </SidebarItem>
      <SidebarItem
        title={intl.formatMessage({
          defaultMessage: 'Single Types',
          id: 'crDZfK',
        })}
      >
        <SidebarItemLink onClick={() => {}}>Omkar</SidebarItemLink>
      </SidebarItem>
    </>
  );
}

export default function Content() {
  return (
    <SidebarContent sidebarItems={<SidebarItems />} title="Anthaathi CMS">
      <ContentManagement />
    </SidebarContent>
  );
}
