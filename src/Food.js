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

    handleFood = () => {

        this.props.history.push('/fun') // THIS IS THE KEY LINE


    }
    render() {
        return (
            <div>
                <div>
                    A choose your food!
                        </div>
                <form onSubmit={this.handleFood} >
                    <div>
                        <button>Tex/Mex</button><br/>
                        <button>Italian/French</button><br/>
                        <button>Japanese/Chinese</button><br/>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        );
    }
}

let Food = withRouter(Content);

export default Food;