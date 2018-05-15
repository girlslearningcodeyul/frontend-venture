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

    handleChoices = () => {

        this.props.history.push('/map') // THIS IS THE KEY LINE

        fetch('/userPrefencesFirstActivity')
            .then(response => response.text())
            .then(responseBody => {

            })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleChoices} >
                    <input type="checkbox" value="first" />first
                    <input type="checkbox" value="second" />second<br />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

let Choices = withRouter(Content);

export default Choices;