import * as React from 'react';
import { Skeleton } from 'baseui/skeleton';
import { SidebarContent } from '@anthaathi/web-lib';
import { Spinner } from 'baseui/spinner';
import { Block } from 'baseui/block';

export default function LoadingScreen() {
  return (
    <SidebarContent
      sidebarItems={
        <Skeleton
          height="calc(100% - 64px - 24px)"
          width="calc(100% - 24px)"
          overrides={{
            Root: { style: { margin: '12px auto' } },
            Row: {
              style: {
                height: '28px',
              },
            },
          }}
          animation
          rows={10}
        />
      }
      title="Anthaathi CMS"
    >
      <Block
        $style={{
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          placeContent: 'center',
          height: '100vh',
        }}
      >
        <Spinner />
      </Block>
    </SidebarContent>
  );
}
