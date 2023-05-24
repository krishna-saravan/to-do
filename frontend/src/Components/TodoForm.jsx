import React from 'react'
import '../App.css'
import { useState } from 'react'

export const TodoForm = ({createTodo}) => {

  const [value,setValue] = useState("");

  const handelChange = (e) =>{
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    // prevent default action
      e.preventDefault();
        // add todo
        createTodo(value);
        // clear form after submission
        setValue('');
    };

  return (
       <form onSubmit={handleSubmit} className="TodoForm">

<input className="todo-input" placeholder='ADD A TASK' value={value} onChange={handelChange}></input>
<button className='todo-btn' type='submit'>ADD</button>
</form>
  )
}