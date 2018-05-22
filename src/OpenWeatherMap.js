import React from 'react';
import axios from 'axios';

class OpenWeatherMap extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      temp: null,
      description:null
    };
  }
  componentDidMount() {
    const { city, country, appid, units } = this.props;
    axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: `${city},${country}`,
        APPID: appid,
        units,
      },
    }).then((response) => {
      const { data } = response;
      this.setState({ name: data.name, temp: data.main.temp, description: data.weather[0].description });
    });
  }
  render() {
    const { name, temp, description } = this.state;
    return (
        <div className="weather-card">
            <h1>{temp}°C</h1>
            <p>{name},QC</p>
            <p>{description}</p>
        </div>
    );
  }
}

OpenWeatherMap.defaultProps = {
  city: 'Montréal',
  country: 'CA',
  appid: '03220cc666b6bef77c93ff9caddebac6',
  units: 'metric',
};
export default OpenWeatherMap;
