import React, { useState } from 'react';

const ToDoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (!newText.trim()) return;
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center mb-2">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border p-1 flex-1 mr-2"
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-2 mr-2"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span
            onClick={() => toggleComplete(todo.id)}
            className={
              todo.completed
                ? "line-through cursor-pointer flex-1"
                : "cursor-pointer flex-1"
            }
          >
            {todo.text}
          </span>

          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-2 mr-2"
          >
            Edit
          </button>

          <button
            onClick={() => deleteTodo(todo.id)}
            className="bg-red-500 text-white px-2"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default ToDoItem;