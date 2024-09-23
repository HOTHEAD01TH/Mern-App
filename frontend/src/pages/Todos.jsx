import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

export default function Todos() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Todos</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}