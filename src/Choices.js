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

    handleChoices = () => {
        this.props.firstInterest;
        this.props.secondInterest;
        this.props.history.push('/map') // THIS IS THE KEY LINE

        fetch('/userPrefencesFirstActivity')
            .then(response => response.text())
            .then(responseBody => {
                console.log("you sent something");
            })
    }
    render() {
        //before load must generate a gif of typewriter typing out the experience

        let mapContents1 = contents =>
            <li className="listingStyle">
                <img src="http://unsplash.it/300/200" alt="img1" />
                {contents.name} <br />
                {contents.description} <br />
                {contents.address} <br />
                {contents.coordinates} <br />
                <Link to={"/map"
                    // + contents.itemId
                }></Link>
            </li >

        let mapContents2 = contents =>
            <li className="listingStyle">
                <img src="http://unsplash.it/300/200" alt="img1" />
                {contents.name} <br />
                {contents.description} <br />
                {contents.address} <br />
                {contents.coordinates} <br />
                <Link to={"/map"
                    // + contents.itemId
                }></Link>
            </li >

        let firstChoice = this.props.firstInterest.map(mapContents1);
        let secondChoice = this.props.secondInterest.map(mapContents2);


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
                            <ul>
                                {firstChoice}
                            </ul>
                        </Col>
                        <Col sm={{ size: 4 }}>
                            <ul>
                                {secondChoice}
                            </ul>
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