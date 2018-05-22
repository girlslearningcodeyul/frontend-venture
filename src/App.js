import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import './App.css';

import Preferences from './Preferences.js';
import Rules from './Rules.js';
//import OpenWeatherMap from './OpenWeatherMap.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      username: undefined,
      sessionId: undefined,
      english: true,
    }
  }
  setUsername = (username) => {
    this.setState({ username }) //is equivalent to username: username
  }

  renderRules = (routeProps) => {
    return <Rules
      username={this.state.username}
      historyPush={routeProps.history.push}
      toggleLanguage={this.toggleLanguage}
      english={this.state.english} />
  }

  setSession = (sessionId) => {
    this.setState({ sessionId })
  }

  toggleLanguage = () => {
    this.setState({
      english: !this.state.english
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Preferences
            setUsername={this.setUsername}
            sessionId={this.state.sessionId}
            username={this.state.username}
            setSession={this.setSession}
            toggleLanguage={this.toggleLanguage}
            english={this.state.english}
          />
          <Route exact={true} path='/rules' render={this.renderRules} />
          {/* <OpenWeatherMap /> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App;