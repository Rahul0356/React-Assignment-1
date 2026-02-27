import React, { useState } from 'react'

const ToDoList  = ({ todos, setTodos }) => {
  
     const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={addTodo} className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task"
        />
        <button className="bg-blue-500 text-white px-4">Add</button>
      </form>

      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default ToDoList 