import React, { Component } from 'react';
import './App.css';

import GoogleMapReact from 'google-map-react';

import 'react-notifications/lib/notifications.css';

export default class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {
        lat: 99.95,
        lng: -10.33
      },
      zoom: 16,
      display: false
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((s) => {
      this.setState({ center: { lat: s.coords.latitude, lng: s.coords.longitude } })
    })
  }
  render() {
    console.log(this.state)
    if (this.state.display === true) {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCfV_m5N06dCKzTUdXeUlJy6O5Va_0TbQ8"/* YOUR KEY HERE */ }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}>
          </GoogleMapReact>
        </div>
      );
    } else {
      return (<button onClick={() => { this.setState({ display: true }) }}>Show</button>)
      //the show button allows for the coordinates to render before the map load
    }
  }
}