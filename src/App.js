import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import { NotificationContainer } from 'react-notifications';
import './App.css';

import Intro from './Intro.js';
import Food from './Food.js';
import Fun from './Fun.js';
import Price from './Price.js';
import Choices from './Choices.js';
import Map from './Map.js';

import 'react-notifications/lib/notifications.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: undefined,
    }
  }

  renderIntro = (routeProps) => {
    return <Intro setUsername={this.setUsername} historyPush={routeProps.history.push} />
  }

  renderFood = (routeProps) => {
    return <Food username={this.state.username} historyPush={routeProps.history.push} />;
  }

  renderFun = (routeProps) => {
    return <Fun username={this.state.username} historyPush={routeProps.history.push} />;
  }

  renderPrice = (routeProps) => {
    return <Price username={this.state.username} historyPush={routeProps.history.push} />;
  }

  renderChoices = (routeProps) => {
    return <Choices username={this.state.username} historyPush={routeProps.history.push} />;
  }

  renderMap = (routeProps) => {
    return <Map historyPush={routeProps.history.push} />;
  }

  setUsername = (username) => {
    this.setState({ username }) //is equivalent to username: username
  }

  render() {
    return (<div>
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={this.renderIntro} />
          <Route exact={true} path='/food' render={this.renderFood} />
          <Route exact={true} path='/fun' render={this.renderFun} />
          <Route exact={true} path='/price' render={this.renderPrice} />
          <Route exact={true} path='/choices' render={this.renderChoices} />
          <Route exact={true} path='/map' render={this.renderMap} />
          {/* <Route
            exact
            path={'/test/:lat/:lng'}
            render={props => <Map key={Date.now()} historyPush={props.history.push} lat={
            lng=
         */}
          <NotificationContainer />
        </div>
      </BrowserRouter>

    </div>
    )
  }
}


export default App;