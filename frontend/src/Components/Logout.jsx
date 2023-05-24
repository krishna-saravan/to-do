import React from 'react'
import axios from 'axios'

const Logout = () => {
    const HandelLogout = async () => {
        try{
            await await axios({
                method: 'POST',
                url : 'todo/logout/',
                
                data:{},
                withCredentials: true,
                xsrfHeaderName: "X-CSRFToken",
        })
            console.log('user has sucessfully logged out')
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div>
        <button onClick={HandelLogout}>Logout</button>
    </div>
  )
}

export default Logout