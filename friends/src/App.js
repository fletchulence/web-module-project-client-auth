import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header'
import Login from './components/Login'
import FriendsList from './components/friendsList';

const Logout = () =>{
  return (
    <div>
      
    </div>
  )
}


function App() {
  return (
    <Router>
        {/* <Header /> */}
        <div className="App">
          <h2>Client Auth Project</h2>
        </div>
        <FriendsList/>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/logout' component={Logout}/>
        {/* <PrivateRoute path='/protected' component={friendsList}/> */}
        <Route path='/' component={Header}/>
      </Switch>
    </Router>
  );
}

export default App;
