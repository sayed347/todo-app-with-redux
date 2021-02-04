import React ,{useState}from 'react';
import {useDispatch} from 'react-redux'
import { deletetodo, updatetodo } from '../Redux/actions';



function Task({todo}){
    const [editable,setEditable]=useState(false);
    const [name,setName]=useState(todo.description);
    const [done,setDone]=useState(false);
    let dispatch=useDispatch();
    
    return (
   <div>
       

<div className='row mx-2 align-items-center'>
<div>#{todo.id}</div>
<div className='col'>
    {editable?<input type='text' className='control-form' 
    value={name}
    onChange={(e)=>{setName(e.target.value)}}/>  :<h4>{todo.description}</h4>}
</div>
<button className='btn btn-primary m-2' onClick={
    
  ()=>{dispatch(updatetodo({
...todo,
description:name,
  }));
  if(editable){setName(todo.description);}
  setEditable(!editable)}}>{editable?"update":"Edit"}</button>
  <button  className='btn btn-success' onClick={!todo.isDone}>{todo.isDone?'DOne':'NotDone'}</button>
  
<button className='btn btn-danger m-2' onClick={()=>{dispatch(deletetodo(todo.id))}}>Delete</button>
</div>
   </div>


    )
}
export default Task