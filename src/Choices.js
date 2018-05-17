import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './App.css';

import 'react-notifications/lib/notifications.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Label,
    Col,
    Row
} from 'reactstrap';

class Content extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            username: ""
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    // handleChoice = () => {
    //     //this.props.firstInterest;
    //     //this.props.secondInterest;
    //     this.props.history.push('/map') // THIS IS THE KEY LINE

    //     fetch('/userPrefenceFirstActivity')
    //         .then(response => response.text())
    //         .then(responseBody => {
    //             console.log("you sent something");
    //         })
    // }
    render() {
        //before load must generate a gif of typewriter typing out the experience
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">venture</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem><NavLink href="/choices">FR</NavLink></NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>Options</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>About</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem><NavItem><NavLink href="/">Restart</NavLink></NavItem></DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>

                <div className="choicesContainer">
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label>{this.props.username}, A choose your own!</Label>
                    </Col>
                    <Row>
                        <Col sm={{ size: 4, offset: 2 }}>
                            <div>
                                <li className="listingStyle">
                                    {this.props.firstInterest.name} <br />
                                    {this.props.firstInterest.description} <br />
                                    {this.props.firstInterest.address} <br />
                                    {/* {this.props.firstInterest.coordinates} <br /> */}
                                    <Link to={"/map?lat=" + this.props.firstInterest.coordinates.lat + "&lng=" + this.props.firstInterest.coordinates.long}>
                                        <img src="http://unsplash.it/300/200" alt="img1" />
                                    </Link>
                                </li >
                            </div>
                        </Col>
                        <Col sm={{ size: 4 }}>
                            <div>
                                <li className="listingStyle">
                                    {this.props.secondInterest.name} <br />
                                    {this.props.secondInterest.description} <br />
                                    {this.props.secondInterest.address} <br />
                                    {/* {this.props.secondInterest.coordinates} <br /> */}
                                    <Link to={"/map?lat=" + this.props.secondInterest.coordinates.lat + "&lng=" + this.props.secondInterest.coordinates.long}>
                                        <img src="http://unsplash.it/300/200" alt="img1" />
                                    </Link>

                                </li >
                            </div>
                        </Col>
                        {/*use the toggle button method in bootstrap to reveal more text*/}
                        <Col sm={{ size: 2 }} />
                    </Row>
                </div>
            </div>
        );
    }
}

let Choices = withRouter(Content);

export default Choices;