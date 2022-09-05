import * as React from 'react';
import { useStyletron } from 'baseui';
import { Checkbox } from 'baseui/checkbox';
import { StatefulList } from 'baseui/dnd-list';
import { expandBorderStyles } from 'baseui/styles';
import { HeadingXSmall } from 'baseui/typography';
import { StickySidebarDivider } from '../../../IssueTracker/Components/StickySidebar';

export interface TaskDetailsProps {
  taskList: string[]; // task title
  status: boolean; // task completed status
}

const TaskCompletedDragHandle = () => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        marginRight: '1em',
        width: '24px',
        display: 'flex',
        alignItems: 'center',
      })}
    >
      <Checkbox checked={false} />
    </div>
  );
};

const TaskDragHandle = () => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        marginRight: '1em',
        width: '24px',
        display: 'flex',
        alignItems: 'center',
      })}
    >
      <Checkbox checked={true} />
    </div>
  );
};

function TodoList({ taskList, status }: TaskDetailsProps) {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        paddingTop: $theme.sizing.scale400,
        paddingBottom: $theme.sizing.scale400,
      })}
    >
      <HeadingXSmall
        marginTop="scale200"
        marginBottom="0"
        marginLeft="scale400"
        marginRight="scale400"
      >
        Tasks
      </HeadingXSmall>

      <div
        className={css({
          width: `calc(100% + ${$theme.sizing.scale400} + ${$theme.sizing.scale400})`,
          marginTop: $theme.sizing.scale600,
          marginBottom: $theme.sizing.scale100,
          ...expandBorderStyles($theme.borders.border100),
        })}
      />

      <div className={css({ width: '100%' })}>
        <StatefulList
          initialState={{
            items: taskList,
          }}
          overrides={{
            DragHandle: status ? TaskDragHandle : TaskCompletedDragHandle,
            Item: {
              style: ({ $theme }) => ({
                paddingTop: '10px',
                paddingBottom: '10px',
                marginRight: '1px',
                marginTop: '5px',
                marginBottom: '5px',
                borderTopWidth: '0px',
                borderLeftWidth: '0px',
                borderRightWidth: '0px',
                borderBottomWidth: '0px',
                ':hover': {
                  borderTopWidth: '0px',
                  borderLeftWidth: '0px',
                  borderRightWidth: '0px',
                  borderBottomWidth: '0px',
                  transitionProperty: 'all',
                  transitionDuration: $theme.animation.timing100,
                  transitionTimingFunction: 'ease-out',
                  boxShadow: $theme.lighting.shadow500,
                },
              }),
            },
          }}
          removable
          onChange={console.log}
        />

        <StickySidebarDivider />
      </div>
    </div>
  );
}

export default TodoList;
