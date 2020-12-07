import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DirectionsLink from '../DirectionsLink/DirectionsLink';
import TripContext from '../../../contexts/TripContext';

import './TripViewNav.css';

class TripViewNav extends Component {
  static contextType = TripContext;

  render() {
    const creator = this.context.verifyAuth(this.props.user_id) || false;
    return (
      <section className="TripViewNav">
        {creator && (
          <>
            <button
              className="myButton nav-buttons"
              onClick={() => this.props.handleEditTrip()}
            >
              Edit Trip
            </button>{' '}
            <button
              onClick={() => this.props.handleDeleteTrip()}
              className="myButton nav-buttons"
            >
              Delete Trip
            </button>{' '}
            <Link to="/my-trips">
              <div className="myButton nav-buttons">My Trips</div>
            </Link>{' '}
          </>
        )}
        <DirectionsLink stops={this.props.stops} />
      </section>
    );
  }
}

export default TripViewNav;
