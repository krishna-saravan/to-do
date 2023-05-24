import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {

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
                url: '/todo/login/', //enter the api endpoint
                data: {
                    "username": String(form_data.username),
                    "password": String(form_data.password),
                },
                withCredentials: true,
                xsrfHeaderName: "X-CSRFToken",
            }) 
            console.log('user has logged in sucessfully')
            setForm_data({username:'', password:''})
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div>
        <h1>Login to see your tasks</h1>

        <form onSubmit={handelSubmit}>
            <input type='text' name='username' value={form_data.username} onChange={handelChange} placeholder='enter username'/>
            <input type= 'password' name='password' value={form_data.password} onChange={handelChange} placeholder='enter password'/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login