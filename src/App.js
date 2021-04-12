import React, { Component } from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';


import Home from "./components/Home";
import Signup from './components/signup';
import Test from './components/test';
import {ProtectedRoute} from './components/ProtectedRoute'
import DashBoard from './components/dashboard';
import PieSentiments from './components/pie';
import LineData from './components/line';
import News from './components/news';
import Posts from '../src/components/Posts/posts';
import Market from '../src/components/Market/Market';

class App extends Component {
  state = {  }
  render() { 
    return ( 
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/test" component={Test} />
        <Route exact path="/pie" component={PieSentiments} />
        <Route exact path="/line" component={LineData} />
        <Route exact path="/news" component={News} />
        <Route exact path="/posts" component={Posts} />   
        <Route exact path="/Market" component={Market} />
        <ProtectedRoute exact path="/dashboard" component={DashBoard} />
      </Switch>
    </BrowserRouter>
    );
  }
}
 
export default App;
