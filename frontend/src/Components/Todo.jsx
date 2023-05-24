import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({todo,deleteTodo, toggleComplete}) => {
  return (
    <div className='Todo'>

<p className={`${todo.completed ? 'completed' : ""}`} onClick={() => toggleComplete(todo.id)}>{todo.task}</p>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />

    </div>
  )
}