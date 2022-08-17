import { TimelineBadge, TimelineItem, TimelineItemBody } from '../TimelineItem';
import { Icon } from '../../../Core/Components/Icon';
import { TimelineItemWrapper } from '../TimelineStatus';
import React from 'react';

export function CommentBadge() {
  return (
    <TimelineItemWrapper $style={{ marginLeft: '24px' }}>
      <TimelineItem data-component="timeline-item">
        <TimelineBadge>
          <Icon icon="home" />
        </TimelineBadge>
        <TimelineItemBody>Hello world</TimelineItemBody>
      </TimelineItem>
    </TimelineItemWrapper>
  );
}
