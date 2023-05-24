import React, { useEffect, useRef, useState } from 'react';
import {TodoForm} from './TodoForm'
import { Todo } from './Todo'
import {TodoEditForm} from './TodoEditForm';
import axios from 'axios';



export const TodoList = () => {

  // const idRef = useRef(1);
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    fetch_todos();
  }, []);

  const createTodo = async (value) => {

    try{
      const response = await axios({
        method: 'POST',
        url: '/todo/create/',
        data: {
          "task": String(value)
        },
        xsrfHeaderName: "X-CSRFToken",
      });
      setTodos([...todos, response.data]);
    }catch(error){
      console.log(error);
    }

    // setTodos([
    //   ...todos,
    //   {id: idRef.current++, task: value, completed:false, editing: false},
    // ]);
  }

  const deleteTodo = async (id) =>{

    try{
      await axios({
        method: 'DELETE',
        url:`/todo/delete/${Number(id)}`,
        xsrfHeaderName: "X-CSRFToken",
    });
      await fetch_todos();
    }catch(error){
      console.log(error)
    }
  }

  const fetch_todos = async () => {

    try{
      const response = await axios.get('/todo/');
      setTodos(response.data);
    }catch(error){
        console.error(error);
      }
  }

  const toggleComplete = async (id) => {
    try{
        await axios({
        method: 'PATCH',
        url: `/todo/toggle/${id}/`,
        xsrfHeaderName: "X-CSRFToken",
      })
      fetch_todos();
    }catch(error){
        console.log(error);
      }
  }




  return (
    <div className="TodoWrapper">


  <TodoForm createTodo={createTodo}/>

{todos.map((todo) =>(
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    
    </div>
  )
}

export default TodoList