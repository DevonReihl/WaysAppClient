import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import TripContext from '../../contexts/TripContext';

class RegistrationRoute extends Component {
  static contextType = TripContext;
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push('/login');
  };

  render() {
    return (
      <section className="auth-section">
        <h2>Sign up</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
          setLoading={this.context.setLoading}
        />
      </section>
    );
  }
}

export default RegistrationRoute;
