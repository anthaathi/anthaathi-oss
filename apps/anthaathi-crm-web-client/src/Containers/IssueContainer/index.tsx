import CommentBox from '../../Features/Timeline/Components/CommentBox';
import { CommentBadge } from '../../Features/Timeline/Components/CommentBadge';
import React from 'react';
import SpaceTaskHeader from '../../Features/IssueTracker/Components/TaskHeader';
import TaskMetaData from '../../Features/IssueTracker/Components/TaskMetaData';
import { useStyletron } from 'baseui';
import { UserChip } from '../../Features/Authentication/Components/UserChip';
import { AddCommentTextbox } from '../../Features/Timeline/Components/AddCommentTextbox';
import { FILL, StatefulTabs, Tab } from 'baseui/tabs-motion';
import { Icon } from '../../Features/Core/Components/Icon';
import { TaskDescription } from '../../Features/IssueTracker/Components/TaskDescription';
import { AppWrapper } from '../../Features/Core/Components/AppWrapper';
import TodoList from '../../Features/TaskTodoList/components/TodoList';
import { FileList } from '../../Features/IssueTracker/Components/FileList';
import { NotificationCustomizationByIssue } from '../../Features/IssueTracker/Components/NotificationCustomizationByIssue';
import { graphql, useFragment } from 'react-relay';
import { IssueContainerFragment$key } from '../../__generated__/IssueContainerFragment.graphql';
import dayjs from 'dayjs';
import { RelativeTimeRenderer } from '../../Features/Core/Components/RelativeTimeRenderer';

const IssueContainerFragment = graphql`
  fragment IssueContainerFragment on Task {
    id
    title
    createdAt
    dueDate
    ...TaskMetaData
    reportedBy {
      ...UserChip
    }
  }
`;

export function IssueContainer({ $ref }: { $ref: IssueContainerFragment$key }) {
  const [css, $theme] = useStyletron();
  const issue = useFragment(IssueContainerFragment, $ref);

  return (
    <>
      <div
        className={css({
          paddingBottom: $theme.sizing.scale600,
          paddingTop: $theme.sizing.scale600,
        })}
      >
        <AppWrapper $isDense={true}>
          <SpaceTaskHeader
            title={issue.title}
            subtitle={
              <>
                {issue.reportedBy && (
                  <>
                    Reported by <UserChip $ref={issue.reportedBy} />
                  </>
                )}{' '}
                <RelativeTimeRenderer time={issue.createdAt} to="from" />
              </>
            }
          />
          <TaskMetaData $ref={issue} />
        </AppWrapper>
      </div>

      <AppWrapper $isDense={true}>
        <StatefulTabs fill={FILL.fixed}>
          <Tab
            title={
              <>
                <Icon icon="info-circle-o" />{' '}
                <span className={css({ width: '10px' })} /> Overview
              </>
            }
          >
            <div
              className={css({
                borderBottomWidth: $theme.borders.border100.borderWidth,
                borderBottomStyle: $theme.borders.border100
                  .borderStyle as never,
                borderBottomColor: $theme.borders.border100.borderColor,
                paddingBottom: $theme.sizing.scale800,
              })}
            >
              <TaskDescription />
            </div>

            <div
              className={css({
                marginBottom: '24px',
                marginTop: '24px',
              })}
            >
              <AddCommentTextbox />
            </div>

            <CommentBox fullWidth={true} />
            <CommentBadge />
            <CommentBox fullWidth={true} />
            <CommentBadge />
            <CommentBox fullWidth={true} />
            <CommentBadge />
            <CommentBox fullWidth={true} />
          </Tab>

          <Tab
            title={
              <>
                <Icon icon="tasks" />{' '}
                <span className={css({ width: '10px' })} /> Tasks
              </>
            }
          >
            <TodoList taskList={['Something']} status />
          </Tab>

          <Tab
            title={
              <>
                <Icon icon="window-file" />{' '}
                <span className={css({ width: '10px' })} /> Files
              </>
            }
          >
            <FileList />
          </Tab>

          <Tab
            title={
              <>
                <Icon icon="gear" /> <span className={css({ width: '10px' })} />{' '}
                Manage
              </>
            }
          >
            <NotificationCustomizationByIssue />
          </Tab>
        </StatefulTabs>
      </AppWrapper>
    </>
  );
}
