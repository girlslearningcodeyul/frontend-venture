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

    handlePrice = (e) => {
        //add logic for the case where everything is set to false and null, in that case return a random generation of the listing
        e.preventDefault();
        if (this.props.cheap || this.props.expensive) {
            this.props.handleSubmit();
        }
        else {
            this.setState({ isValid: false })
        }
    }

    render() {
        if (this.props.english === true) {
            return (
                <div>
                    <Modal className="introModal" isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                        <h2 align="center">Welcome traveller,</h2>
                        <h2 id="h2Modal" align="center"> to the world of venture!</h2>
                        <h4 align="center">Créer avec amour par Aly Neumann, Ksenia Nadkina et Jordan Lahmy ! venture est née à base de React/react-strap utilisant express écrit en Javascript!  </h4>
                        <h4 align="center"> Ce que vous voyez est le produit de 10 jours intenses dans le but de redonner le sens de l'aventure en explorant votre ville!</h4>
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

                    <div className="priceContainer">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label>{this.props.username}, a choose your price range!</Label>
                        </Col>
                        <div>
                            {!this.state.isValid && <div>Please, select at least one.</div>}
                            <Col sm="12" md={{ size: 8, offset: 2 }}>
                                <Label className={!this.state.isValid && "formError"}>
                                    <CustomInput type="checkbox"
                                        value={this.props.cheap}
                                        onChange={() => this.props.togglePrice("cheap")}
                                        id="k" label="$" />
                                </Label>
                            </Col>
                            <Col sm="12" md={{ size: 8, offset: 2 }}>
                                <Label className={!this.state.isValid && "formError"}>
                                    <CustomInput type="checkbox"
                                        value={this.props.expensive}
                                        onChange={() => this.props.togglePrice("expensive")}
                                        id="m" label="$$" />
                                </Label>
                            </Col>
                        </div>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Button onClick={this.handlePrice} >To greatness!</Button>
                        </Col>

                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <Modal className="introModal" isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                        <h2 align="center">Bienvenue voyageur,</h2>
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
                                        <DropdownItem><NavItem><NavLink href="/">Recommencer</NavLink></NavItem></DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={this.toggleModal} >Détails</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>

                    <div className="priceContainer">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label>{this.props.username}, choisis ton prix</Label>
                        </Col>
                        <div>
                            {!this.state.isValid && <div>Un choix minimum SVP.</div>}
                            <Col sm="12" md={{ size: 8, offset: 2 }}>
                                <Label className={!this.state.isValid && "formError"}>
                                    <CustomInput type="checkbox"
                                        value={this.props.cheap}
                                        onChange={() => this.props.togglePrice("cheap")}
                                        id="k" label="$" />
                                </Label>
                            </Col>
                            <Col sm="12" md={{ size: 8, offset: 2 }}>
                                <Label className={!this.state.isValid && "formError"}>
                                    <CustomInput type="checkbox"
                                        value={this.props.expensive}
                                        onChange={() => this.props.togglePrice("expensive")}
                                        id="m" label="$$" />
                                </Label>
                            </Col>
                        </div>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Button onClick={this.handlePrice} >À la venture!</Button>
                        </Col>

                    </div>
                </div>
            );
        }

    }
}

let Price = withRouter(Content);

export default Price;