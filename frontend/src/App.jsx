import React, { useState } from 'react';
import Todo from './Todo';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Todo 1', description: 'Description for Todo 1' },
    { id: 2, title: 'Todo 2', description: 'Description for Todo 2' },
    { id: 3, title: 'Todo 3', description: 'Description for Todo 3' }
  ]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoDescription, setNewTodoDescription] = useState('');

  const handleAddTodo = () => {
    if (newTodoTitle.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        title: newTodoTitle,
        description: newTodoDescription
      };
      setTodos([...todos, newTodo]);
      setNewTodoTitle('');
      setNewTodoDescription('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (id, newTitle, newDescription) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, title: newTitle, description: newDescription };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter todo title"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter todo description"
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <Todo
              title={todo.title}
              description={todo.description}
              onDelete={() => handleDeleteTodo(todo.id)}
              onEdit={(newTitle, newDescription) => handleEditTodo(todo.id, newTitle, newDescription)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
