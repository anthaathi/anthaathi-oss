import { TimelineBadge, TimelineItem, TimelineItemBody } from '../TimelineItem';
import {
  TimelineItemWrapper,
  TimelineStatus,
  TimelineStatusBody,
  TimelineStatusTitleWrapper,
  TimelineWrapper,
} from '../TimelineStatus';
import { useStyletron } from 'baseui';
import { Icon } from '../../../Core/Components/Icon';

export interface CommentBoxProps {
  fullWidth?: boolean;
}

function CommentBox({ fullWidth = false }: CommentBoxProps) {
  const [, $theme] = useStyletron();

  return (
    <>
      <TimelineWrapper
        $style={{
          [$theme.mediaQuery.large]: {
            marginLeft: fullWidth ? '0' : '60px',
          },
        }}
      >
        <TimelineStatus>
          <TimelineStatusTitleWrapper>Hello world</TimelineStatusTitleWrapper>

          <TimelineStatusBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            enim eum excepturi, explicabo fuga in inventore labore maiores nam
            nostrum odio officiis perspiciatis quaerat quibusdam sint totam
            ullam vel vero.
          </TimelineStatusBody>
        </TimelineStatus>
      </TimelineWrapper>
    </>
  );
}

export default CommentBox;
