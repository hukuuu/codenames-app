import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Nav'
import Room from './Room'
import Game from './Game'
import Log from './Log'

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div style={styles.container}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Room} />
            <Route path="/game" component={Game} />
            <Route path="/log" component={Log} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
