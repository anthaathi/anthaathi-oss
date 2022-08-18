import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import PageHeader from '../Features/Core/Components/PageHeader';
import { Button, SIZE } from 'baseui/button';
import { useSearchParams } from 'react-router-dom';
import { SpaceListViewPage } from './SpaceListViewPage';
import { useStyletron } from 'baseui';
import { KanbanBoardPage } from './KanbanBoardPage';

export default function SpacesPage() {
  const [params, setParams] = useSearchParams();
  const [css] = useStyletron();

  const pageBody = useRef<HTMLDivElement>(null);

  const view = useMemo(() => {
    switch (params.get('view')) {
      case 'board':
      default:
        return <KanbanBoardPage />;
      case 'list':
        return <SpaceListViewPage ref={pageBody} />;
    }
  }, [params.get('view'), pageBody]);

  const ref = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(ref.current?.clientHeight || 0);
  }, [ref.current]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          // Firefox implements `contentBoxSize` as a single content rect, rather than an array
          const contentBoxSize = Array.isArray(entry.contentBoxSize)
            ? entry.contentBoxSize[0]
            : entry.contentBoxSize;
        } else {
        }
      }

      setHeight(ref.current?.clientHeight || 0);
    });

    resizeObserver.observe(ref?.current!!);

    return () => {
      if (ref?.current) {
        resizeObserver.unobserve(ref?.current);
      }
    };
  }, []);

  return (
    <>
      <PageHeader
        ref={ref}
        scrollBody={pageBody}
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
            key: 'board',
            title: 'Board',
          },
          {
            key: 'list',
            title: 'List',
          },
        ]}
        onChangeTab={(key) => {
          setParams({
            view: key as string,
          });
        }}
        activeTab={(params.get('view') as string) || 'board'}
      />

      <div
        className={css({
          height: `calc(100vh - 48px - ${height}px)`,
          overflow: 'auto',
          transitionProperty: 'all',
          transitionDuration: '100ms',
          transitionTimingFunction: 'ease',
        })}
      >
        {view}
      </div>
    </>
  );
}
