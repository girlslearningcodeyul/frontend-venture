import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import './App.css';

import Intro from './Intro.js';
import Preferences from './Preferences.js';
import Rules from './Rules.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      username: undefined,
      sessionId: undefined,
      english: true,
    }
  }

  renderIntro = (routeProps) => {
    return <Intro
      toggleLanguage={this.toggleLanguage}
      english = {this.state.english}
      setUsername={this.setUsername}
      historyPush={routeProps.history.push} />
  }

  renderRules = (routeProps) => {
    return <Rules
      username={this.state.username}
      historyPush={routeProps.history.push} />
  }

  setUsername = (username) => {
    this.setState({ username }) //is equivalent to username: username
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
          <Route exact={true} path='/' render={this.renderIntro} />
          <Preferences
            sessionId={this.state.sessionId}
            username={this.state.username}
            setSession={this.setSession}
            toggleLanguage={this.toggleLanguage}
            english = {this.state.english}
          />
          <Route exact={true} path='/rules' render={this.renderRules}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;