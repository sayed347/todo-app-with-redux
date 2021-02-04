import React,{useState}from 'react';
import {addtodo, filtertodo} from '../Redux/actions';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';




    function AddTask(){
      let todos=useSelector(state=>state)  
    let [name,setName]=useState('');
    let dispatch=useDispatch();
    return (
        <div className='row m-2'>
            
            
                <input type='text'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                 className='col form-control'
                  
                   />
                <button className='btn btn-primary mx-2'
                onClick={()=>{
                    dispatch(addtodo({
                        id:Math.floor(Math.random() *100),
                        description:name,
                        isDone:true
                    }
                    
                        
                    ))
                    
                     
                }}
                 >Add</button>
                 <button className='btn btn-warning' onClick={()=>dispatch(filtertodo(todos.isDone))}>ff</button>
                 
                
            
        </div>
    )
}
export default AddTask;