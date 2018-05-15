import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';

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
    FormGroup,
    Label,
    Input,
    Col,
    Button,
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

    handleName = () => {
        this.props.history.push('/food') // THIS IS THE KEY LINE
    }

    handleRandom = () => {
        //this is where the random function will generate the random location and send me the latitude and longitude
        this.props.history.push('/map')
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">venture</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem><NavLink href="/">FR</NavLink></NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>Options</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>About</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Restart</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Form>
                    <Col sm={{ size: 8, offset: 2 }}>
                        <Label for="ventureWelcome">Welcome to venture</Label>
                    </Col>
                    <Col sm={{ size: 8, offset: 2 }}>
                        <Label for="ventureWelcome2">A choose your own...</Label>
                    </Col>
                    <Col sm={{ size: 8, offset: 2 }}>
                        <Label for="ventureWelcome3">Enter your name:</Label>
                    </Col>
                    <Col sm={{ size: 4, offset: 4 }}>
                        <Input type="name" name="name" />
                    </Col>

                    <FormGroup check row>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 5 }}><Button onClick={this.handleName} >Submit</Button></Col>
                            <Col sm={{ size: 0.5 }} />
                            <Col sm={{ size: 'auto' }}><Button onClick={this.handleRandom}>Feeling lucky?</Button></Col>
                            <Col sm={{ size: 4.5 }} />
                        </Row>
                    </FormGroup>
                </Form>
            </div >
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