import React, { Component } from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';

import Login from "./components/login";
import Signup from './components/signup';
import Test from './components/test';
import {ProtectedRoute} from './components/ProtectedRoute'
import DashBoard from './components/dashboard';

class App extends Component {
  state = {  }
  render() { 
    return ( 
    <BrowserRouter>
      <ReactNotification/>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/test" component={Test} />
        <ProtectedRoute exact path="/dashboard" component={DashBoard} />
      </Switch>
    </BrowserRouter>
    );
  }
}
 
export default App;
