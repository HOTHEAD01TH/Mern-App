import React, { useState } from 'react';

function Todo(props) {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    props.onEdit(title, description);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={title} onChange={handleTitleChange} />
          <input type="text" value={description} onChange={handleDescriptionChange} />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={props.onDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Todo;
