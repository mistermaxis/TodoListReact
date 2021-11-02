import React from 'react'; // eslint-disable-line no-unused-vars
import Header from './components/header.js'; // eslint-disable-line no-unused-vars
import TodoContainer from './components/todo-container.js'; // eslint-disable-line no-unused-vars
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
