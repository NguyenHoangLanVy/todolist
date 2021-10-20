import './App.css';
import React from 'react';
import TodoList from './component/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import 'font-awesome/css/font-awesome.min.css'

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
