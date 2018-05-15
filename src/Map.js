import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './App.css';
//import markerImg from './images/marker.png' markerImg not required
import GoogleMapReact from 'google-map-react';
//import styled from 'styled-components'; not required for the marker

import 'react-notifications/lib/notifications.css';
// let x = 67;
//`dfghjk${8}` -> exmple of a template string equivalent to 'dfghjkl' + 8

// let Marker = styled.div`
//   background-image: url(${markerImg});
//   width: ${(props) => props.isBig ? '60px' : '30px'};
//   height:30px;
//   background-size:cover;
// `;

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
  Label,
  Col,
  Row
} from 'reactstrap';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      center: {
        lat: 99.95, //source latitude
        lng: -10.33, //source longitude
        latD: 99.95, //destination latitude
        lngD: -10.33, //destination longitude
        isOpen: false
      },
      zoom: 15,
      display: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((s) => {
      console.log("get location");
      this.setState({ center: { lat: s.coords.latitude, lng: s.coords.longitude } })
    })
  }

  handleNavigation = ({ map, maps }) => {
    var directionsService = new maps.DirectionsService();
    var directionsDisplay = new maps.DirectionsRenderer();
    let origin = new maps.LatLng(this.state.center.lat, this.state.center.lng);
    let destination = new maps.LatLng(45.520181, -73.583276);
    console.log("ready to render direction", this.state.center);
    directionsDisplay.setMap(map);
    var request = {
      origin: origin,
      destination: destination,
      travelMode: 'WALKING' //Could also be DRIVING , BICYCLING , TRANSIT
    };
    directionsService.route(request, function (result, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(result);
      }
    });
  }

  render() {

    // console.log(this.state)
    if (this.state.display === true) {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">venture</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem><NavLink href="/map">FR</NavLink></NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>Options</DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Generate Next</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem><NavItem><NavLink href="/">Restart</NavLink></NavItem></DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
          <GoogleMapReact
            onGoogleApiLoaded={this.handleNavigation}
            yesIWantToUseGoogleMapApiInternals
            bootstrapURLKeys={{ key: "AIzaSyCfV_m5N06dCKzTUdXeUlJy6O5Va_0TbQ8"/* YOUR KEY HERE */ }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}>
            {/* <Marker lat={this.state.center.lat} lng={this.state.center.lng} /> marker not required, already have in the directions */}
          </GoogleMapReact>
        </div>
      );
    } else {
      
      return (
        
        <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">venture</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem><NavLink href="/choices">FR</NavLink></NavItem>
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
                <Label>A choose your own!</Label>
            </Col>

            <Row>
                <Col sm={{ size: 4, offset: 2 }}><Link to="/map"><img src="http://unsplash.it/200/300" alt="img1" /></Link></Col>
                <Col sm={{ size: 4 }}><Link to="/map"><img src="http://unsplash.it/200/300" alt="img2" /></Link></Col>
                {/*use the toggle button method in bootstrap to reveal more text*/}
                <Col sm={{ size: 2 }} />
            </Row>
        </Form>
    </div>
      
        
    )
      //the show button allows for the coordinates to render before the map load
      //<button onClick={() => { this.setState({ display: true }) }}>Show</button>
    }
  }
}