import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
// what estblishes route in url
import NewPikmin from '../src/components/NewPikmin'
//import styled from 'styled-components'
import UserPage from '../src/components/UserPage'
import Pikmin from '../src/components/Pikmin'
import HomePage from '../src/components/HomePage'
import SignUp from '../src/components/SignUp'




class App extends Component {
  render() {
    return (
     
      <Router>
<Switch>
      {/* //these are the paths on the url in the addressbar and they dictate what the user will see */}
      
      <Route exact path='/' component={HomePage} />
      <Route exact path='/users/:userId/newpikmin' component={NewPikmin} /> 
      <Route exact path='/users/:id' component={UserPage} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/users/:userId/pikmin' component={Pikmin} />
    
      </Switch>
      </Router>
    );
  }
}

export default App;

