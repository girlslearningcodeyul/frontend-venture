import React, { Component } from 'react';
//import markerImg from './images/marker.png' markerImg not required
import GoogleMapReact from 'google-map-react';
//import styled from 'styled-components'; not required for the marker

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
  DropdownItem
} from 'reactstrap';

import mapTheme from './mapTheme'

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      center: null,
      isOpen: false,
      zoom: 15,
      display: false,
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getGeoLocation() {
    navigator.geolocation.getCurrentPosition((s) => {
      this.setState({ center: { lat: s.coords.latitude, lng: s.coords.longitude } })
    })
  }

  componentDidMount() {
    this.getGeoLocation();
  }

  generateNext = () => {
    console.log(this.props.step);
    if (this.props.step === 0) {
      //console.log(this.props.sessionId);
      fetch('/getSecondActivity?sessionId=' + this.props.sessionId)
        .then(response => response.text())
        .then(responseBody => {
          let parsedBody = JSON.parse(responseBody);
          console.log(parsedBody);
          console.log("above this line is the parsed body of the second activity");
          this.props.setInterests({
            firstInterest: parsedBody.secondTwoInterests[0],
            secondInterest: parsedBody.secondTwoInterests[1],
          });
          this.props.historyPush('/choices', this.props.step + 1);
        })
    }
    else if (this.props.step === 1) {
      //restaurant options
      fetch('/getThirdActivity?sessionId=' + this.props.sessionId)
        .then(response => response.text())
        .then(responseBody => {
          let parsedBody = JSON.parse(responseBody);
          console.log(parsedBody);
          console.log("above this line is the parsed body of the resto options");

          //add a condition here that checks that the restos acually exist and if not
          if (parsedBody.restos) {
            this.props.setInterests({
              firstInterest: parsedBody.restos[0],
              secondInterest: parsedBody.restos[1]
            });
          }
          else if (parsedBody) {
            this.props.setInterests({
              firstInterest: parsedBody[0],
              secondInterest: parsedBody[1]
            });
          }
          this.props.historyPush('/choices', this.props.step + 1);
        })

    }
    else if (this.props.step === 2) {
      fetch('/getFourthActivity?sessionId=' + this.props.sessionId)
        .then(response => response.text())
        .then(responseBody => {
          let parsedBody = JSON.parse(responseBody);
          console.log(parsedBody);
          console.log("above this line is the parsed body of the last activity");
          this.props.setInterests({
            firstInterest: parsedBody.lastTwoInterests[0],
            secondInterest: parsedBody.lastTwoInterests[1],
          });
          this.props.historyPush('/choices', this.props.step + 1);
        })
    }
  }

  handleNavigation = ({ map, maps }) => {
    var styledMapType = new maps.StyledMapType(mapTheme)
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    let directionsService = new maps.DirectionsService();
    let directionsDisplay = new maps.DirectionsRenderer({
      suppressMarkers: true
    });
    let origin = new maps.LatLng(this.state.center.lat, this.state.center.lng);
    let destination = new maps.LatLng(this.props.lat, this.props.lng);

    directionsDisplay.setMap(map);

    //destination marker setup
    let destinationMarker = new maps.Marker({
      position: destination,
      animation: maps.Animation.DROP,
      //      clickable: true,
      map: map,
      label: "",
      cursor: 'default',
    });

    map.addListener('click', function () {
      infowindow.open(map, destinationMarker);
    });

    //origin marker setup
    let originMarker = new maps.Marker({
      position: origin,
      clickable: false,
      icon: new maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
        new maps.Size(22, 22),
        new maps.Point(0, 18),
        new maps.Point(11, 11)),
      shadow: null,
      zIndex: 999,
      map: map
    });

    //setting up the destination location on click
    //add an actual address of the location

    let content;

    if(this.props.randomAdventure) {
      content = this.props.randomAdventure.address;
      console.log(this.props.randomAdventure.address)
    }
    else if (this.props.firstInterest.coordinates && this.props.lat === this.props.firstInterest.coordinates.lat && this.props.lng === this.props.firstInterest.coordinates.long) {
      content = this.props.firstInterest.address;
    }
    else {
      content = this.props.secondInterest.address;
    }

    //add a condition to see which interest option the user selected
    let infowindow = new maps.InfoWindow({
      content: content
    });

    //setting up the directions display
    var request = {
      origin: origin,
      destination: destination,
      travelMode: 'WALKING', //Could also be DRIVING , BICYCLING , TRANSIT
    };

    directionsService.route(request, function (result, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(result);
      }
    });
    this.directionsService = directionsService;
    this.directionsDisplay = directionsDisplay;

    // compute the total distances of that trip
    //getDistanceMatrix(request: DistanceMatrixRequest, 
    //callback: (response: google.maps.DistanceMatrixResponse, status: google.maps.DistanceMatrixStatus) => void)
  }

  render() {
    if (!this.state.center) {
      return <div>Loading...</div>
    }
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">venture</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>Options</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem><NavItem><NavLink href="/">Restart</NavLink></NavItem></DropdownItem>
                  {this.props.step <= 2 ?
                    <div>
                      <DropdownItem divider />
                      <DropdownItem onClick={this.generateNext}>Generate Next?</DropdownItem></div> : null}
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
          defaultZoom={this.state.zoom}
          options={{
            mapTypeControlOptions: {
              mapTypeIds: ['styled_map']
            }
          }} >
        </GoogleMapReact>
      </div>
    );
  }
}