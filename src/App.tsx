import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import NavBar from './components/NavBar';
import TodoForm from './components/TodoForm';

const App: React.FunctionComponent = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <TodoForm />
        <TaskList />
      </div>
    </>
  );
}

export default App;