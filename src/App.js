import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import './App.css';

import Intro from './Intro.js';
import Map from './Map.js';
import Preferences from './Preferences.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      username: undefined,
      sessionId: undefined
    }
  }

  renderIntro = (routeProps) => {
    return <Intro
      setUsername={this.setUsername}
      historyPush={routeProps.history.push} />
  }

  renderMap = (routeProps) => {
    console.log(routeProps)
    let params = new URLSearchParams(routeProps.location.search);
    return <Map
      sessionId={this.state.sessionId}
      lat={params.get('lat')}
      lng={params.get('lng')}
      historyPush={routeProps.history.push} />;
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
          <Route exact={true} path='/map' render={this.renderMap} />
          <Preferences username={this.state.username} setSession={this.setSession} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;