import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import FooFighters from './Pages/FooFighters'
import Shinedown from './Pages/Shinedown'
import BreakingBenjamin from './Pages/BreakingBenjamin'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/FooFighters" exact component={FooFighters} />
          <Route path="/Shinedown" exact component={Shinedown} />
          <Route path="/BreakingBenjamin" exact component={BreakingBenjamin} />
        </Switch>
      </Router>
    )
  }
}

export default App
