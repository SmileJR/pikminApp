import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
// what estblishes route in url
import Login from '../src/components/LoginPage'
//import styled from 'styled-components'
import User from '../src/components/UserPage'
import IndivPik from '../src/components/IndivPik'
import HomePage from '../src/components/HomePage'

import SignUp from '../src/components/SignUp'




class App extends Component {
  render() {
    return (
     
      <Router>
<Switch>
      {/* //these are the paths on the url in the addressbar and they dictate what the user will see */}
      
      <Route exact path='/' component={HomePage} />
      <Route exact path='/login' component={Login} /> 
      <Route exact path='/user' component={User} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/indivpik' component={IndivPik} />
    
      </Switch>
      </Router>
    );
  }
}

export default App;

