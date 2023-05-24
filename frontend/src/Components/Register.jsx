import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [form_data, setForm_data] = useState({
        username: '',
        password: '',
    });

    const handelChange = e => {
        setForm_data({...form_data, [e.target.name]: e.target.value});
    }

    const handelSubmit = async (e) => {
        e.preventDefault();

        try{
            await axios({
                method: 'POST',
                url: '/todo/register/', //enter the api endpoint
                data: {
                    "username": String(form_data.username),
                    "password": String(form_data.password),
                },
                xsrfHeaderName: "X-CSRFToken",
            }) 
            console.log('user registered sucessful');
            setForm_data({username:'', password:''});
        }catch(error){
            console.log(error);
        }

        
    }

  return (
    <div>
        <h1>Register to use Todo App</h1>

        <form onSubmit={handelSubmit}>
            <input type='text' name='username' value={form_data.username} onChange={handelChange} placeholder='enter username'/>
            <input type= 'password' name='password' value={form_data.password} onChange={handelChange} placeholder='enter password'/>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register