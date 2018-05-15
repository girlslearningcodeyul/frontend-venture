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

    handleName = () => {
        
            
        this.props.history.push('/food') // THIS IS THE KEY LINE
        

    }



    render() {
            return (
                <div>
                    <div>
                        Welcome to Venture
                </div>
                    <div>
                        A choose your own!
                        </div>
                    <form onSubmit = {this.handleName} >
                        A choose your name:
                        <div>
                            <input type="text" />
                            <input type="submit" />
                        </div>
                    </form>
                </div>
            );
        
    }
}
// Looking at App.js,
// history is never passed as a prop, so why is this.props.history defined?
// Answer: this.props.history is NOT defined in ContentTemplate
// Solution: You have to create a NEW component with withRouter
// That's right, withRouter is a function that takes a component as an argument
// and returns a component

let Intro = withRouter(Content);  

export default Intro; // You DO NOT export ContentTemplate