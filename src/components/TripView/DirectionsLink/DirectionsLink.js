import React, { Component } from 'react';
import './DirectionsLink.css';

class DirectionsLink extends Component {
  render() {
    const link = this.props.stops.map((stop, index) => {
      const stopName = stop.stop_name.replace(' ', '+');
      const stopCity = stop.city.replace(' ', '+');
      const stopState = stop.state.replace(' ', '+');
      if (index === 0 && this.props.stops.length < 3) {
        return `${stopName}+${stopCity}+${stopState}`;
      }
      if (index === 0 && this.props.stops.length > 2) {
        return `${stopName}+${stopCity}+${stopState}&waypoints=`;
      }
      if (index === this.props.stops.length - 1) {
        return `&destination=${stopName}+${stopCity}+${stopState}`;
      }
      if (index === this.props.stops.length - 2) {
        return `${stopName}+${stopCity}+${stopState}`;
      }
      return `${stopName}+${stopCity}+${stopState}%7C`;
    });
    return (
      <>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://www.google.com/maps/dir/?api=1&map_action=map&origin=${link.join(
            ','
          )}`}
        > <div>
                <div className="myButton nav-buttons getDirectionsBtn">Get Directions</div>
          </div>
        </a>
      </>
    );
  }
}

export default DirectionsLink;
