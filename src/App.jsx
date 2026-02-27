import React, { useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList ';

const App = () => {
  
   const [todos, setTodos] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <Header />
        <ToDoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App