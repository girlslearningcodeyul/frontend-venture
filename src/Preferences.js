import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'

import Food from './Food.js';
import Fun from './Fun.js';
import Price from './Price.js';
import Choices from './Choices.js';

//state reference:
// foods: {
//     latinMexCheap: false,
//     asianCheap: false,
//     latinMexExpensive: false,
//     asianExpensive: false
// },
// bars: {
//     barsCheap: false,
//     barsExpensive: false
// },

// preferences to have all the states (not in App.js)
class Preferences extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: undefined,
            foods: {},
            bars: null,
            hungry: true,
            historical: false,
            museums: false,
            parks: false,
            cheap: false,
            expensive: false,
            firstInterest: {},
            secondInterest: {},
            sessionId: undefined
        }
    }

    setFood = (key) => {
        let foods = { ...this.state.foods } //duplicating
        foods[key] = !foods[key]; //
        this.setState({ foods });
        //console.log(foods);
    }

    setBars = () => {
        this.setState({ bars: this.state.bars ? null : {} });
    }

    setHungry = () => {
        let newHungry = !this.state.hungry;
        this.setState({ hungry: newHungry, foods: newHungry ? {} : null });
    }

    toggleState = (key, fn = null) => {
        this.setState({ [key]: !this.state[key] },
            fn)
    }

    togglePrice = (key) => {
        this.toggleState(key, this.setPriceMap)
    }

    setPriceMap = () => {
        let ret = {
            foods: {},
            bars: {}
        };

        if (this.state.expensive && this.state.cheap) {
            //console.log('all stuff', this.state)
            if (this.state.foods && this.state.bars) {
                // console.log(' all food & bars')
                ret.foods.asianExpensive = true;
                ret.foods.asianCheap = true;
                ret.foods.latinMexExpensive = true;
                ret.foods.latinMexCheap = true;
                ret.bars.barsExpensive = true;
                ret.bars.barsCheap = true;
            }
            else if (this.state.foods) {
                //console.log(' all food')
                if (this.state.foods.asian && this.state.foods.latinMex) {
                    ret.foods.asianExpensive = true;
                    ret.foods.asianCheap = true;
                    ret.foods.latinMexExpensive = true;
                    ret.foods.latinMexCheap = true;
                }
                else if (this.state.foods.latinMex) {
                    ret.foods.latinMexExpensive = true;
                    ret.foods.latinMexCheap = true;
                }
                else if (this.state.foods.asian) {
                    ret.foods.asianExpensive = true;
                    ret.foods.asianCheap = true;
                }
            }
            else if (this.state.bars) {
                //console.log(' all bars')
                ret.bars.barsExpensive = true;
                ret.bars.barsCheap = true;
            }
        }

        else if (this.state.expensive) {
            //console.log('expensive stuff', this.state)
            if (this.state.foods && this.state.bars) {
                //console.log('expensive food & bars')
                ret.foods.asianExpensive = true;
                ret.foods.latinMexExpensive = true;
                ret.bars.barsExpensive = true;
            }
            else if (this.state.foods) {
                //console.log('expensive food')
                if (this.state.foods.asian && this.state.foods.latinMex) {
                    ret.foods.asianExpensive = true;
                    ret.foods.latinMexExpensive = true;
                }
                else if (this.state.foods.latinMex) {
                    ret.foods.latinMexExpensive = true;
                }
                else if (this.state.foods.asian) {
                    ret.foods.asianExpensive = true;
                }
            }
            else if (this.state.bars) {
                //console.log('expensive bars')
                ret.bars.barsExpensive = true;
            }
        }

        else if (this.state.cheap) {
            console.log('cheap stuff', this.state)
            if (this.state.foods && this.state.bars) {
                console.log('cheapo food & bars')
                ret.foods.asianCheap = true;
                ret.foods.latinMexCheap = true;
                ret.bars.barsCheap = true;
            }
            else if (this.state.foods) {
                console.log('cheapo food')
                if (this.state.foods.asian && this.state.foods.latinMex) {
                    ret.foods.asianCheap = true;
                    ret.foods.latinMexCheap = true;
                }
                else if (this.state.foods.latinMex) {
                    ret.foods.latinMexCheap = true;
                }
                else if (this.state.foods.asian) {
                    ret.foods.asianCheap = true;
                }
            }
            else if (this.state.bars) {
                console.log('cheapo bars')
                ret.bars.barsCheap = true;
            }
        }

        this.setState({
            foods: Object.keys(ret.foods).length > 0 ? ret.foods : null,
            bars: Object.keys(ret.bars).length > 0 ? ret.bars : null
        })
        console.log(ret);
    }


    handleSubmit = () => {
        let body = JSON.stringify({ //sending this to the backend and names have to match
            latinMex: this.state.foods ? {
                cheap: this.state.foods.latinMexCheap,
                expensive: this.state.foods.latinMexExpensive
            } : { cheap: false, expensive: false },
            asian: this.state.foods ? {
                cheap: this.state.foods.asianCheap,
                expensive: this.state.foods.asianExpensive
            } : { cheap: false, expensive: false },
            museums: this.state.museums,
            parks: this.state.parks,
            bars: this.state.bars ? {
                cheap: this.state.bars.barsCheap,
                expensive: this.state.bars.barsExpensive
            } : { cheap: false, expensive: false },
            historical: this.state.historical

        })
        console.log(body);
        fetch('/userPreferenceFirstActivity', { method: "POST", body: body })
            .then(response => response.text())
            .then(responseBody => {
                let firstTwoInterests = JSON.parse(responseBody);
                let sessionId = firstTwoInterests.sessionId;
                //console.log(firstTwoInterests);
                //console.log(firstTwoInterests.firstTwoInterests[0].coordinates);
                //console.log(firstTwoInterests.sessionId)
                this.setState({
                    firstInterest: firstTwoInterests.firstTwoInterests[0],
                    secondInterest: firstTwoInterests.firstTwoInterests[1],
                    sessionId: sessionId
                });
                this.props.setSession(sessionId);
                this.props.history.push('/choices');
            })
    }

    //rendering
    renderPrice = (routeProps) => {
        return <Price
            handleSubmit={this.handleSubmit}
            cheap={this.state.cheap}
            expensive={this.state.expensive}
            togglePrice={this.togglePrice}
            username={this.props.username}
            historyPush={routeProps.history.push} />;
    }

    renderFood = (routeProps) => {
        return <Food
            setHungry={this.setHungry}
            setFood={this.setFood}
            foods={this.state.foods}
            username={this.props.username}
            historyPush={routeProps.history.push} />;
    }

    renderFun = (routeProps) => {
        return <Fun
            toggleState={this.toggleState}
            bars={this.state.bars}
            setBars={this.setBars}
            username={this.props.username}
            historyPush={routeProps.history.push} />;
    }

    renderChoices = (routeProps) => {
        return <Choices
            username={this.props.username}
            historyPush={routeProps.history.push}
            firstInterest={this.state.firstInterest}
            secondInterest={this.state.secondInterest} />;
    }

    render() {
        //console.log(this.state);
        return (
            <div>
                <Route exact={true} path='/food' render={this.renderFood} />
                <Route exact={true} path='/fun' render={this.renderFun} />
                <Route exact={true} path='/price' render={this.renderPrice} />
                <Route exact={true} path='/choices' render={this.renderChoices} />
            </div>
        )
    }
}

export default withRouter(Preferences);