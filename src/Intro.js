import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
            randomAdventure: undefined
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

    handleRandom = (e) => {
        e.preventDefault();
        fetch('https://venturemtl.club:4000/feelingLucky')
            .then(response => response.text())
            .then(responseBody => {
                let parsedBody = JSON.parse(responseBody);
                console.log(parsedBody);
                this.setState({
                    lat: parsedBody.randomAdventure[0].coordinates.lat,
                    lng: parsedBody.randomAdventure[0].coordinates.long,
                    randomAdventure: parsedBody.randomAdventure[0]
                });
                console.log(this.state.lat);
                console.log(this.state.lng);

                this.props.setRandomAdventure(this.state.randomAdventure); // passing the adventure to Preferences to pass onto Map.js

                this.props.historyPush("/map?lat=" + this.state.lat + "&lng=" + this.state.lng + "&step=3");
                //this is where the random function will generate the random location and send me the latitude and longitude
            })
    }

    handleUsername = (e) => {
        this.setState({ inputUsername: e.target.value })
    }

    handleIntro = () => {
        this.props.setUsername(this.state.inputUsername);
        this.props.history.push('/rules'); // THIS IS THE KEY LINE
    }

    render() {
// 71 px // 13px 
        if (this.props.english === true) {
            return (
                <div className="introDiv">

                    <Modal  name="A1" className="introModal introChange" isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                        <div name="A2" style={{padding : "1px 56px 43px"}}>
                            <div className="A3-1"  >Welcome traveller,</div>
                            <div className="A3-2"  id="h2Modal"> to the world of venture!</div>
                            <div  className="A3-3"  >Crafted by a scrappy team of three aspiring web-developers, venture is the brain-child of Aly Neumann, Ksenia Nadkina and Jordan Lahmy! </div>
                            <div  className="A3-4" > Built with react/react-strap using express & written in javascript, what you see is the culmination of 10 days of intensive work!</div>
                        </div>
                    </Modal>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">venture</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem><NavLink onClick={this.props.toggleLanguage} style={{ cursor: 'pointer' }}>FR</NavLink></NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>Options</DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem style={{ cursor: 'pointer' }} onClick={this.toggleModal}>About</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>

                    <div className="container introContainer" id="introId1">
                        <Row>
                            <Col sm={{ size: 8, offset: 2 }}>
                                <Label id="intro1">Welcome to Venture</Label>
                            </Col>
                            <Col sm={{ size: 8, offset: 2 }}>
                                <Label id="intro2">A choose your own...</Label>
                            </Col>
                            <Col sm={{ size: 8, offset: 2 }}>
                                <Label id="intro3">Enter your name:</Label>
                            </Col>
                            <Col sm={{ size: 4, offset: 4 }}>
                                <Input onChange={this.handleUsername}
                                    name="name"
                                    value={this.inputUsername}
                                    size="500"
                                    id="introId" />
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
                        <div> </div>
                        <h2 id="h2Modal" align="center"> au monde de venture!</h2>
                        <h4 align="center">Créer avec amour par Aly Neumann, Ksenia Nadkina et Jordan Lahmy ! venture est née à base de React/react-strap utilisant express écrit en Javascript!  </h4>
                        <h4 align="center"> Ce que vous voyez est le produit de 10 jours intenses dans le but de redonner le sens de l'aventure en explorant votre ville!</h4>
                    </Modal>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">venture</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem><NavLink onClick={this.props.toggleLanguage} style={{ cursor: 'pointer' }}>EN</NavLink></NavItem>
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
                                <Label id="intro1" for="ventureWelcome">Bienvenue à venture!</Label>
                            </Col>
                            <Col sm={{ size: 8, offset: 2 }}>
                                <Label id="intro2" for="ventureWelcome2">A vous le choix!</Label>
                            </Col>
                            <Col sm={{ size: 8, offset: 2 }}>
                                <Label id="intro3" for="ventureWelcome3">Votre nom s'il vous plait:</Label>
                            </Col>
                            <Col sm={{ size: 4, offset: 4 }}>
                                <Input id="introId"
                                    onChange={this.handleUsername}
                                    name="name"
                                    value={this.inputUsername}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <div className="col-xl-4 col-sm-3" />
                            <div className="col-xl-1 col-sm-2"><Button onClick={this.handleIntro} >À la venture!</Button></div>
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