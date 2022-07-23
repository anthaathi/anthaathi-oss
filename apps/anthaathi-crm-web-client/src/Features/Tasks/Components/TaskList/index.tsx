import { Checkbox } from 'baseui/checkbox';
import { styled, useStyletron } from 'baseui';

export function TaskList() {
  const [css] = useStyletron();

  return (
    <ul>
      <TaskListItem>
        <Checkbox>Task 1</Checkbox>
      </TaskListItem>
      <TaskListItem>
        <Checkbox>Task 2</Checkbox>
      </TaskListItem>
      <TaskListItem>
        <Checkbox>Task 2</Checkbox>
      </TaskListItem>
      <TaskListItem>
        <Checkbox>Task 2</Checkbox>
      </TaskListItem>
      <TaskListItem>
        <Checkbox>Task 2</Checkbox>
      </TaskListItem>
      <TaskListItem>
        <Checkbox>Task 2</Checkbox>
      </TaskListItem>
    </ul>
  );
}

export const TaskListItem = styled('li', () => ({
  listStyle: 'none',
  marginBottom: '12px',
}));
