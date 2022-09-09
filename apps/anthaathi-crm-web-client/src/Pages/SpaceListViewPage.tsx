import { SpaceCard } from '../Features/Space/Components/SpaceCard';
import { Outlet, useParams } from 'react-router';
import { SplitView } from '../Features/Core/Components/SplitView';
import React, { forwardRef } from 'react';
import { useStyletron } from 'baseui';
import { graphql, useFragment, usePaginationFragment } from 'react-relay';
import { SpaceListViewPage$key } from '../__generated__/SpaceListViewPage.graphql';
import { SpaceListViewPageViewComponentTaskView_spaces$key } from '../__generated__/SpaceListViewPageViewComponentTaskView_spaces.graphql';
import { SpaceListViewPageViewComponent_spaces$key } from '../__generated__/SpaceListViewPageViewComponent_spaces.graphql';
import { Button } from 'baseui/button';
import { LabelMedium, LabelSmall } from 'baseui/typography';

export const SpaceListViewPage = forwardRef<
  HTMLDivElement,
  {
    $ref: SpaceListViewPage$key;
  }
>(({ $ref }, ref) => {
  const [css, $theme] = useStyletron();

  const tasks = useFragment(
    graphql`
      fragment SpaceListViewPage on Space {
        name
        ...SpaceListViewPageViewComponent_spaces
      }
    `,
    $ref
  );

  return (
    <SplitView
      id="spaces"
      left={
        <div className={css({ paddingBottom: $theme.sizing.scale800 })}>
          <ListViewByStatuses $ref={tasks} />
        </div>
      }
      right={
        <div
          ref={ref}
          data-kind="split-view-outlet"
          className={css({ overflow: 'auto', height: '100%' })}
        >
          <Outlet />
        </div>
      }
    />
  );
});

export const ListViewByStatuses = ({
  $ref,
}: {
  $ref: SpaceListViewPageViewComponent_spaces$key;
}) => {
  const [css, $theme] = useStyletron();

  const { hasNext, isLoadingNext, loadNext, data } = usePaginationFragment(
    graphql`
      fragment SpaceListViewPageViewComponent_spaces on Space
      @argumentDefinitions(
        cursor: { type: "String" }
        count: { type: "Int", defaultValue: 5 }
      )
      @refetchable(queryName: "SpacesTaskListPaginationQuery") {
        tasksByStatuses(first: $count, after: $cursor)
          @connection(key: "ListView_spaces__tasksByStatuses") {
          edges {
            node {
              id
              status {
                name
                color
              }

              ...SpaceListViewPageViewComponentTaskView_spaces
            }
          }
        }
      }
    `,
    $ref
  );

  return (
    <>
      {data.tasksByStatuses?.edges?.map((task) => {
        if (!task || !task.node) {
          return null;
        }

        return (
          <>
            <div
              className={css({
                padding: $theme.sizing.scale400,
                backgroundColor: $theme.colors.backgroundLightAccent,
                position: 'sticky',
                top: 0,
              })}
            >
              <LabelMedium
                $style={{
                  fontWeight: 600,
                }}
              >
                {task.node.status?.name}
              </LabelMedium>
            </div>
            <ListView key={task.node.id} $ref={task.node} />
            <div className={css({ paddingBottom: '12px' })} />
          </>
        );
      })}

      {hasNext && (
        <Button onClick={() => loadNext(10)} isLoading={isLoadingNext}>
          Load more
        </Button>
      )}
    </>
  );
};

const ListView = ({
  $ref,
}: {
  $ref: SpaceListViewPageViewComponentTaskView_spaces$key;
}) => {
  const [css, $theme] = useStyletron();
  const { issue: issueId } = useParams<{ issue: string }>();

  const { hasNext, isLoadingNext, loadNext, data } = usePaginationFragment(
    graphql`
      fragment SpaceListViewPageViewComponentTaskView_spaces on TaskByStatus
      @argumentDefinitions(
        cursor: { type: "String" }
        count: { type: "Int", defaultValue: 5 }
      )
      @refetchable(queryName: "SpacesTaskListInfoPaginationQuery") {
        tasks(first: $count, after: $cursor)
          @connection(key: "ListView_spaces__tasks") {
          edges {
            node {
              ...SpaceCardFragment
              id
            }
          }
        }
      }
    `,
    $ref
  );

  if ((data.tasks?.edges?.length || 0) === 0) {
    return (
      <div className={css({ padding: $theme.sizing.scale400 })}>
        <LabelSmall>No Tasks</LabelSmall>
      </div>
    );
  }

  return (
    <ul>
      {data.tasks?.edges?.map((res, index) => {
        return (
          <li
            className={css({
              paddingLeft: $theme.sizing.scale400,
              paddingRight: $theme.sizing.scale400,
              paddingTop: $theme.sizing.scale400,
            })}
            key={res?.node?.id || index}
          >
            <SpaceCard
              $ref={res!.node!}
              isSelected={issueId === res?.node?.id}
              url={res?.node?.id || ''}
            />
          </li>
        );
      })}
      {hasNext && (
        <Button onClick={() => loadNext(10)} isLoading={isLoadingNext}>
          Load more
        </Button>
      )}
    </ul>
  );
};

SpaceListViewPage.displayName = 'SpaceListViewPage';
