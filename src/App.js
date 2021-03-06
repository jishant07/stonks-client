import React, { Component } from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';


import Home from "./components/Home";
import Signup from './components/signup';
import {ProtectedRoute} from './components/ProtectedRoute'
import DashBoard from './components/dashboard';
import PieSentiments from '../src/components/pie';
import News from '../src/components/news';
import Extra from '../src/components/extra';
import Posts from '../src/components/Posts/posts';
import Market from '../src/components/Market/Market';
import All from '../src/components/allcompanies';
import Test from '../src/components/test';
class App extends Component {
  state = {  }
  render() { 
    return ( 
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/signup" component={Signup}/>
        <ProtectedRoute exact path="/pie" component={PieSentiments} />
        <ProtectedRoute exact path="/news" component={News} />
        <ProtectedRoute exact path="/posts" component={Posts} />   
        <ProtectedRoute exact path="/Market" component={Market} />
        <ProtectedRoute exact path="/extra" component={Extra} />
        <Route exact path="/test" component={Test} />
        <ProtectedRoute path="/allcompanies/:companyName" component={All} />
        <ProtectedRoute exact path="/dashboard" component={DashBoard} />
      </Switch>
    </BrowserRouter>
    );
  }
}
 
export default App;
