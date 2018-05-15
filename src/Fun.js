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
                    <div>
                        <button>museum/art</button><br/>
                        <button>theatre/dance</button><br/>
                        <button>outdoor</button><br/>
                        <button>bar/club</button><br/>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        );
    }
}

let Fun = withRouter(Content);

export default Fun;