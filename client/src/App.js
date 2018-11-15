
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
// what estblishes route in url
import Login from '../src/components/LoginPage'
//import styled from 'styled-components'
import User from '../src/components/UserPage'
import NewUser from '../src/components/NewUserPage'



class App extends Component {
  render() {
    return (
     
      <Router>
<Switch>
      {/* //these are the paths on the url in the addressbar and they dictate what the user will see */}
      <Route exact path='/login' component={Login} /> 
      <Route exact path='/user' component={User} />
      <Route exact path='/newUser' component={NewUser} />
    
      </Switch>
      </Router>
    );
  }
}

export default App;

