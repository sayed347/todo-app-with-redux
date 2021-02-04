import React from 'react';
import Task from './Task';
import {useSelector} from 'react-redux';


function TaskList(){
    let todos = useSelector(state => state)
    return(
      <div className='my-5'>
          {todos.map(todo=>{return <Task key={todo.id} todo={todo}/>})}  
            
        </div>
    )
}
export default TaskList