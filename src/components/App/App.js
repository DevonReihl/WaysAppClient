import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute';
import TripContext from '../../contexts/TripContext';
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute';
import AddTripForm from '../AddTripForm/AddTripForm';
import TripView from '../TripView/TripView';
import MyTrips from '../MyTrips/MyTrips';
import TripApiService from '../../services/trip-service';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ScrollToTop from '../../helpers/ScrollToTop';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import Footer from '../Footer/Footer';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default class App extends Component {
  static contextType = TripContext;
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidMount = () => {
    this.context.setLoading(true);
    TripApiService.getTrips()
      .then((res) => {
        this.context.setTrips(res);
      })
      .catch((res) => this.setState({ error: res.error }))
      .finally(() => {
        this.context.setLoading(false);
      });
  };

  render() {
    const { hasError } = this.state;

    return (
      <div className="App">
        <Header loading={this.context.loading} />
        <main>
          {hasError && <p>There was an error! Oh no!</p>}
          <ErrorBoundary>
            <Switch>
              <ScrollToTop>
                <PrivateRoute
                  exact
                  path={'/add-trip'}
                  component={AddTripForm}
                />
                <PrivateRoute exact path={'/my-trips'} component={MyTrips} />
                <Route exact path={'/dashboard'} component={DashboardRoute} />
                <Route
                  path={'/trips/:trips_id'}
                  render={(props) => <TripView {...props} />}
                />
                <PublicOnlyRoute
                  path={'/register'}
                  component={RegistrationRoute}
                />
                <Route exact path={'/'} component={LandingPage} />
                <PublicOnlyRoute path={'/login'} component={LoginRoute} />
              </ScrollToTop>
              <Route component={NotFoundRoute} />
            </Switch>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    );
  }
}
