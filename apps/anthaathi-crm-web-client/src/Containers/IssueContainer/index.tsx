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

export function IssueContainer() {
  const [css, $theme] = useStyletron();

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
            title="Find top 5 customer requests"
            subtitle={
              <>
                Reported by <UserChip />. yesterday at 12:41pm
              </>
            }
          />
          <TaskMetaData
            badgeBackgroundColor="#F5F0FF"
            badgeTitle="MARKETING"
            badgeTitleColor="#764CED"
            userDetails={{ username: 'User name' }}
            dateOfTask="Tue, Dec 25"
          />
        </AppWrapper>
      </div>

      <AppWrapper $isDense={true}>
        <StatefulTabs fill={FILL.fixed}>
          <Tab
            title={
              <>
                <Icon icon="info-circle-o" />{' '}
                <span className={css({ width: '10px' })}></span> Overview
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
                <span className={css({ width: '10px' })}></span> Tasks
              </>
            }
          >
            <TodoList taskList={['Something']} status />
          </Tab>

          <Tab
            title={
              <>
                <Icon icon="window-file" />{' '}
                <span className={css({ width: '10px' })}></span> Files
              </>
            }
          >
            <FileList />
          </Tab>

          <Tab
            title={
              <>
                <Icon icon="gear" />{' '}
                <span className={css({ width: '10px' })}></span> Manage
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
