import { useStyletron } from 'baseui';
import { Checkbox } from 'baseui/checkbox';
import { StatefulList } from 'baseui/dnd-list';
import { ArrowRight } from 'baseui/icon';
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
  return (
    <div>
      <StatefulList
        initialState={{
          items: taskList,
        }}
        overrides={{
          DragHandle: status ? TaskDragHandle : TaskCompletedDragHandle,
        }}
        removable
        onChange={console.log}
      />

      <StickySidebarDivider />
    </div>
  );
}

export default TodoList;
