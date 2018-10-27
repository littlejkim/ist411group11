import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./components/Login";
import Error from "./components/Error";
import Register from "./components/Register";
import Produce from "./components/Produce";
import Fruits from "./components/produce/Fruits";
import Vegetables from "./components/produce/Vegetables";

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact /> 
          <Route path="/register" component={Register}/>
          <Route path="/produce" component={Produce}/>
          <Route path="/fruits" component={Fruits}/>
          <Route path="/vegetables" component={Vegetables}/>
          <Route component={Error} />
        </Switch>
        
      </BrowserRouter>
    );
  }
}

export default App;
