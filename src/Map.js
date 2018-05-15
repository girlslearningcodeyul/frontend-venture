import React, { Component } from 'react';
import './App.css';
import markerImg from './images/marker.png'
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

import 'react-notifications/lib/notifications.css';
// let x = 67;
//`dfghjk${8}` -> exmple of a template string equivalent to 'dfghjkl' + 8

let Marker = styled.div`
  background-image: url(${markerImg});
  width: ${(props) => props.isBig ? '60px' : '30px'};
  height:30px;
  background-size:cover;
`;

export default class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {
        lat: 99.95, //source latitude
        lng: -10.33, //source longitude
        latD: 99.95, //destination latitude
        lngD: -10.33 //destination longitude
      },
      zoom: 15,
      display: false
    }
  }


  componentDidMount() {
    navigator.geolocation.getCurrentPosition((s) => {
      this.setState({ center: { lat: s.coords.latitude, lng: s.coords.longitude } })
    })
  }
  handleNavigation = ({ map, maps }) => {
    var directionsService = new maps.DirectionsService();
    var directionsDisplay = new maps.DirectionsRenderer();
    let origin = new maps.LatLng(this.state.center.lat, this.state.center.lng);
    let destination = new maps.LatLng(this.state.center.latD, this.state.center.lngD);
    directionsDisplay.setMap(map);
    var request = {
      origin: origin,
      destination: destination,
      travelMode: 'WALKING'
    };
    directionsService.route(request, function(result, status) {
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
          <GoogleMapReact
            onGoogleApiLoaded={this.handleNavigation} 
            yesIWantToUseGoogleMapApiInternals
            bootstrapURLKeys={{ key: "AIzaSyCfV_m5N06dCKzTUdXeUlJy6O5Va_0TbQ8"/* YOUR KEY HERE */ }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}>
            <Marker lat={this.state.center.lat} lng={this.state.center.lng} />
          </GoogleMapReact>
        </div>
      );
    } else {
      return (<button onClick={() => { this.setState({ display: true }) }}>Show</button>)
      //the show button allows for the coordinates to render before the map load
    }
  }
}