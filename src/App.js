import React from 'react';
import Header from './components/header.js';
import TodoContainer from './components/todo-container.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TodoContainer></TodoContainer>
    </div>
  );
}

export default App;
