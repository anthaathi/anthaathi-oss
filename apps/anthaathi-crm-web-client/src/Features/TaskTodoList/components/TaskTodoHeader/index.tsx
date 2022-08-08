import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { LabelLarge } from 'baseui/typography';
import { StickySidebarDivider } from '../../../IssueTracker/Components/StickySidebar';

function TaskTodoHeader({ title }: { title: string }) {
  const [, $theme] = useStyletron();
  return (
    <div>
      <Block
        display="flex"
        alignContent="flex-start"
        paddingTop="scale500"
        paddingLeft="scale500"
        alignItems="center"
        $style={{ cursor: 'pointer' }}
        onClick={() => {}}
      >
        <span className="fa fa-check-circle" aria-hidden="true"></span>
        <LabelLarge
          $style={{
            fontFamily: $theme.typography.headingFontFamily,
            marginLeft: $theme.sizing.scale300,
          }}
        >
          {title}
        </LabelLarge>
      </Block>
      <StickySidebarDivider />
    </div>
  );
}

export default TaskTodoHeader;
