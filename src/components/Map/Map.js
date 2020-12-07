import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './Map.css';
import images from '../../assets/images/images';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { lat: 47.49855629475769, lng: -122.14184416996333 },
        { latitude: 47.359423, longitude: -122.021071 },
        { latitude: 47.2052192687988, longitude: -121.988426208496 },
        { latitude: 47.6307081, longitude: -122.1434325 },
        { latitude: 47.3084488, longitude: -122.2140121 },
        { latitude: 47.5524695, longitude: -122.0425407 },
      ],

      currTrip: { lat: null },
    };
  }

  componentDidUpdate() {
    if (this.props.trip.user_id !== 0 && !this.state.currTrip === null) {
      this.setState({
        currTrip: this.props.trip,
      });
    }
  }

  render() {
    const { long } = this.state.currTrip;
    if (!this.props.trip.lat || !this.props.trip.long)
      return (
        <img
          className="loading-img-map"
          src={images.loading}
          alt="loading icon"
        />
      );

    return (
      <Map
        key={long}
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        containerStyle={containerStyle}
        initialCenter={{ lat: this.props.trip.lat, lng: this.props.trip.long }}
      ></Map>
    );
  }
}

const mapStyles = { height: '100%', position: 'relative' };

const containerStyle = {
  width: '100%',
  height: '400px',
  marginLeft: 0,
  position: 'relative',
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAqwvGJ4-Cdmo1KHAY-a8_CQpzcNPVRqY0',
})(MapContainer);
