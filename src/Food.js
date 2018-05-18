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

    handleFood = () => {
        this.props.history.push('/fun') // THIS IS THE KEY LINE
    }

    render() {
        return (
            <div>
                <Modal className="introModal" isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                    <h2 align="center">Welcome traveller,</h2>
                    <h2 align="center"> to the world of venture!</h2>
                    <h3 align="center">Crafted by a scrappy team of three aspiring master web-developers, venture is the brain-child of Aly Neuman, Ksenia Ndkn and Jordan Lahmy! </h3>
                    <h4 align="center"> Built with react/react-strap using express while written in javascript, what you see is the culmination of 10 days of intensive work!</h4>
                </Modal>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">venture</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem><NavLink href="/foodFR">FR</NavLink></NavItem>
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

                <div className="foodContainer">
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label>{this.props.username}A choose your food</Label>
                        <Label>{this.props.username}, A choose your food</Label>
                        <Label>{this.props.username} A choose your food</Label>

                    </Col>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label>Hungry for?</Label>
                    </Col>
                    {this.props.foods && (
                        <div>
                            <Col sm="12" md={{ size: 8, offset: 2 }}>
                                <Label check><Input onChange={() => this.props.setFood("latinMex")}
                                    value={this.props.foods.latinMex}
                                    type="checkbox" /> Tex/Mex</Label>
                            </Col>
                            <Col sm="12" md={{ size: 8, offset: 2 }}>
                                <Label check><Input onChange={() => this.props.setFood("asian")}
                                    value={this.props.foods.asian}
                                    type="checkbox" />Japanese/Chinese</Label>
                            </Col>
                        </div>)}
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label check><Input onChange={this.props.setHungry}
                            type="checkbox" />Not Hungry</Label>
                    </Col>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Button onClick={this.handleFood} >Submit</Button>
                    </Col>

                </div>
            </div>
        );
    }
}

let Food = withRouter(Content);

export default Food;