import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header'
import Login from './components/Login'



const Logout = () =>{
  return (
    <>

    </>
  )
}

function App() {
  return (
    <Router>
        {/* <Header /> */}
        <div className="App">
          <h2>Client Auth Project</h2>
        </div>
      <Switch>
        <Route path='/login' component={Login}/>
        {/* <Route path='/logout' component={Logout} */}
        <Route path='/' component={Header}/>
      </Switch>
    </Router>
  );
}

export default App;
