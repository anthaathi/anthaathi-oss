import * as React from 'react';
import { useStyletron } from 'baseui';
import {
  StickyContainer,
  StickyContainerWrapper,
  StickySidebar,
  StickySidebarContent,
  StickySidebarDivider,
} from '../../Features/IssueTracker/Components/StickySidebar';
import { FILL, Tab, Tabs } from 'baseui/tabs-motion';
import { Button, KIND, SIZE } from 'baseui/button';
import { Block } from 'baseui/block';
import { Icon } from '../../Features/Core/Components/Icon';
import { NotificationCustomizationByIssue } from '../../Features/IssueTracker/Components/NotificationCustomizationByIssue';
import { SidebarSelector } from '../../Features/IssueTracker/Components/SidebarSelector';
import { LabelRenderer } from '../../Features/IssueTracker/Components/LabelRenderer';
import { HeadingMedium, LabelSmall } from 'baseui/typography';
import { FilesSidebar } from '../../Features/IssueTracker/Components/FilesSidebar';
import {
  TimelineBadge,
  TimelineItem,
  TimelineItemBody,
} from '../../Features/Timeline/Components/TimelineItem';
import { AddCommentTextbox } from '../../Features/Timeline/Components/AddCommentTextbox';
import {
  TimelineItemWrapper,
  TimelineStatus,
  TimelineStatusBody,
  TimelineStatusTitleWrapper,
  TimelineWrapper,
} from '../../Features/Timeline/Components/TimelineStatus';
import { TaskList } from '../../Features/Tasks/Components/TaskList';

export function TaskTimeLine() {
  const [css, $theme] = useStyletron();
  const [activeKey, setActiveKey] = React.useState('0');

  const override = {
    Tab: {
      style: {
        ...$theme.typography.LabelSmall,
        fontFamily: $theme.typography.headingFontFamily,
        borderRadius: $theme.borders.buttonBorderRadius,
      },
    },
  };

  return (
    <div
      className={css({
        maxWidth: '1600px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
      })}
    >
      <StickyContainer>
        <StickyContainerWrapper>
          <TimelineWrapper>
            <HeadingMedium marginTop="scale400" marginBottom="scale800">
              <LabelSmall>#1234</LabelSmall>
              Hello world
            </HeadingMedium>
          </TimelineWrapper>

          <TimelineWrapper>
            <TimelineStatus>
              <TimelineStatusTitleWrapper>
                Hello world
              </TimelineStatusTitleWrapper>

              <TimelineStatusBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto enim eum excepturi, explicabo fuga in inventore
                labore maiores nam nostrum odio officiis perspiciatis quaerat
                quibusdam sint totam ullam vel vero.
              </TimelineStatusBody>
            </TimelineStatus>
          </TimelineWrapper>

          <TimelineItemWrapper>
            <TimelineItem data-component="timeline-item">
              <TimelineBadge>
                <svg
                  aria-hidden="true"
                  className="octicon octicon-flame"
                  height="16"
                  version="1.1"
                  viewBox="0 0 12 16"
                  width="12"
                >
                  <path
                    d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </TimelineBadge>
              <TimelineItemBody>Hello world</TimelineItemBody>
            </TimelineItem>
          </TimelineItemWrapper>

          <TimelineWrapper>
            <TimelineStatus>
              <TimelineStatusTitleWrapper>
                Hello world
              </TimelineStatusTitleWrapper>

              <TimelineStatusBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto enim eum excepturi, explicabo fuga in inventore
                labore maiores nam nostrum odio officiis perspiciatis quaerat
                quibusdam sint totam ullam vel vero.
              </TimelineStatusBody>
            </TimelineStatus>
          </TimelineWrapper>

          <TimelineItemWrapper>
            <TimelineItem data-component="timeline-item">
              <TimelineBadge>
                <svg
                  aria-hidden="true"
                  className="octicon octicon-flame"
                  height="16"
                  version="1.1"
                  viewBox="0 0 12 16"
                  width="12"
                >
                  <path
                    d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </TimelineBadge>
              <TimelineItemBody>Hello world</TimelineItemBody>
            </TimelineItem>
          </TimelineItemWrapper>

          <AddCommentTextbox />
        </StickyContainerWrapper>
      </StickyContainer>

      <StickySidebar>
        <StickySidebarContent>
          <Tabs
            activeKey={activeKey}
            onChange={({ activeKey }) => {
              setActiveKey(activeKey as string);
            }}
            activateOnFocus
            fill={FILL.fixed}
          >
            <Tab title="Manage" overrides={override}>
              <SidebarSelector label="Assigned" />

              <StickySidebarDivider />

              <SidebarSelector label="Project" />

              <StickySidebarDivider />

              <SidebarSelector label="Label" />

              <LabelRenderer />

              <StickySidebarDivider />

              <SidebarSelector label="Due date" />

              <LabelSmall>24-May-2022</LabelSmall>

              <StickySidebarDivider />

              <NotificationCustomizationByIssue />

              <StickySidebarDivider />

              <Block marginTop="scale400">
                <Button size={SIZE.mini} kind={KIND.tertiary}>
                  <Icon icon="lock" />
                  <span className={css({ width: '8px' })} />
                  LOCK
                </Button>

                <Button
                  size={SIZE.mini}
                  kind={KIND.tertiary}
                  $style={{
                    ':hover': { backgroundColor: $theme.colors.negative50 },
                  }}
                >
                  <Icon icon="minus-circle-o" />
                  <span className={css({ width: '8px' })} />
                  CLOSE ISSUE
                </Button>
              </Block>
            </Tab>
            <Tab title="Tasks" overrides={override}>
              <TaskList />
            </Tab>
            <Tab title="Files" overrides={override}>
              <FilesSidebar />
            </Tab>
          </Tabs>
        </StickySidebarContent>
      </StickySidebar>
    </div>
  );
}
