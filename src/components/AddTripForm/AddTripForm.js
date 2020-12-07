import React from 'react';
import TripService from '../../services/trip-service';
import TripContext from '../../contexts/TripContext';
import images from '../../assets/images/images';
import PlaceSearch from '../PlaceSearch/PlaceSearch';
import './AddTripForm.css';
import SelectCountries from './SelectCountries/SelectCountries';

export default class AddTripForm extends React.Component {
  state = {
    short_description: 'Times Square',
    activities: 'Shopping',
    days: 2,
    destination: 'New York, NY',
    place: { place: 'New York', coordinates: { lng: null, lat: null } },
    countryCode: 'us',
    error: null,
    images: [
      'city',
      'nightlife',
      'hiking',
      'mountain',
      'restaurant',
      'countryside',
      'amusementpark',
    ],
    imagesScroll: 0,
    placesTouched: false,
  };

  static contextType = TripContext;

  handleSelectCountries = (e) => {
    const country = e.currentTarget.value;
    this.setState({
      countryCode: country.slice(-2, country.length),
      place: { place: 'New York', coordinates: { lng: null, lat: null } },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { short_description, country, days, activities } = e.target;
    this.setState({
      error: null,
      country: country.value.slice(-2, country.value.length),
    });
    if (
      !this.state.place.coordinates.lng ||
      !this.state.place.coordinates.lat
    ) {
      this.setState({ error: 'Must select a real place from dropdown list.' });
      return;
    }

    let trip = {
      destination: this.state.place.place,
      short_description: short_description.value,
      long: this.state.place.coordinates.lng,
      lat: this.state.place.coordinates.lat,
      days: days.value,
      activities: activities.value,
      img: this.state.images[this.state.imagesScroll],
    };
    let currentTrips = this.context.trips;
    TripService.postTrip(trip)
      .then((res) => {
        this.context.setTrips([res, ...currentTrips]);
        this.props.history.push('/my-trips');
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  resetPlace = () => {
    this.context.setLoading(false);
  };

  storePlace = (place) => {
    if (this.state.place.coordinates.lng || this.state.place.coordinates.lat) {
      this.context.setLoading(false);
    } else {
      this.context.setLoading(true);
    }

    this.setState({
      place: place,
    });
  };

  handleScrollRight = () => {
    if (this.state.imagesScroll === this.state.images.length - 1) {
      this.setState({ imagesScroll: 0 });
    } else {
      this.setState({ imagesScroll: this.state.imagesScroll + 1 });
    }
  };

  handleScrollLeft = () => {
    if (this.state.imagesScroll === 0) {
      this.setState({ imagesScroll: 6 });
    } else {
      this.setState({ imagesScroll: this.state.imagesScroll - 1 });
    }
  };

  shortifyDestination = (dest) => {
    dest = dest.split(',');
    return dest[0];
  };

  render() {
    return (
      <>
        <section className="addTripSection">
          <div>
            <h2>Plan your Perfect Trip</h2>
            {this.state.error && <center>{this.state.error}</center>}
            <form
              className="addTripForm"
              id="addTripForm"
              action="#"
              onSubmit={this.handleSubmit}
            >
              <div className="placeSearch">
                <div className="selectDestination">
                  <label htmlFor="location-box">Destination:</label>
                  <PlaceSearch
                    countryCode={this.state.countryCode}
                    storePlace={this.storePlace}
                    resetPlace={this.resetPlace}
                  />
                </div>
                <div className="selectCountry">
                  <SelectCountries
                    handleSelectCountries={this.handleSelectCountries}
                  />
                </div>
              </div>
              <br />
              <label htmlFor="short_description">
                Type in a short description of your trip!
              </label>
              <input
                maxLength={30}
                onChange={(e) =>
                  this.setState({ short_description: e.target.value })
                }
                placeholder={'New York Shopping, Backpacking through Europe!'}
                type="text"
                name="short_description"
                id="short_description"
                required
              />
              <br />
              <label htmlFor="activities">
                What kind of activities do you plan to do on your trip?
              </label>
              <input
                onChange={(e) => this.setState({ activities: e.target.value })}
                type="text"
                name="activities"
                id="activities"
                placeholder={'Shopping, Sight-seeing, Gnoshing...'}
                maxLength={40}
                required
              />
              <br />
              <div className="trip-rating-days">
                <label htmlFor="days">
                  How many days does your trip take to complete?
                </label>
                <input
                  onChange={(e) => this.setState({ days: e.target.value })}
                  placeholder={1}
                  type="number"
                  id="days"
                  name="days"
                  max={99}
                  min={1}
                  required
                />
              </div>
              <br />
              <div className="TripCardDemo-wrapper">
                <img
                  onClick={this.handleScrollLeft}
                  src={images.arrow_left}
                  alt="left arrow"
                />
                <div className="TripCard TripCardDemo">
                  <div>
                    <div className="TripCard-topimage">
                      <img
                        src={images[this.state.images[this.state.imagesScroll]]}
                        alt="city skyline"
                      ></img>
                    </div>
                    <div className="TripCard-middle-section demo-middle">
                      <div className="TripCard-title">
                        {this.state.place.place.length > 32 ? (
                          <h2>
                            {this.shortifyDestination(this.state.place.place)}
                          </h2>
                        ) : (
                          <h2>{this.state.place.place}</h2>
                        )}

                        <span>{this.state.short_description}</span>
                      </div>
                      <div className="Activities">
                        <p>
                          Activities: <br />
                          {this.state.activities}
                        </p>
                      </div>
                    </div>
                    <div className={`TripCard-bottom-demo blue`}>
                      <div className="TripCard-bottom-info-demo">
                        Days {this.state.days} | Rating <span>N\A</span>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  onClick={this.handleScrollRight}
                  src={images.arrow_right}
                  alt="right arrow"
                />
              </div>
              <br />
              <div className="button-wrapper">
                <button className="myButton addTripButton" type="submit">
                  Submit!
                </button>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}
