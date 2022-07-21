import * as React from 'react';
import { useStyletron } from 'baseui';
import {
  StickyContainer,
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
import { LabelSmall } from 'baseui/typography';
import { FilesSidebar } from '../../Features/IssueTracker/Components/FilesSidebar';
import { Timeline } from '../../Features/Timeline/Components/Timeline';

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
        maxWidth: $theme.sizing.maxAppWidth,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
      })}
    >
      <StickyContainer>
        <Timeline />
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
              <FilesSidebar />
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
