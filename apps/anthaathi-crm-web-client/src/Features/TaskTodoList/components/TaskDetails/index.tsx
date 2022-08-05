import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { Checkbox } from 'baseui/checkbox';
import { LabelMedium } from 'baseui/typography';
import { StickySidebarDivider } from '../../../IssueTracker/Components/StickySidebar';

export interface TaskDetailsProps {
  title: string; // task title
  status: boolean; // task completed status
}

function TaskDetails({ title, status }: TaskDetailsProps) {
  const [, $theme] = useStyletron();
  return (
    <div>
      <Block margin="scale500">
        <Checkbox checked={status}>
          <LabelMedium>{title}</LabelMedium>
        </Checkbox>
      </Block>
      <StickySidebarDivider />
    </div>
  );
}

export default TaskDetails;
