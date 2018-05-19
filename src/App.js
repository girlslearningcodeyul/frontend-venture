import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import './App.css';

import Intro from './Intro.js';
import Preferences from './Preferences.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      username: undefined,
      sessionId: undefined,
    }
  }

  renderIntro = (routeProps) => {
    return <Intro
      setUsername={this.setUsername}
      historyPush={routeProps.history.push} />
  }


  setUsername = (username) => {
    this.setState({ username }) //is equivalent to username: username
  }

  setSession = (sessionId) => {
    this.setState({ sessionId })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={this.renderIntro} />
          <Preferences
            sessionId={this.state.sessionId}
            username={this.state.username}
            setSession={this.setSession}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;