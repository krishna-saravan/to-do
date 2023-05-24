import React, { useState } from 'react'

const TodoEditForm = ({editTodo, todo}) => {

  const [value, setValue] = useState('');

  const handelChange = (e) => {
    setValue(e.target.value);
  }

  const handelSubmit = (e) => {
    e.prevent.Default();

    // handelEdit(value, todo.id);
  }

  return (
    <>

    <form onSubmit={handelSubmit} className="TodoForm">
      <input
        type='text' value={value} onChange={handelChange}
      ></input>

      <button type='submit'></button>
    </form>
     
    </>
  )
}

export default TodoEditForm