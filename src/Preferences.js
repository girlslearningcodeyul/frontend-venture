import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'

import Intro from './Intro.js';
import Food from './Food.js';
import Fun from './Fun.js';
import Price from './Price.js';
import Choices from './Choices.js';
import Map from './Map.js';

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
            sessionId: undefined,
            randomAdventure: undefined
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

    setInterests = (interestObj) => {
        this.setState(interestObj);
    }

    setRandomAdventure = (randomAdventure) => {
        //console.log(randomAdventure);
        this.setState({ randomAdventure });
    }

    toggleState = (key, fn = null) => {
        this.setState({ [key]: !this.state[key] },
            fn)
    }

    togglePrice = (key) => {
        this.toggleState(key, this.setPriceMap)
    }

    getFoods = () => {
        console.log(this.state.foods);
        return Object.keys(this.state.foods)
            .filter((key) => key.includes('asian') || key.includes('latinMex') || key.includes('european'))
            .map((key) => {
                if (key.includes('Cheap'))
                    return key.replace('Cheap', '');
                if (key.includes('Expensive'))
                    return key.replace('Expensive', '')
                return key;
            })
    }

    setPriceMap2 = () => {
        let ret = {
            foods: {},
            bars: {}
        };

        const foods = this.state.foods ? this.getFoods() : [];
        console.log('foods', foods);
        const asian = foods.includes('asian');
        const latinMex = foods.includes('latinMex');
        const european = foods.includes('european');

        if (this.state.expensive && this.state.cheap) {
            console.log('all stuff', this.state)
            if (this.state.foods && this.state.bars) {
                console.log(' all food & bars expensive and cheap')
                if (asian && latinMex && european) {
                    console.log('1')
                    ret.foods.asianExpensive = true;
                    ret.foods.asianCheap = true;
                    ret.foods.latinMexExpensive = true;
                    ret.foods.latinMexCheap = true;
                    ret.foods.europeanExpensive = true;
                    ret.foods.europeanCheap = true;
                    ret.bars.barsCheap = true;
                    ret.bars.barsExpensive = true;
                }
                else if (latinMex && asian) {
                    console.log('2')
                    ret.foods.latinMexExpensive = true;
                    ret.foods.latinMexCheap = true;
                    ret.foods.asianExpensive = true;
                    ret.foods.asianCheap = true;
                    ret.bars.barsCheap = true;
                    ret.bars.barsExpensive = true;
                }
                else if (latinMex && european) {
                    console.log('3')
                    ret.foods.latinMexExpensive = true;
                    ret.foods.latinMexCheap = true;
                    ret.foods.europeanExpensive = true;
                    ret.foods.europeanCheap = true;
                    ret.bars.barsCheap = true;
                    ret.bars.barsExpensive = true;
                }
                else if (european && asian) {
                    console.log('4')
                    ret.foods.europeanExpensive = true;
                    ret.foods.europeanCheap = true;
                    ret.foods.asianExpensive = true;
                    ret.foods.asianCheap = true;
                    ret.bars.barsCheap = true;
                    ret.bars.barsExpensive = true;
                }
                else if (latinMex) {
                    console.log('5')
                    ret.foods.latinMexExpensive = true;
                    ret.foods.latinMexCheap = true;
                    ret.bars.barsCheap = true;
                    ret.bars.barsExpensive = true;
                }
                else if (asian) {
                    console.log('6')
                    ret.foods.asianExpensive = true;
                    ret.foods.asianCheap = true;
                    ret.bars.barsCheap = true;
                    ret.bars.barsExpensive = true;
                }
                else if (european) {
                    console.log('7')
                    ret.foods.europeanExpensive = true;
                    ret.foods.europeanCheap = true;
                    ret.bars.barsCheap = true;
                    ret.bars.barsExpensive = true;
                }
            }

            else if (this.state.foods) {
                console.log(' all food expensive and cheap')
                if (asian && latinMex && european) {
                    ret.foods.asianExpensive = true;
                    ret.foods.asianCheap = true;
                    ret.foods.latinMexExpensive = true;
                    ret.foods.latinMexCheap = true;
                    ret.foods.europeanExpensive = true;
                    ret.foods.europeanCheap = true;
                }
                else if (latinMex && asian) {
                    ret.foods.latinMexExpensive = true;
                    ret.foods.latinMexCheap = true;
                    ret.foods.asianExpensive = true;
                    ret.foods.asianCheap = true;
                }
                else if (latinMex && european) {
                    ret.foods.latinMexExpensive = true;
                    ret.foods.latinMexCheap = true;
                    ret.foods.europeanExpensive = true;
                    ret.foods.europeanCheap = true;
                }
                else if (european && asian) {
                    ret.foods.europeanExpensive = true;
                    ret.foods.europeanCheap = true;
                    ret.foods.asianExpensive = true;
                    ret.foods.asianCheap = true;
                }
                else if (latinMex) {
                    ret.foods.latinMexExpensive = true;
                    ret.foods.latinMexCheap = true;
                }
                else if (asian) {
                    ret.foods.asianExpensive = true;
                    ret.foods.asianCheap = true;
                }
                else if (european) {
                    ret.foods.europeanExpensive = true;
                    ret.foods.europeanCheap = true;
                }
            }
            else if (this.state.bars) {
                console.log(' all bars expensive and cheap')
                ret.bars.barsExpensive = true;
                ret.bars.barsCheap = true;
            }
        }

        else if (this.state.expensive) {
            //console.log('expensive stuff', this.state)
            if (this.state.foods && this.state.bars) {
                console.log('expensive only food & bars')
                if (this.state.foods.asian && this.state.foods.latinMex && this.state.foods.european) {
                    ret.foods.asianExpensive = true;
                    ret.foods.latinMexExpensive = true;
                    ret.foods.europeanExpensive = true;
                    ret.bars.barsExpensive = true;
                }
                else if (this.state.foods.european && this.state.foods.asian) {
                    ret.foods.europeanExpensive = true;
                    ret.foods.asianExpensive = true;
                    ret.bars.barsExpensive = true;
                }
                else if (this.state.foods.european && this.state.foods.latinMex) {
                    ret.foods.europeanExpensive = true;
                    ret.foods.latinMexExpensive = true;
                    ret.bars.barsExpensive = true;
                }
                else if (this.state.foods.asian && this.state.foods.latinMex) {
                    ret.foods.asianExpensive = true;
                    ret.foods.latinMexExpensive = true;
                    ret.bars.barsExpensive = true;
                }
                else if (this.state.foods.latinMex) {
                    ret.foods.latinMexExpensive = true;
                    ret.bars.barsExpensive = true;
                }
                else if (this.state.foods.asian) {
                    ret.foods.asianExpensive = true;
                    ret.bars.barsExpensive = true;
                }
                else if (this.state.foods.european) {
                    ret.foods.europeanExpensive = true;
                    ret.bars.barsExpensive = true;
                }
            }
            else if (this.state.foods) {
                console.log('expensive food only')
                if (this.state.foods.asian && this.state.foods.latinMex && this.state.foods.european) {
                    ret.foods.asianExpensive = true;
                    ret.foods.latinMexExpensive = true;
                    ret.foods.europeanExpensive = true;
                }
                else if (this.state.foods.european && this.state.foods.asian) {
                    ret.foods.europeanExpensive = true;
                    ret.foods.asianExpensive = true;
                }
                else if (this.state.foods.european && this.state.foods.latinMex) {
                    ret.foods.europeanExpensive = true;
                    ret.foods.latinMexExpensive = true;
                }
                else if (this.state.foods.asian && this.state.foods.latinMex) {
                    ret.foods.asianExpensive = true;
                    ret.foods.latinMexExpensive = true;
                }
                else if (this.state.foods.latinMex) {
                    ret.foods.latinMexExpensive = true;
                }
                else if (this.state.foods.asian) {
                    ret.foods.asianExpensive = true;
                }
                else if (this.state.foods.european) {
                    ret.foods.europeanExpensive = true;
                }
            }
            else if (this.state.bars) {
                console.log('expensive bars only')
                ret.bars.barsExpensive = true;
            }
        }

        else if (this.state.cheap) {
            if (this.state.foods && this.state.bars) {
                console.log('cheapo food & bars')
                if (this.state.foods.asian && this.state.foods.latinMex && this.state.foods.european) {
                    ret.foods.asianCheap = true;
                    ret.foods.latinMexCheap = true;
                    ret.foods.europeanCheap = true
                    ret.bars.barsCheap = true;
                }
                else if (this.state.foods.latinMex && this.state.foods.european) {
                    ret.foods.latinMexCheap = true;
                    ret.foods.europeanCheap = true;
                    ret.bars.barsCheap = true;
                }
                else if (this.state.foods.latinMex && this.state.foods.asian) {
                    ret.foods.latinMexCheap = true;
                    ret.foods.asianCheap = true;
                    ret.bars.barsCheap = true;
                }
                else if (this.state.foods.european && this.state.foods.asian) {
                    ret.foods.europeanCheap = true;
                    ret.foods.asianCheap = true;
                    ret.bars.barsCheap = true;
                }
                else if (this.state.foods.latinMex) {
                    ret.foods.latinMexCheap = true;
                    ret.bars.barsCheap = true;
                }
                else if (this.state.foods.asian) {
                    ret.foods.asianCheap = true;
                    ret.bars.barsCheap = true;
                }
                else if (this.state.foods.european) {
                    ret.foods.europeanCheap = true;
                    ret.bars.barsCheap = true;
                }

            }
            else if (this.state.foods) {
                console.log('cheapo food only')
                if (this.state.foods.asian && this.state.foods.latinMex && this.state.foods.european) {
                    ret.foods.asianCheap = true;
                    ret.foods.latinMexCheap = true;
                    ret.foods.europeanCheap = true;
                }
                else if (this.state.foods.latinMex && this.state.foods.european) {
                    ret.foods.latinMexCheap = true;
                    ret.foods.europeanCheap = true;
                }
                else if (this.state.foods.latinMex && this.state.foods.asian) {
                    ret.foods.latinMexCheap = true;
                    ret.foods.asianCheap = true;
                }
                else if (this.state.foods.european && this.state.foods.asian) {
                    ret.foods.europeanCheap = true;
                    ret.foods.asianCheap = true;
                }
                else if (this.state.foods.latinMex) {
                    ret.foods.latinMexCheap = true;
                }
                else if (this.state.foods.asian) {
                    ret.foods.asianCheap = true;
                }
                else if (this.state.foods.european) {
                    ret.foods.asianCheap = true;
                }
            }
            else if (this.state.bars) {
                console.log('cheapo bars only')
                ret.bars.barsCheap = true;
            }
        }

        this.setState({
            foods: Object.keys(ret.foods).length > 0 ? ret.foods : null,
            bars: Object.keys(ret.bars).length > 0 ? ret.bars : null
        })
        console.log(ret);
    }

    setPriceMap = () => {
        this.setState({...this.backup, cheap:this.state.cheap, expensive: this.state.expensive}, this.setPriceMap2);

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
            european: this.state.foods ? {
                cheap: this.state.foods.europeanCheap,
                expensive: this.state.foods.europeanExpensive
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
                //console.log(sessionId)
                this.setState({
                    firstInterest: firstTwoInterests.firstTwoInterests[0],
                    secondInterest: firstTwoInterests.firstTwoInterests[1],
                    sessionId: sessionId
                });
                this.props.setSession(sessionId);
                this.props.history.push('/choices', 0);
            })
    }

    handleFun = () => {
        this.backup = {...this.state}
    }

    //rendering

    renderIntro = (routeProps) => {
        return <Intro
            toggleLanguage={this.props.toggleLanguage}
            english={this.props.english}
            setUsername={this.props.setUsername}
            historyPush={routeProps.history.push}
            setRandomAdventure={this.setRandomAdventure}
        />
    }

    renderFood = (routeProps) => {
        //console.log(this.state.hungry)
        return <Food
            setHungry={this.setHungry}
            hungry={this.state.hungry}
            setFood={this.setFood}
            foods={this.state.foods}
            username={this.props.username}
            historyPush={routeProps.history.push}
            toggleLanguage={this.props.toggleLanguage}
            english={this.props.english} />;
    }

    renderFun = (routeProps) => {
        return <Fun
            toggleState={this.toggleState}
            bars={this.state.bars}
            historical={this.state.historical}
            museums={this.state.museums}
            parks={this.state.parks}
            setBars={this.setBars}
            username={this.props.username}
            historyPush={routeProps.history.push}
            handleFun={this.handleFun}
            toggleLanguage={this.props.toggleLanguage}
            english={this.props.english} />;
    }

    renderPrice = (routeProps) => {
        return <Price
            handleSubmit={this.handleSubmit}
            cheap={this.state.cheap}
            expensive={this.state.expensive}
            togglePrice={this.togglePrice}
            username={this.props.username}
            historyPush={routeProps.history.push}
            toggleLanguage={this.props.toggleLanguage}
            english={this.props.english} />;
    }

    renderChoices = (routeProps) => {
        return <Choices
            username={this.props.username}
            historyPush={routeProps.history.push}
            step={routeProps.location.state}
            firstInterest={this.state.firstInterest}
            secondInterest={this.state.secondInterest}
            toggleLanguage={this.props.toggleLanguage}
            english={this.props.english} />;
    }

    renderMap = (routeProps) => {
        //console.log(routeProps)
        let params = new URLSearchParams(routeProps.location.search);
        return <Map
            sessionId={this.props.sessionId}
            lat={Number(params.get('lat'))}
            lng={Number(params.get('lng'))}
            historyPush={routeProps.history.push}
            step={Number(params.get('step'))}
            setInterests={this.setInterests}
            firstInterest={this.state.firstInterest}
            secondInterest={this.state.secondInterest}
            randomAdventure={this.state.randomAdventure}
            toggleLanguage={this.props.toggleLanguage}
            english={this.props.english}
        />;
    }

    render() {
        //console.log(this.state);
        return (
            <div>
                <Route exact={true} path='/' render={this.renderIntro} />
                <Route exact={true} path='/map' render={this.renderMap} />
                <Route exact={true} path='/food' render={this.renderFood} />
                <Route exact={true} path='/fun' render={this.renderFun} />
                <Route exact={true} path='/price' render={this.renderPrice} />
                <Route exact={true} path='/choices' render={this.renderChoices} />
            </div>
        )
    }
}

export default withRouter(Preferences);