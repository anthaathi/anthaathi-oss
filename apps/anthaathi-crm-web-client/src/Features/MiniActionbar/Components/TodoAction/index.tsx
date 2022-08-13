import TodoList from '../../../TaskTodoList/components/TodoList';

export function TodoAction() {
  return (
    <>
      <TodoList taskList={['Hello world', 'lorem']} status></TodoList>
    </>
  );
}
