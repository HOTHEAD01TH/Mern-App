import React from 'react';

function DeleteTodoButton({ onDelete }) {
  return (
    <button onClick={onDelete}>Delete</button>
  );
}

export default DeleteTodoButton;
