import React from 'react';
import './App.css';
import AddTask from './componant/AddTask';
import TaskList from './componant/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App m-5">
      <AddTask/>
      <TaskList/>

    </div>
  );
}

export default App;
