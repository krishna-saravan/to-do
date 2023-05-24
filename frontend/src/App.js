
import './App.css';
import {TodoList} from './Components/TodoList';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'
import UserProfile from './Components/User/UserProfile';
import Logout from './Components/Logout';


function App() {

  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/profile' Component={UserProfile}/>
          <Route path='' Component={TodoList}/>
          <Route path='/login' Component={Login}/>
          <Route path='/register' Component={Register} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
