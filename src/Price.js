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
    Button,
    Modal
} from 'reactstrap';

class Content extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            username: "",
            modalOpen: false,
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    handlePrice = (e) => {
        //add logic for the case where everything is set to false and null, in that case return a random generation of the listing
        e.preventDefault();
        this.props.handleSubmit();
    }

    render() {
        return (
            <div>

                <Modal className="introModal" isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                    <h2 align="center">Welcome traveller,</h2>
                    <h2 id="h2Modal" align="center"> to the world of venture!</h2>
                    <h3 align="center">Crafted by a scrappy team of three aspiring master web-developers, venture is the brain-child of Aly Neumann, Ksenia Nadkina and Jordan Lahmy! </h3>
                    <h4 align="center"> Built with react/react-strap using express while written in javascript, what you see is the culmination of 10 days of intensive work!</h4>
                </Modal>

                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">venture</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem><NavLink href="/price">FR</NavLink></NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>Options</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem><NavItem><NavLink href="/">Restart</NavLink></NavItem></DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={this.toggleModal} >About</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>

                <div className="priceContainer">
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label>{this.props.username} A choose your price range!</Label>
                    </Col>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label check><Input type="checkbox"
                            value={this.props.cheap}
                            onChange={() => this.props.togglePrice("cheap")} />$</Label>
                    </Col>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label check><Input type="checkbox"
                            value={this.props.expensive}
                            onChange={() => this.props.togglePrice("expensive")} />$$</Label>
                    </Col>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Button onClick={this.handlePrice} >Submit</Button>
                    </Col>

                </div>
            </div>
        );
    }
}

let Price = withRouter(Content);

export default Price;