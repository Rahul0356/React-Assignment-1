import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <Header />
       <ToDoList 
  todos={todos}
  setTodos={setTodos}
  deleteTodo={deleteTodo}
  toggleComplete={toggleComplete}
  editTodo={editTodo}
/>
      </div>
    </div>
  );
};

export default App;
