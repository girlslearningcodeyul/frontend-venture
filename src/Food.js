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

    handleFood = () => {
        //console.log(this.props.hungry);
        //checks for the foods object to exist or not empty or not hungry
        if ((this.props.foods && Object.values(this.props.foods).some((b) => b)) || !this.props.hungry) {
            this.props.historyPush('/fun');
        }

        else {
            this.setState({ isValid: false })
        }
    }

    render() {
        //console.log(this.props.hungry)
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

                    <div className=" container foodContainer">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label>{this.props.username}, a choose your food!</Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label>Hungry for?</Label>
                        </Col>

                        {this.props.foods && (
                            <div>
                                {!this.state.isValid && <div>Please, select at least one.</div>}
                                <Col sm="12" md={{ size: 8, offset: 2 }}>
                                    <Label className={!this.state.isValid && "formError"}> {/*highlights the fields to be entered*/}
                                        <CustomInput
                                            onChange={() => this.props.setFood("latinMex")}
                                            value={this.props.foods.latinMex}
                                            type="checkbox" id="x" label="Latin/Mexican" />
                                    </Label>
                                </Col>
                                <Col sm="12" md={{ size: 8, offset: 2 }}>
                                    <Label className={!this.state.isValid && "formError"}>
                                        <CustomInput
                                            onChange={() => this.props.setFood("asian")}
                                            value={this.props.foods.asian}
                                            type="checkbox" id="y" label="Japanese/Chinese" />
                                    </Label>
                                </Col>
                                <Col sm="12" md={{ size: 8, offset: 2 }}>
                                    <Label className={!this.state.isValid && "formError"}>
                                        <CustomInput
                                            onChange={() => this.props.setFood("european")}
                                            value={this.props.foods.european}
                                            type="checkbox" id="yy" label="French/Italian" />
                                    </Label>
                                </Col>
                            </div>)}

                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label className={!this.state.isValid && "formError"}>
                                <CustomInput
                                    onChange={this.props.setHungry}
                                    type="checkbox" id="z" label="Not Hungry" />
                            </Label>
                        </Col>


                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Button onClick={this.handleFood} >Onwards!</Button>
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

                    <div className="container foodContainer">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label>{this.props.username}, choisis ta bouffe!</Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label>Envie de manger?</Label>
                        </Col>

                        {this.props.foods && (
                            <div>
                                {!this.state.isValid && <div>Choissiser minimum un SVP.</div>}
                                <Col sm="12" md={{ size: 8, offset: 2 }}>
                                    <Label className={!this.state.isValid && "formError"}>
                                        <CustomInput onChange={() => this.props.setFood("latinMex")}
                                            value={this.props.foods.latinMex}
                                            type="checkbox" id="x" label="Latin/Mexican" /> </Label>
                                </Col>
                                <Col sm="12" md={{ size: 8, offset: 2 }}>
                                    <Label className={!this.state.isValid && "formError"}>
                                        <CustomInput onChange={() => this.props.setFood("asian")}
                                            value={this.props.foods.asian}
                                            type="checkbox" id="y" label="Asiatique" /></Label>
                                </Col>
                                <Col sm="12" md={{ size: 8, offset: 2 }}>
                                    <Label className={!this.state.isValid && "formError"}>
                                        <CustomInput onChange={() => this.props.setFood("european")}
                                            value={this.props.foods.european}
                                            type="checkbox" id="yy" label="Italien/Français" /></Label>
                                </Col>
                            </div>)}
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label className={!this.state.isValid && "formError"}>
                                <CustomInput onChange={this.props.setHungry}
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