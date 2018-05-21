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
    Row,
    Modal,
    //ModalHeader,
} from 'reactstrap';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            inputUsername: "",
            modalOpen: false,
            step: 0,
            lat: undefined,
            long: undefined,
            english: true,
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }
    toggleLanguage = () => {
        this.setState({
            english: !this.state.english
        });
    }

    handleIntro = () => {
        this.props.setUsername(this.state.inputUsername);
        this.props.history.push('/rules') // THIS IS THE KEY LINE

    }

    handleRandom = (e) => {
        e.preventDefault();
        fetch('/feelingLucky')
            .then(response => response.text())
            .then(responseBody => {
                let parsedBody = JSON.parse(responseBody);
                console.log(parsedBody);
                this.setState({
                    lat: parsedBody.randomAdventure[0].coordinates.lat,
                    long: parsedBody.randomAdventure[0].coordinates.long
                });
                console.log(this.state.lat);
                console.log(this.state.long);
                this.props.historyPush("/map?lat=" + this.state.lat + "&lng=" + this.state.long + "&step=3");
                //this is where the random function will generate the random location and send me the latitude and longitude
            })
    }

    handleUsername = (e) => {
        this.setState({ inputUsername: e.target.value })
    }

    render() {
        if (this.state.english === true) {
            return (
                <div className="introDiv">

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
                                <NavItem><NavLink onClick={this.toggleLanguage} style={{cursor:'pointer'}}>FR</NavLink></NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>Options</DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem onClick={this.toggleModal}>About</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>

                    <div className="introContainer" id="introId1">
                        <Row>
                            <Col sm={{ size: 8, offset: 2 }}>
                                <Label for="ventureWelcome">Welcome to Venture</Label>
                            </Col>
                            <Col sm={{ size: 8, offset: 2 }}>
                                <Label for="ventureWelcome2">A choose your own...</Label>
                            </Col>
                            <Col sm={{ size: 8, offset: 2 }}>
                                <Label for="ventureWelcome3">Enter your name:</Label>
                            </Col>
                            <Col sm={{ size: 4, offset: 4 }}>
                                <Input onChange={this.handleUsername}
                                    name="name"
                                    value={this.inputUsername} />
                            </Col>
                        </Row>
                        <Row>
                            <div className="col-xl-4 col-sm-3" />
                            <div className="col-xl-1 col-sm-2"><Button onClick={this.handleIntro} >Onwards!</Button></div>
                            <div className="col-xl-1 col-sm-1" />
                            <div className="col-xl-1 col-sm-2"><Button onClick={this.handleRandom}>Feeling lucky?</Button></div>
                        </Row>
                    </div>
                </div >
            );
        } else {
            return (
                <div className="introDiv">

                    <Modal className="introModal" isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                        <h2 align="center">Bienvenue voyageur intrepid,</h2>
                        <h2 id="h2Modal" align="center"> dans le monde de venture!</h2>
                        <h4 align="center">Crafted by a scrappy team of three aspiring web-developers, venture is the brain-child of Aly Neumann, Ksenia Nadkina and Jordan Lahmy! </h4>
                        <h4 align="center"> Built with react/react-strap using express & written in javascript, what you see is the culmination of 10 days of intensive work!</h4>
                    </Modal>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">venture</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem><NavLink onClick={this.toggleLanguage} style={{cursor:'pointer'}}>EN</NavLink></NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>Options</DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem onClick={this.toggleModal}>Détails</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>

                    <div className="introContainer" id="introId1">
                        <Row>
                            <Col sm={{ size: 8, offset: 2 }}>
                                <Label for="ventureWelcome">venture vous salute!</Label>
                            </Col>
                            <Col sm={{ size: 8, offset: 2 }}>
                                <Label for="ventureWelcome2">Choissiser le votre</Label>
                            </Col>
                            <Col sm={{ size: 8, offset: 2 }}>
                                <Label for="ventureWelcome3">Votre nom s'il vous plait:</Label>
                            </Col>
                            <Col sm={{ size: 4, offset: 4 }}>
                                <Input onChange={this.handleUsername}
                                    name="name"
                                    value={this.inputUsername} />
                            </Col>
                        </Row>
                        <Row>
                            <div className="col-xl-4 col-sm-3" />
                            <div className="col-xl-1 col-sm-2"><Button onClick={this.handleIntro} >A la venture!</Button></div>
                            <div className="col-xl-1 col-sm-1" />
                            <div className="col-xl-1 col-sm-2"><Button onClick={this.handleRandom}>Chanceux?</Button></div>
                        </Row>
                    </div>
                </div >
            );
        }


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