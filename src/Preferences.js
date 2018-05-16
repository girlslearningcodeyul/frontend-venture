import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Food from './Food.js';
import Fun from './Fun.js';
import Price from './Price.js';

// preferences to have all the states (not in App.js)
class Preferences extends Component {
    constructor() {
        super();
        this.state = {
            foods: {},
            bars: false,
            hungry: true,
            historical: false,
            museums: false,
            parks: false

        }
    }
    // setFun = (key) => {
    //     this.setState(this.state.bars, this.state.historical, this.state.museums, this.state.parks)
    // }

    setFood = (key) => {
        let foods = { ...this.state.foods } //duplicating
        foods[key] = !foods[key]; //
        this.setState({ foods });
        console.log(foods);
    }

    setHungry = () => {
        let newHungry = !this.state.hungry;
        this.setState({ hungry: newHungry, foods: newHungry ? {} : null });
        console.log(newHungry);
    }

    toggleState = (key) => {
        this.setState({ [key]: !this.state[key] })
        console.log(this)
    }


    //rendering
    renderFood = (routeProps) => {
        return <Food setHungry={this.setHungry}
            setFood={this.setFood}
            foods={this.state.foods}
            username={this.state.username}
            historyPush={routeProps.history.push} />;
    }

    renderFun = (routeProps) => {
        return <Fun toggleState={this.toggleState}
            username={this.state.username}
            historyPush={routeProps.history.push} />;
    }

    renderPrice = (routeProps) => {
        return <Price setHungry={this.setHungry}
            setFood={this.setFood}
            toggleState={this.toggleState}
            username={this.state.username}
            historyPush={routeProps.history.push} />;
    }

    render() {
        return (<div>
            <Route exact={true} path='/food' render={this.renderFood} />
            <Route exact={true} path='/fun' render={this.renderFun} />
            <Route exact={true} path='/price' render={this.renderPrice} />
        </div>
        )
    }
}

export default Preferences;