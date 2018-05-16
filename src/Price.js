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
    DropdownItem, Form,
    FormGroup,
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
            museums: this.props.name,
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

                <Form>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label>{this.props.username}, A choose your price range!</Label>
                    </Col>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label check><Input type="checkbox" />$</Label>
                    </Col>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label check><Input type="checkbox" />$$</Label>
                    </Col>

                    <FormGroup check row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Button onClick={this.handlePrice} >Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

let Price = withRouter(Content);

export default Price;