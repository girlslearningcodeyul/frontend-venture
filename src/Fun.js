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
    // Input,
    CustomInput,
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

    handleFun = () => {
        this.props.historyPush('/price') // THIS IS THE KEY LINE
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
                                <NavItem><NavLink onClick={this.toggleLanguage}>EN</NavLink></NavItem>
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

                    <div className="funContainer">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label>{this.props.username}, a choose your fun!</Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label check><CustomInput type="checkbox"
                                onChange={() => this.props.toggleState("museums")}
                                id="a" label="Museums/Art" /></Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label check><CustomInput type="checkbox"
                                onChange={() => this.props.toggleState("parks")}
                                id="b" label="Outdoor/Parks" /></Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label check><CustomInput type="checkbox"
                                onChange={() => this.props.toggleState("historical")}
                                id="d" label="Historical" /></Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label check><CustomInput type="checkbox"
                                value={this.props.bars ? this.props.bars : ""}
                                onChange={this.props.setBars}
                                id="c" label="Nightlife" /></Label>
                        </Col>

                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Button onClick={this.handleFun} >Onwards!</Button>
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

                    <div className="funContainer">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label>{this.props.username}, choisis ton fun!</Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label check><CustomInput type="checkbox"
                                onChange={() => this.props.toggleState("museums")}
                                id="a" label="Musée/Art" /></Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label check><CustomInput type="checkbox"
                                onChange={() => this.props.toggleState("parks")}
                                id="b" label="Parc/ Activite extérieure" /></Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label check><CustomInput type="checkbox"
                                onChange={() => this.props.toggleState("historical")}
                                id="d" label="Historique" /></Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label check><CustomInput type="checkbox"
                                value={this.props.bars ? this.props.bars : ""}
                                onChange={this.props.setBars}
                                id="c" label="Vie de nuit" /></Label>
                        </Col>

                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Button onClick={this.handleFun} >Continuer!</Button>
                        </Col>
                    </div>
                </div>
            );
        }

    }
}

let Fun = withRouter(Content);

export default Fun;