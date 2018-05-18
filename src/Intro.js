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
    ModalHeader,
} from 'reactstrap';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            inputUsername: "",
            modalOpen: false,
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

    handleIntro = () => {
        this.props.setUsername(this.state.inputUsername);
        this.props.history.push('/food') // THIS IS THE KEY LINE

    }

    handleRandom = (e) => {
        e.preventDefault();
        fetch('/feelingLucky')
            .then(response => response.text())
            .then(responseBody => {
                console.log("successfully sent");
                this.props.history.push('/map');
            })
        //this is where the random function will generate the random location and send me the latitude and longitude

    }

    handleUsername = (e) => {
        this.setState({ inputUsername: e.target.value })
    }

    render() {
        return (
            <div className="introDiv">

                <Modal className="introModal" isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                    <h2 align="center">Welcome traveller,</h2>
                    <h2 id="h2Modal" align="center"> to the world of venture!</h2> 
                    <h3 align="center">Crafted by a scrappy team of three aspiring master web-developers, venture is the brain-child of Aly Neuman, Ksenia Ndkn and Jordan Lahmy! </h3>
                    <h4 align="center"> Built with react/react-strap using express while written in javascript, what you see is the culmination of 10 days of intensive work!</h4>
                </Modal>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">venture</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem><NavLink href="/">FR</NavLink></NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>Options</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem onClick={this.toggleModal}>About venture</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Restart</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>

                <div className="introContainer">
                    <Row>
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
                            <Input onChange={this.handleUsername}
                                name="name"
                                value={this.inputUsername} />
                        </Col>
                    </Row>
                    <Row>
                        <div className="col-xl-5 col-sm-4" />
                        <div className="col-xl-1 col-sm-2"><Button onClick={this.handleIntro} >Submit</Button></div>
                        <div className="col-xl-1 col-sm-2"><Button onClick={this.handleRandom}>Feeling lucky?</Button></div>
                    </Row>
                </div>
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