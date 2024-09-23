import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTodos, deleteTodo, updateTodo } from '../redux/user/todoSlice';

export default function TodoList() {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  console.log('Todos state:', todos); // Add this line

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (todo) => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Add this check
  if (!Array.isArray(todos)) {
    console.error('Todos is not an array:', todos);
    return <p>Error: Todos data is not in the expected format</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggle(todo)}
          />
          {todo.title}
          <button onClick={() => handleDelete(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}