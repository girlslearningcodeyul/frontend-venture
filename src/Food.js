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
    // Input,
    Col,
    Button,
    Modal,
    CustomInput
} from 'reactstrap';

class Content extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            modalOpen: false,
            english: true,
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
        this.props.historyPush('/fun') // THIS IS THE KEY LINE
    }
    toggleLanguage = () => {
        this.setState({
            english: !this.state.english
        });
    }

    render() {
        if (this.state.english === true) {
            return (
                <div>
                    <Modal className="introModal" isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                        <h2 align="center">Welcome traveller,</h2>
                        <h2 id="h2Modal" align="center"> to the world of venture!</h2>
                        <h4 align="center">Crafted by a scrappy team of three aspiring web-developers, venture is the brain-child of Aly Neumann, Ksenia Nadkina and Jordan Lahmy! </h4>
                        <h4 align="center"> Built with react/react-strap using express & written in javascript, what you see is the culmination of 10 days of intensive work!</h4>
                    </Modal>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">venture</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem><NavLink  onClick={this.toggleLanguage}>FR</NavLink></NavItem>
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
                            <Label>{this.props.username}, a choose your food!</Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label>Hungry for?</Label>
                        </Col>
                        {this.props.foods && (
                            <div>
                                <Col sm="12" md={{ size: 8, offset: 2 }}>
                                    <Label check><CustomInput onChange={() => this.props.setFood("latinMex")}
                                        value={this.props.foods.latinMex}
                                        type="checkbox" id="x" label="Latin/Mexican" /> </Label>
                                </Col>
                                <Col sm="12" md={{ size: 8, offset: 2 }}>
                                    <Label check><CustomInput onChange={() => this.props.setFood("asian")}
                                        value={this.props.foods.asian}
                                        type="checkbox" id="y" label="Japanese/Chinese" /></Label>
                                </Col>
                            </div>)}
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label check><CustomInput onChange={this.props.setHungry}
                                type="checkbox" id="z" label="Not Hungry" /></Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Button onClick={this.handleFood} >Onwards!</Button>
                        </Col>

                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <Modal className="introModal" isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                        <h2 align="center">Welcome traveller,</h2>
                        <h2 id="h2Modal" align="center"> to the world of venture!</h2>
                        <h4 align="center">Crafted by a scrappy team of three aspiring web-developers, venture is the brain-child of Aly Neumann, Ksenia Nadkina and Jordan Lahmy! </h4>
                        <h4 align="center"> Built with react/react-strap using express & written in javascript, what you see is the culmination of 10 days of intensive work!</h4>
                    </Modal>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">venture</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem><NavLink onClick={this.toggleLanguage}>EN</NavLink></NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>Options</DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem><NavItem><NavLink href="/">Recommencer</NavLink></NavItem></DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={this.toggleModal} >Détails</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>

                    <div className="foodContainer">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label>{this.props.username}, choisis ta bouffe!</Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label>Envie de manger?</Label>
                        </Col>
                        {this.props.foods && (
                            <div>
                                <Col sm="12" md={{ size: 8, offset: 2 }}>
                                    <Label check><CustomInput onChange={() => this.props.setFood("latinMex")}
                                        value={this.props.foods.latinMex}
                                        type="checkbox" id="x" label="Latin/Mexican" /> </Label>
                                </Col>
                                <Col sm="12" md={{ size: 8, offset: 2 }}>
                                    <Label check><CustomInput onChange={() => this.props.setFood("asian")}
                                        value={this.props.foods.asian}
                                        type="checkbox" id="y" label="Asiatique" /></Label>
                                </Col>
                            </div>)}
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label check><CustomInput onChange={this.props.setHungry}
                                type="checkbox" id="z" label="Pas faim" /></Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Button onClick={this.handleFood} >Continuer!</Button>
                        </Col>

                    </div>
                </div>
            );
        }

    }
}

let Food = withRouter(Content);

export default Food;