import React from 'react';
import Modal from 'react-modal';
import TripApiService from '../../services/trip-service';
import TripContext from '../../contexts/TripContext';
import TripViewNav from './TripViewNav/TripViewNav';
import RenderStop from './RenderStop/RenderStop';
import MapContainer from '../Map/Map';
import AddStopForm from './AddStopForm.js/AddStopForm';
import Helpers from '../../helpers/helpers';
import EditStopForm from './EditStopForm/EditStopForm';
import './TripView.css';
import images from '../../assets/images/images';
import RenderEditTrip from './RenderEditTrip/RenderEditTrip';

// Modal.setAppElement('#root');

export default class Trip extends React.Component {
  static contextType = TripContext;
  state = {
    stops: [],
    trip: [{ user_id: 0, short_description: 'Add a Stop!' }],
    currTripID: 0,
    tripDescription: '',
    toggleAddStop: false,
    stopEditingID: 0,
    toggleEditTrip: false,
    selections: [],
    error: null,
    userHasRated: false,
    isModalOpen: false,
  };

  componentDidMount() {
    const trip_id = this.props.match.params.trips_id;
    this.userHasRated();
    this.context.setLoading(true);
    TripApiService.getTrip(trip_id)
      .then((res) => {
        this.setState({ trip: res, currTripID: res.id });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      })
      .finally(() => {
        this.context.setLoading(false);
      });
    this.context.setLoading(true);
    TripApiService.getStops(trip_id)
      .then((res) => {
        this.setState({ stops: res });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      })
      .finally(() => {
        this.context.setLoading(false);
      });
  }

  toggleAddStop = () => {
    this.setState({ toggleAddStop: !this.state.toggleAddStop });
  };

  toggleEditStop = (stop_id, stop_categories) => {
    if (stop_id !== 0) {
      this.setState({
        stopEditingID: stop_id,
        selections: stop_categories.split(','),
      });
    } else {
      this.setState({
        stopEditingID: stop_id,
      });
    }
  };

  handleSelect = (e) => {
    let selection = e.target;
    selection = selection.innerHTML;
    const findSelect = this.state.selections.includes(selection);
    if (findSelect) {
      this.setState({
        selections: [
          ...this.state.selections.filter((select) => {
            return select !== selection;
          }),
        ],
      });
    } else {
      this.setState({ selections: [...this.state.selections, selection] });
    }
  };

  clearSelections = () => {
    this.setState({ selections: [] });
  };

  handleDeleteTrip = () => {
    this.context.setLoading(true);
    TripApiService.deleteTrip(this.state.trip[0].id)
      .then(() => {
        this.context.setTrips(
          this.context.trips.filter((trip) => trip.id !== this.state.trip[0].id)
        );
        this.props.history.push('/dashboard');
      })
      .catch((res) => {
        this.setState({ error: res.error });
      })
      .finally(() => {
        this.context.setLoading(false);
      });
  };

  handleEditTrip = () => {
    this.setState({ toggleEditTrip: true });
  };

  handleSubmitEditedTrip = (e, id) => {
    e.preventDefault();
    const { short_description, activities, days } = e.target;
    let trip = {
      short_description: short_description.value,
      activities: activities.value,
      days: days.value,
    };
    this.context.setLoading(true);
    TripApiService.patchTrip(trip, id)
      .then((res) => {
        let rating = this.state.trip[0].rating;
        res[0].rating = rating;
        this.setState({ trip: res });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      })
      .finally(() => {
        this.context.setLoading(false);
        this.setState({ toggleEditTrip: false });
      });
  };

  handleSubmitEditStop = async (e, stop_id) => {
    e.preventDefault();
    if (this.state.selections.length === 0) {
      this.setState({ error: 'Must select atleast 1 Category' });
      return;
    }
    this.setState({
      error: null,
      stopEditingID: 0,
    });
    const { stop_name, description, city, state } = e.target;
    let tripId = this.props.match.params.trips_id;
    let stop = {
      trip_id: tripId,
      longitude: 0.0,
      latitude: 0.0,
      city: city.value,
      state: state.value,
      stop_name: stop_name.value,
      description: description.value,
      category: this.state.selections.join(', '),
    };
    this.context.setLoading(true);
    const res = await Helpers.flickrApi(stop_name.value, city.value);
    stop.img = Helpers.generateFlikrLink(res);
    TripApiService.patchStop(stop, stop_id)
      .then((res) => {
        const stops = this.state.stops.filter((stop) => stop.id !== res.id);
        this.setState({
          stops: [...stops, res],
          selections: [],
        });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      })
      .finally(() => {
        this.context.setLoading(false);
      });
  };

  handleSubmitStop = async (e) => {
    e.preventDefault();
    if (this.state.selections.length === 0) {
      this.setState({ error: 'Must select atleast 1 Category' });
      return;
    }
    this.setState({ error: null });
    const { stop_name, description, city, state } = e.target;
    let tripId = this.props.match.params.trips_id;
    let stop = {
      trip_id: tripId,
      longitude: -32.77779,
      latitude: 46.888888,
      city: city.value,
      state: state.value,
      stop_name: stop_name.value,
      description: description.value,
      category: this.state.selections.join(', '),
    };
    this.context.setLoading(true);
    const res = await Helpers.flickrApi(stop_name.value, city.value);
    stop.img = Helpers.generateFlikrLink(res);
    TripApiService.postStop(stop)
      .then((res) => {
        this.setState({
          stops: [...this.state.stops, res],
          toggleAddStop: false,
          selections: [],
        });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      })
      .finally(() => {
        this.context.setLoading(false);
      });
  };

