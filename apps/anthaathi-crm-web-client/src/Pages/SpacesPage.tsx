import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import PageHeader from '../Features/Core/Components/PageHeader';
import { Button, SIZE } from 'baseui/button';
import { Link, useSearchParams } from 'react-router-dom';
import { SpaceListViewPage } from './SpaceListViewPage';
import { useStyletron } from 'baseui';
import { KanbanBoardPage } from './KanbanBoardPage';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { SpacesPageQuery } from '../__generated__/SpacesPageQuery.graphql';
import { useParams } from 'react-router';
import { idGenerator } from '../Utils/relay/id-generator';

const AppSpacesPageQuery = graphql`
  query SpacesPageQuery($id: ID!) {
    node(id: $id) {
      ... on Space {
        id
        name
        ...SpaceListViewPage
      }
    }
  }
`;

export default function SpacesPage() {
  const [params, setParams] = useSearchParams();
  const [css] = useStyletron();

  const pageBody = useRef<HTMLDivElement>(null);
  const { space: spaceId } = useParams<{ issue: string; space: string }>();

  const data = useLazyLoadQuery<SpacesPageQuery>(AppSpacesPageQuery, {
    id: idGenerator('Space', spaceId as string),
  });

  const view = useMemo(() => {
    if (!data.node) {
      return null;
    }

    switch (params.get('view')) {
      case 'list':
        return <SpaceListViewPage $ref={data.node} ref={pageBody} />;
      case 'board':
      default:
        return <KanbanBoardPage />;
    }
  }, [params.get('view'), pageBody]);

  const ref = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(ref.current?.clientHeight || 0);
  }, [ref.current]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      setHeight(ref.current?.clientHeight || 0);
    });

    if (ref?.current) {
      resizeObserver.observe(ref?.current);
    }

    return () => {
      if (ref?.current) {
        resizeObserver.unobserve(ref?.current);
      }
    };
  }, []);

  if (!data.node) {
    return <>Space not found</>;
  }

  return (
    <>
      <PageHeader
        ref={ref}
        scrollBody={pageBody}
        title={`${data.node?.name}`}
        icon="layout-header-sidebar-left"
        endContent={
          <Button
            $as={Link}
            to="create"
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
