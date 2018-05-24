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
    Col,
    Button,
    Modal,
    //ModalHeader,
} from 'reactstrap';
import TypeWriter from './TypeWriter';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
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

    handleRules = () => {
        this.props.historyPush('/food') // THIS IS THE KEY LINE
    }


    render() {
        if (this.props.english === true) {
            return (
                <div className="introDiv">
                    <Modal name="A1" className="introModal introChange" isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                        <div name="A2" style={{ padding: "1px 56px 43px" }}>
                            <div className="A3-1"  >Welcome traveller,</div>
                            <div className="A3-2" id="h2Modal"> to the world of venture!</div>
                            <div className="A3-3"  >Crafted by a scrappy team of three aspiring web-developers, venture is the brain-child of Aly Neumann, Ksenia Nadkina and Jordan Lahmy! </div>
                            <div className="A3-4" > Built with react/react-strap using express & written in javascript, what you see is the culmination of 10 days of intensive work!</div>
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
                                        <DropdownItem onClick={this.toggleModal}>About</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>

                    <div className="container introContainer" id="introId1">
                        <Col sm={{ size: 8, offset: 2 }}>
                            <Label id="intro1">Welcome {this.props.username},</Label>
                        </Col>
                        <Col sm={{ size: 8, offset: 2 }}>
                            <Label id="intro2">
                                <TypeWriter><h3>to the world of venture!</h3></TypeWriter>
                                <div className="rules-fade">
                                <Label id="intro3">We will start by asking you questions in order to tailor your experience.</Label>
                                <Label id="intro3">You may answer more than once.</Label>
                                <Label id="intro3"> So silence your phone, take a deep breath and throw yourself to greatness!</Label>
                                </div>
                            </Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Button onClick={this.handleRules} >Onwards!</Button>
                        </Col>
                    </div>
                </div >
            );
        } else {
            return (
                //en francais
                <div className="introDiv">
                    <div>
                        <Modal name="A1" className="introModal introChange" isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                            <div name="A2" style={{ padding: "1px 56px 43px" }}>
                                <div className="A3-1"  >Bienvenue voyageur intrepid,</div>
                                <div className="A3-2" id="h2Modal">  au monde de venture!</div>
                                <div className="A3-3"  >Créer avec amour par Aly Neumann, Ksenia Nadkina et Jordan Lahmy ! venture est née à base de React/react-strap utilisant express écrit en Javascript!  </div>
                                <div className="A3-4" >Ce que vous voyez est le produit de 10 jours intenses dans le but de redonner le sens de l'aventure en explorant votre ville!</div>
                            </div>
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

                        <div className=" container introContainer" id="introId1">
                            <Col sm={{ size: 8, offset: 2 }}>
                                <Label id="intro1"> Bienvenue {this.props.username},</Label>
                            </Col>
                            <Col sm={{ size: 8, offset: 2 }}>
                                <Label id="intro2">
                                    <TypeWriter><h3>au monde de venture!</h3></TypeWriter>
                                    <div className="rules-fade">
                                    <Label id="intro3">On va vous presenter des questions auquelles vous pouvez répondre plusieurs fois!</Label>
                                    <Label id="intro3"> À la fin, un choix de deux destinations.</Label>
                                    <Label id="intro3">Bon voyage!</Label>
                                    <Label id="intro3"> Et à la venture!</Label>
                                    </div>
                                </Label>
                            </Col>
                            <Col sm="12" md={{ size: 8, offset: 2 }}>
                                <Button onClick={this.handleRules} >Commencer</Button>
                            </Col>
                        </div>
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

let Rules = withRouter(Content);

export default Rules; // You DO NOT export ContentTemplate