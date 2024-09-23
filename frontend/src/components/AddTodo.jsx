import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/user/todoSlice';

export default function AddTodo() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title }));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}