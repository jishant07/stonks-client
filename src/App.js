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
class App extends Component {
  state = {  }
  render() { 
    return ( 
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/pie" component={PieSentiments} />
        <Route exact path="/news" component={News} />
        <Route exact path="/posts" component={Posts} />   
        <Route exact path="/Market" component={Market} />
        <Route exact path="/extra" component={Extra} />
        <Route path="/allcompanies/:companyName" component={All} />
        <ProtectedRoute exact path="/dashboard" component={DashBoard} />
      </Switch>
    </BrowserRouter>
    );
  }
}
 
export default App;
