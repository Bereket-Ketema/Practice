// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
// App.tsx
import React, { useState } from 'react';
import TodoList from './component/Practice';

function App() {
  // Sample todo data
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn TypeScript', completed: false },
    { id: 3, text: 'Build a project', completed: true },
  ]);

  // Toggle function
  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList todos={todos} onToggle={handleToggle} />
    </div>
  );
}

export default App;
