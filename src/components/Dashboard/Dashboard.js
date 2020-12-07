import React from 'react';
import { Link } from 'react-router-dom';
import TripContext from '../../contexts/TripContext';
import TripCards from '../TripCards/TripCards';
import './Dashboard.css';

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      searchQuery: '',
      filteredTrips: [],
      resultsFound: true,
    };
  }

  static contextType = TripContext;

  setQuery = (e) => {
    let value = e.target.value;
    this.setState(
      {
        filteredTrips: this.context.trips.filter((trip) => {
          return (
            trip.destination.toLowerCase().includes(value.toLowerCase()) ||
            trip.short_description
              .toLowerCase()
              .includes(value.toLowerCase()) ||
            trip.activities.toLowerCase().includes(value.toLowerCase())
          );
        }),
      },
      () => {
        // if else statement to determine if search results are populated
        if (this.state.filteredTrips.length > 0)
          this.setState({ resultsFound: true });
        else {
          this.setState({ resultsFound: false });
        }
      }
    );
  };

  render() {
    let tripsToMap = [];
    if (this.state.filteredTrips.length > 0) {
      tripsToMap = this.state.filteredTrips;
    } else {
      tripsToMap = this.context.trips;
    }
    let tripCards = tripsToMap.map((trip, index) => {
      return (
        <TripCards
          key={trip.id}
          id={trip.id}
          index={index}
          days={trip.days}
          rating={trip.rating}
          destination={trip.destination}
          activities={trip.activities}
          short_description={trip.short_description}
          image={trip.img}
        />
      );
    });
    return (
      <section className="Dashboard">
        <div className="upperSection">
          <div className="addTripButton">
            <Link to="/add-trip">
              <div className="flex">
                <div className="bttn">Add Trip</div>
              </div>
            </Link>
          </div>
          <div className="tripSearchBar">
            <label htmlFor="tripSearchBar">Search Bar</label>
            <input
              type="text"
              placeholder={'Search for a destination...'}
              name="tripSearchBar"
              id="tripSearchBar"
              onChange={(e) => {
                this.setQuery(e);
              }}
            ></input>
          </div>
          <div className="myTripButton">
            <Link to="/my-trips">
              <div className="flex">
                <div className="bttn">My Trips</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="lowerSection">
          {this.state.resultsFound ? tripCards : 'no results! search again!'}
        </div>
      </section>
    );
  }
}
