import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';

import 'react-notifications/lib/notifications.css';

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleFun = () => {

        this.props.history.push('/price') // THIS IS THE KEY LINE


    }
    render() {
        return (
            <div>
                <div>
                    A choose your fun!
                        </div>
                <form onSubmit={this.handleFun} >

                    <input type="checkbox" value="museum/art" />museum/art<br />
                    <input type="checkbox" value="outdoor" />outdoor/parks<br />
                    <input type="checkbox" value="bar/club" />nightlife<br />
                    <input type="checkbox" value="theatre/dance" />historical<br />

                    
                    <input type="submit" />

                </form>
            </div>
        );
    }
}

let Fun = withRouter(Content);

export default Fun;