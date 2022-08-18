import React from 'react';
import PageHeader from '../Features/Core/Components/PageHeader';
import { Button, SIZE } from 'baseui/button';
import { useSearchParams } from 'react-router-dom';
import { SpaceListViewPage } from './SpaceListViewPage';

export default function SpacesPage() {
  const [params, setParams] = useSearchParams();

  return (
    <div>
      <PageHeader
        title="Spaces"
        icon="layout-header-sidebar-left"
        endContent={
          <Button
            overrides={{ Root: { style: { marginRight: '12px' } } }}
            size={SIZE.compact}
          >
            Create Task
          </Button>
        }
        tabs={[
          {
            key: 'list',
            title: 'List',
          },
          {
            key: 'board',
            title: 'Board',
          },
        ]}
        onChangeTab={(key) => {
          setParams({
            view: key as string,
          });
        }}
        activeTab={(params.get('view') as string) || 'list'}
      />

      <SpaceListViewPage />
    </div>
  );
}
