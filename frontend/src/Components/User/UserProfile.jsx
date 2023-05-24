import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { redirect } from 'react-router-dom'
import Logout from '../Logout'

const UserProfile = () => {

    const [user, setUser] = useState({})

  const get_user = useEffect(() => {

    if(!user){
        redirect('/login')
    }
    fetch_user();
  },[])

  const fetch_user = async () => {
    try{
    const response = await axios({
      method: 'GET',
      url: 'todo/profile',
      data:{},
      withCredentials: true,
                    xsrfHeaderName: "X-CSRFToken",
    });

    setUser(response);
    
  }catch(error){
    console.log(error)
  }
  console.log(user)
}
  return (
    <div>
        <h1>User Profile</h1>

        <p>{JSON.stringify(user)}</p>

        <Logout/>
    </div>
  )
}

export default UserProfile