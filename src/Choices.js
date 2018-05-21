import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
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
            tooltipOpenRight: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
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

        if(this.props.english === true) {
            return (
                <div>
                    <Modal className="introModal" isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                        <h2 align="center">Welcome traveller,</h2>
                        <h2 id="h2Modal" align="center"> to the world of venture!</h2>
                        <h4 align="center">Crafted by a scrappy team of three aspiring web-developers, venture is the brain-child of Aly Neumann, Ksenia Nadkina and Jordan Lahmy! </h4>
                        <h4 align="center"> Built with react/react-strap using express & written in javascript, what you see is the culmination of 10 days of intensive work!</h4>
                    </Modal>
    
                    <Navbar color="light" light expand="md">
                        <NavbarBrand className="brand" href="/">venture</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem><NavLink onClick={this.props.toggleLanguage}>FR</NavLink></NavItem>
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
                            <Label>{this.props.username} A choose your own!</Label>
                        </Col>
                        <Row>
                            <Col sm={{ size: 4, offset: 2 }}>
                                <div>
                                    <li className="listingStyle">
                                        <a href="tooltipLeft" id="tooltipLeft">
                                            <Link to={"/map?lat=" +
                                                this.props.firstInterest.coordinates.lat + "&lng=" +
                                                this.props.firstInterest.coordinates.long + "&step=" +
                                                this.props.step}>
                                                <img className="images" src={this.props.firstInterest.imageLocation} alt="img1" />
                                            </Link>
    
                                        </a>
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
                                    <a href="tooltipRight" id="tooltipRight">
                                        <Link to={"/map?lat=" +
                                            this.props.secondInterest.coordinates.lat + "&lng=" +
                                            this.props.secondInterest.coordinates.long + "&step=" +
                                            this.props.step}>
                                            <img className="images" src={this.props.secondInterest.imageLocation} alt="img2" />
                                        </Link> <br />
                                        </a>
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
                        <h2 align="center">Welcome traveller,</h2>
                        <h2 id="h2Modal" align="center"> to the world of venture!</h2>
                        <h4 align="center">Crafted by a scrappy team of three aspiring web-developers, venture is the brain-child of Aly Neumann, Ksenia Nadkina and Jordan Lahmy! </h4>
                        <h4 align="center"> Built with react/react-strap using express & written in javascript, what you see is the culmination of 10 days of intensive work!</h4>
                    </Modal>
    
                    <Navbar color="light" light expand="md">
                        <NavbarBrand className="brand" href="/">venture</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem><NavLink onClick={this.props.toggleLanguage}>EN</NavLink></NavItem>
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
                            <Label>{this.props.username}, Choissiser le votre</Label>
                        </Col>
                        <Row>
                            <Col sm={{ size: 4, offset: 2 }}>
                                <div>
                                    <li className="listingStyle">
                                        <a href="tooltipLeft" id="tooltipLeft">
                                            <Link to={"/map?lat=" +
                                                this.props.firstInterest.coordinates.lat + "&lng=" +
                                                this.props.firstInterest.coordinates.long + "&step=" +
                                                this.props.step}>
                                                <img className="images" src={this.props.firstInterest.imageLocation} alt="img1" />
                                            </Link>
    
                                        </a>
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
                                    <a href="tooltipRight" id="tooltipRight">
                                        <Link to={"/map?lat=" +
                                            this.props.secondInterest.coordinates.lat + "&lng=" +
                                            this.props.secondInterest.coordinates.long + "&step=" +
                                            this.props.step}>
                                            <img className="images" src={this.props.secondInterest.imageLocation} alt="img2" />
                                        </Link> <br />
                                        </a>
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