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
            isValid: true
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

        if (this.props.bars || this.props.museums || this.props.historical || this.props.parks) {
            this.props.handleFun();
            this.props.historyPush('/price') // THIS IS THE KEY LINE
        }

        else {
            this.setState({ isValid: false })
        }


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
                                        <DropdownItem><NavItem><NavLink href="/">Restart</NavLink></NavItem></DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={this.toggleModal} >About</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>

                    <div className="container funContainer">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label>{this.props.username}, a choose your fun!</Label>
                        </Col>
                        <div>
                            {!this.state.isValid && <div>Please, select at least one.</div>}
                            <Col sm="12" md={{ size: 8, offset: 2 }}>
                                <Label className={!this.state.isValid && "formError"}>
                                    <CustomInput type="checkbox"
                                        onChange={() => this.props.toggleState("museums")}
                                        id="a" label="Museums/Art" />
                                </Label>
                            </Col>
                            <Col sm="12" md={{ size: 8, offset: 2 }}>
                                <Label className={!this.state.isValid && "formError"}>
                                    <CustomInput type="checkbox"
                                        onChange={() => this.props.toggleState("parks")}
                                        id="b" label="Outdoor/Parks" />
                                </Label>
                            </Col>
                            <Col sm="12" md={{ size: 8, offset: 2 }}>
                                <Label className={!this.state.isValid && "formError"}>
                                    <CustomInput type="checkbox"
                                        onChange={() => this.props.toggleState("historical")}
                                        id="d" label="Historical" />
                                </Label>
                            </Col>
                            <Col sm="12" md={{ size: 8, offset: 2 }}>
                                <Label className={!this.state.isValid && "formError"}>
                                    <CustomInput type="checkbox"
                                        value={this.props.bars ? this.props.bars : ""}
                                        onChange={this.props.setBars}
                                        id="c" label="Nightlife" />
                                </Label>
                            </Col>
                        </div>

                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Button onClick={this.handleFun} >Onwards!</Button>
                        </Col>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="introDiv">
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
                                        <DropdownItem><NavItem><NavLink href="/">Recommencer</NavLink></NavItem></DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={this.toggleModal} >Détails</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>

                    <div className="container funContainer">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label>{this.props.username}, choisis ton fun!</Label>
                        </Col>
                        <div>
                            {!this.state.isValid && <div>Choissiser minimum un SVP.</div>}
                            <Col sm="12" md={{ size: 8, offset: 2 }}>
                                <Label className={!this.state.isValid && "formError"}>
                                    <CustomInput type="checkbox"
                                        onChange={() => this.props.toggleState("museums")}
                                        id="a" label="Musée/Art" />
                                </Label>
                            </Col>
                            <Col sm="12" md={{ size: 8, offset: 2 }}>
                                <Label className={!this.state.isValid && "formError"}>
                                    <CustomInput type="checkbox"
                                        onChange={() => this.props.toggleState("parks")}
                                        id="b" label="Parc/ Activite extérieure" />
                                </Label>
                            </Col>
                            <Col sm="12" md={{ size: 8, offset: 2 }}>
                                <Label className={!this.state.isValid && "formError"}>
                                    <CustomInput type="checkbox"
                                        onChange={() => this.props.toggleState("historical")}
                                        id="d" label="Historique" />
                                </Label>
                            </Col>
                            <Col sm="12" md={{ size: 8, offset: 2 }}>
                                <Label className={!this.state.isValid && "formError"}>
                                    <CustomInput type="checkbox"
                                        value={this.props.bars ? this.props.bars : ""}
                                        onChange={this.props.setBars}
                                        id="c" label="Vie de nuit" />
                                </Label>
                            </Col>
                        </div>
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