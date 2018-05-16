import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
    Input,
    Col,
    Button
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

    handleFun = () => {
        this.props.history.push('/price') // THIS IS THE KEY LINE
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">venture</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem><NavLink href="/fun">FR</NavLink></NavItem>
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

                <div className="funContainer">
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label>{this.props.username}, A choose your fun!</Label>
                    </Col>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label check><Input type="checkbox"
                            onChange={() => this.props.toggleState("museums")}
                        />museum/art</Label>
                    </Col>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label check><Input type="checkbox"
                            onChange={() => this.props.toggleState("parks")}
                        />outdoor/parks</Label>
                    </Col>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label check><Input type="checkbox"
                            value={this.props.bars}
                            onChange={() => this.props.toggleState("bars")}
                        />nightlife</Label>
                    </Col>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label check><Input type="checkbox"
                            onChange={() => this.props.toggleState("historical")}
                        />historical</Label>
                    </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Button onClick={this.handleFun} >Submit</Button>
                        </Col>
                </div>
            </div>
        );
    }
}

let Fun = withRouter(Content);

export default Fun;