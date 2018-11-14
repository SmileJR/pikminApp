import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            {/* <Route exact path="/" component=/>
            <Route path="" component=/> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App