  handleRating = () => {
    const trip_id = this.props.match.params.trips_id;
    const user_id = this.context.returnUserID();
    const rate = 1;
    const rating = { trip_id, user_id, rate };
    if (user_id !== undefined) {
      TripApiService.postRating(rating)
        .then(() => {
          this.setState({
            trip: [
              {
                ...this.state.trip[0],
                rating: Number(this.state.trip[0].rating) + 1,
              },
            ],
            userHasRated: true,
          });
          this.context.setTripRating(trip_id);
        })
        .catch((res) => {
          this.setState({ error: res.error });
        });
    }
  };

  toggleModal = (boolean) => {
    this.setState({ isModalOpen: boolean });
  };

  userHasRated = () => {
    const trip_id = this.props.match.params.trips_id;
    const user_id = this.context.returnUserID();
    this.context.setLoading(true);
    if (user_id !== undefined) {
      TripApiService.checkUserHasRated(trip_id)
        .then((res) => {
          for (let i = 0; i < res.length; i++) {
            if (res[i].user_id === user_id) {
              this.setState({ userHasRated: true });
              this.context.setLoading(false);
              return;
            }
          }
        })
        .catch((res) => {
          this.setState({ error: res.error });
        })
        .finally(() => {
          this.context.setLoading(false);
        });
    }
  };

  isTripCreator = () => {
    let isTripCreator = this.context.verifyAuth(this.state.trip[0].user_id);
    return isTripCreator;
  };

  toggleEditTrip = () => {
    this.setState({ toggleEditTrip: false });
  };

  handleDeleteStop = (stop_id) => {
    TripApiService.deleteStop(stop_id)
      .then(() => {
        this.setState({
          stops: this.state.stops.filter((stop) => stop_id !== stop.id),
        });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const trip = this.state.trip[0];
    const stops = this.state.stops.map((stop, index) => {
      if (stop.id === this.state.stopEditingID) {
        return (
          <EditStopForm
            key={stop.id}
            handleSelect={this.handleSelect}
            clearSelections={this.clearSelections}
            selections={this.state.selections}
            handleSubmitEditStop={this.handleSubmitEditStop}
            toggleEditStop={this.toggleEditStop}
            isTripCreator={this.isTripCreator}
            stop={stop}
            index={index}
            stops={this.state.stops}
            error={this.state.error}
          />
        );
      }
      return (
        <RenderStop
          key={stop.id}
          stop={stop}
          index={index}
          toggleEditStop={this.toggleEditStop}
          isTripCreator={this.isTripCreator}
          handleDeleteStop={this.handleDeleteStop}
          stateStops={this.state.stops}
        />
      );
    });
    return (
      <section className="trip-view">
        <div className="trip">
          <div className="tripView-upperSection">
            <div className="trip-info">
              {this.state.toggleEditTrip ? (
                <RenderEditTrip
                  trip={trip}
                  toggleEditTrip={this.toggleEditTrip}
                  handleSubmitEditedTrip={this.handleSubmitEditedTrip}
                />
              ) : (
                <>
                  {!this.context.loading ? (
                    <span className="rating-container">
                      {!this.state.userHasRated ? (
                        <>
                          <Modal
                            isOpen={this.state.isModalOpen}
                            style={Helpers.customModalStyles}
                            contentLabel="Log in!"
                          >
                            <button
                              className="myButton"
                              onClick={() => this.toggleModal(false)}
                            >
                              Close
                            </button>
                            <h3>
                              <center>You must log in to heart a trip!</center>
                            </h3>
                          </Modal>
                          <button
                            className="like-btn"
                            onClick={() => {
                              if (!this.context.returnUserID())
                                this.toggleModal(true);
                              this.handleRating();
                            }}
                          >
                            <img
                              alt="unliked heart"
                              className="empty-heart heart"
                              src={images.EmptyHeart}
                            ></img>
                          </button>
                          <span className="trip-rating-digits">
                            {trip.rating}
                          </span>
                        </>
                      ) : (
                        <>
                          <button className="like-btn">
                            <img
                              alt="liked heart"
                              className="filled-heart heart"
                              src={images.FilledHeart}
                            ></img>
                          </button>
                          <span
                            className="trip-rating-digits"
                            style={{ verticalAlign: 'center' }}
                          >
                            {trip.rating}
                          </span>
                        </>
                      )}
                    </span>
                  ) : null}
                  <h2 className="trip-name">{trip.destination}</h2>
                  <p>{trip.short_description}</p>
                  <p>
                    <span>Activities:</span> {trip.activities} <br />
                    <span>Days:</span> {trip.days}
                  </p>
                </>
              )}
            </div>
            <div id="Map">
              <MapContainer trip={this.state.trip[0]} />
            </div>
          </div>
          <TripViewNav
            handleDeleteTrip={this.handleDeleteTrip}
            handleEditTrip={this.handleEditTrip}
            stops={this.state.stops}
            user_id={this.state.trip[0].user_id}
          />
          <div className="belowMap">
            {stops.length ? (
              stops
            ) : (
              <h4>
                This user hasn't added any stops yet! If this is your trip, add
                some by clicking the Add Stop button!
              </h4>
            )}
            {this.state.toggleAddStop && (
              <AddStopForm
                handleSubmitStop={this.handleSubmitStop}
                handleSelect={this.handleSelect}
                clearSelections={this.clearSelections}
                selections={this.state.selections}
                error={this.state.error}
                toggleAddStop={this.toggleAddStop}
              />
            )}
            {!this.state.toggleAddStop && this.isTripCreator() && (
              <div className="addStopButton">
                <br />
                <div
                  style={{ marginBottom: '20px' }}
                  className="myButton addStopBtn"
                  onClick={() => {
                    this.setState({ toggleAddStop: !this.state.toggleAddStop });
                  }}
                >
                  Add a Stop!
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}
