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
            foods: {
                latinMexCheap: false,
                asianCheap: false,
                latinMexExpensive: false,
                asianExpensive: false
            },
            bars: {
                barsCheap: false,
                barsExpensive: false
            },
            hungry: true,
            historical: false,
            museums: false,
            parks: false, 
            cheap: false,
            expensive: false
        }
    }

    setFood = (key) => {
        let foods = { ...this.state.foods } //duplicating
        foods[key] = !foods[key]; //
        this.setState({ foods });
        console.log(foods);
    }

    setHungry = () => {
        let newHungry = !this.state.hungry;
        this.setState({ hungry: newHungry, foods: newHungry ? {} : null });
        //console.log(newHungry);
    }

    toggleState = (key, fn = null) => {
        this.setState({ [key]: !this.state[key] }, 
            fn)
        console.log(this)
    }

    togglePrice = (key) => {
        this.toggleState(key, this.setPriceMap)
    }

    setPriceMap = () => {
        if (this.state.cheap && this.state.expensive){
            this.setState({
                foods: {
                    latinMexExpensive: true,
                    asianExpensive: true,
                    latinMexCheap: true,
                    asianCheap: true
                },
                bars: {
                    barsCheap: true,
                    barsExpensive: true
                }
            })
        }
        else if (this.state.cheap) {
            this.setState({
                foods: {
                    latinMexCheap: true,
                    asianCheap: true,
                },
                bars: { barsCheap: true },
            })
        }
        else if (this.state.expensive) {
            this.setState({
                foods: {
                    latinMexExpensive: true,
                    asianExpensive: true,
                },
                bars: { barsExpensive: true }
            })
        }
        console.log(this);
    }



    //rendering
    renderPrice = (routeProps) => {
        return <Price
            cheap={this.state.cheap}
            expensive={this.state.expensive}
            togglePrice={this.togglePrice}
            username={this.state.username}
            historyPush={routeProps.history.push} />;
    }

    renderFood = (routeProps) => {
        return <Food setHungry={this.setHungry}
            setFood={this.setFood}
            foods={this.state.foods}
            username={this.state.username}
            historyPush={routeProps.history.push} />;
    }

    renderFun = (routeProps) => {
        return <Fun toggleState={this.toggleState}
            bars={this.state.bars}
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