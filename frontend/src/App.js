
import './App.css';
import {TodoList} from './Components/TodoList';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='' Component={TodoList}/>
          <Route path='/login' Component={Login}/>
          <Route path='/register' Component={Register} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
