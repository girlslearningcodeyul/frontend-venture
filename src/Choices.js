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
    DropdownItem, Form,
    Label,
    Col,
    Row
} from 'reactstrap';

class Content extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleChoices = () => {

        this.props.history.push('/map') // THIS IS THE KEY LINE

        fetch('/userPrefencesFirstActivity')
            .then(response => response.text())
            .then(responseBody => {

            })
    }
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
                                    <DropdownItem>Generate Next</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem><NavItem><NavLink href="/">Restart</NavLink></NavItem></DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Form>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label>A choose your own!</Label>
                    </Col>

                    <Row>
                        <Col sm={{ size: 4, offset: 2 }}><Link to = "/map"><img src ="http://unsplash.it/200/300" alt="img1"/></Link></Col>
                        <Col sm={{ size: 4 }}><Link to = "/map"><img src ="http://unsplash.it/200/300" alt="img2"/></Link></Col>
                        <Col sm={{ size: 2 }} />
                    </Row>
                </Form>
            </div>
        );
    }
}

let Choices = withRouter(Content);

export default Choices;