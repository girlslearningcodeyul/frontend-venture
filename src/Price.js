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
    Input,
    Col,
    Button
} from 'reactstrap';

class Content extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            username: ""
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handlePrice = (e) => {

        //add logic for the case where everything is set to false and null, in that case return a random generation of the listing
        e.preventDefault();
        console.log(this.state)
        let body = JSON.stringify({ //sending this to the backend and names have to match
            latinMex: {
                latinMexCheap: this.props.latinMexCheap,
                latinMexExpensive: this.props.latinMexExpensive
            },
            asian: {
                asianCheap: this.props.asianCheap,
                asianExpensive: this.props.asianExpensive
            },
            bars: {
                barsCheap: this.props.barsCheap,
                barsExpensive: this.props.barsExpensive
            },
            museums: this.props.museums,
            parks: this.props.parks,
            historical: this.props.historical
        })

        fetch('/userPreferencesFirstActivity', { method: "POST", body: body })
            .then(response => response.text())
            .then(responseBody => {
                console.log("successfully sent");
                this.props.history.push('/choices');
            })
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">venture</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem><NavLink href="/price">FR</NavLink></NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>Options</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>About</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem><NavItem><NavLink href="/">Restart</NavLink></NavItem></DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>

                <div className="priceContainer">
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label>{this.props.username}, A choose your price range!</Label>
                    </Col>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label check><Input type="checkbox"
                            value={this.props.cheap}
                            onChange={() => this.props.togglePrice("cheap")} />$</Label>
                    </Col>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label check><Input type="checkbox"
                            value={this.props.expensive}
                            onChange={() => this.props.togglePrice("expensive")} />$$</Label>
                    </Col>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Button onClick={this.handlePrice} >Submit</Button>
                    </Col>

                </div>
            </div>
        );
    }
}

let Price = withRouter(Content);

export default Price;