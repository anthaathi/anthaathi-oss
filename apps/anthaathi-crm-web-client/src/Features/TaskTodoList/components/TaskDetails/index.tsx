import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
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
      <Block
        display="flex"
        marginTop="scale500"
        marginLeft="scale500"
        marginBottom="scale500"
        alignItems="flex-start"
        $style={{ cursor: 'pointer' }}
        onClick={() => {}}
      >
        {!status && (
          <span
            style={{ marginTop: 2 }}
            className="fa fa-circle-o"
            aria-hidden="true"
          />
        )}
        {status && (
          <span
            style={{ marginTop: 2 }}
            className="fa fa-check"
            aria-hidden="true"
          />
        )}

        <LabelMedium
          $style={{
            fontFamily: $theme.typography.primaryFontFamily,
            marginLeft: $theme.sizing.scale300,
          }}
        >
          {title}
        </LabelMedium>
      </Block>
      <StickySidebarDivider />
    </div>
  );
}

export default TaskDetails;
