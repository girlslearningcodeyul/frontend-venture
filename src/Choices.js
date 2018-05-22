import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

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
    Row,
    Modal,
    Tooltip
} from 'reactstrap';

class Content extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleTooltipLeft = this.toggleTooltipLeft.bind(this);
        this.toggleTooltipRight = this.toggleTooltipRight.bind(this);
        this.state = {
            isOpen: false,
            username: "",
            tooltipOpenLeft: false,
            tooltipOpenRight: false,
            modalOpen: false,

        };
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

    toggleTooltipLeft() {
        this.setState({
            tooltipOpenLeft: !this.state.tooltipOpenLeft
        });
    }
    toggleTooltipRight() {
        this.setState({
            tooltipOpenRight: !this.state.tooltipOpenRight
        });
    }

    render() {
        //before load must generate a gif of typewriter typing out the experience

        if (this.props.english === true) {
            return (
                <div>
                    <Modal className="introModal" isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                        <h2 align="center">Welcome </h2>
                        <h2 id="h2Modal" align="center"> to the world of venture!</h2>
                        <h4 align="center">Crafted by a scrappy team of three aspiring web-developers, venture is the brain-child of Aly Neumann, Ksenia Nadkina and Jordan Lahmy! </h4>
                        <h4 align="center"> Built with react/react-strap using express & written in javascript, what you see is the culmination of 10 days of intensive work!</h4>
                    </Modal>

                    <Navbar color="light" light expand="md">
                        <NavbarBrand className="brand" href="/">venture</NavbarBrand>
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

                    <div className="choicesContainer">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label>{this.props.username}, a choose your own!</Label>
                        </Col>
                        <Row>
                            <Col sm={{ size: 4, offset: 2 }}>
                                <div>
                                    <li className="listingStyle">
                                        <Link id="tooltipLeft" to={"/map?lat=" +
                                            this.props.firstInterest.coordinates.lat + "&lng=" +
                                            this.props.firstInterest.coordinates.long + "&step=" +
                                            this.props.step}>
                                            <img className="images" src={this.props.firstInterest.imageLocation} alt="img1" />
                                        </Link>
                                        <br />
                                        {this.props.firstInterest.name}
                                    </li>
                                    <Tooltip placement="left" isOpen={this.state.tooltipOpenLeft} target="tooltipLeft" toggle={this.toggleTooltipLeft}>
                                        {this.props.firstInterest.description}
                                    </Tooltip>
                                </div>
                            </Col>
                            <Col sm={{ size: 4 }}>
                                <div>
                                    <li className="listingStyle">
                                        <Link id="tooltipRight" to={"/map?lat=" +
                                            this.props.secondInterest.coordinates.lat + "&lng=" +
                                            this.props.secondInterest.coordinates.long + "&step=" +
                                            this.props.step}>
                                            <img className="images" src={this.props.secondInterest.imageLocation} alt="img2" />
                                        </Link> <br />
                                        {this.props.secondInterest.name}
                                    </li >
                                    <Tooltip placement="right" isOpen={this.state.tooltipOpenRight} target="tooltipRight" toggle={this.toggleTooltipRight}>
                                        {this.props.secondInterest.description}
                                    </Tooltip>

                                </div>
                            </Col>
                            {/*use the toggle button method in bootstrap to reveal more text*/}
                            <Col sm={{ size: 2 }} />
                        </Row>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <Modal className="introModal" isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                        {console.log("modal activated")}
                        <h2 align="center">Bienvenue voyageur,</h2>
                        <h2 id="h2Modal" align="center"> au monde de venture!</h2>
                        <h4 align="center">Créer avec amour par Aly Neumann, Ksenia Nadkina et Jordan Lahmy ! venture est née à base de React/react-strap utilisant express écrit en Javascript!  </h4>
                        <h4 align="center"> Ce que vous voyez est le produit de 10 jours intenses dans le but de redonner le sens de l'aventure en explorant votre ville!</h4>
                    </Modal>

                    <Navbar color="light" light expand="md">
                        <NavbarBrand className="brand" href="/">venture</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem><NavLink onClick={this.props.toggleLanguage} style={{ cursor: 'pointer' }}>EN</NavLink></NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>Options</DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem><NavItem><NavLink href="/">Recommencer</NavLink></NavItem></DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={this.toggleModal}>Détails</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>

                    <div className="choicesContainer">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label>{this.props.username}, choissiser le votre</Label>
                        </Col>
                        <Row>
                            <Col sm={{ size: 4, offset: 2 }}>
                                <div>
                                    <li className="listingStyle">
                                        <Link id="tooltipLeft" to={"/map?lat=" +
                                            this.props.firstInterest.coordinates.lat + "&lng=" +
                                            this.props.firstInterest.coordinates.long + "&step=" +
                                            this.props.step}>
                                            <img className="images" src={this.props.firstInterest.imageLocation} alt="img1" />
                                        </Link>
                                        <br />
                                        {this.props.firstInterest.name}
                                    </li>
                                    <Tooltip placement="left" isOpen={this.state.tooltipOpenLeft} target="tooltipLeft" toggle={this.toggleTooltipLeft}>
                                        {this.props.firstInterest.description}
                                    </Tooltip>
                                </div>
                            </Col>
                            <Col sm={{ size: 4 }}>
                                <div>
                                    <li className="listingStyle">
                                        <Link id="tooltipRight" to={"/map?lat=" +
                                            this.props.secondInterest.coordinates.lat + "&lng=" +
                                            this.props.secondInterest.coordinates.long + "&step=" +
                                            this.props.step}>
                                            <img className="images" src={this.props.secondInterest.imageLocation} alt="img2" />
                                        </Link> <br />
                                        {this.props.secondInterest.name}
                                    </li >
                                    <Tooltip placement="right" isOpen={this.state.tooltipOpenRight} target="tooltipRight" toggle={this.toggleTooltipRight}>
                                        {this.props.secondInterest.description}
                                    </Tooltip>

                                </div>
                            </Col>
                            {/*use the toggle button method in bootstrap to reveal more text*/}
                            <Col sm={{ size: 2 }} />
                        </Row>
                    </div>
                </div>
            );
        }

    }
}

let Choices = withRouter(Content);

export default Choices;