import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import TripContext from '../../contexts/TripContext';

class LoginRoute extends Component {
  static contextType = TripContext;
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { history } = this.props;
    history.push('/dashboard');
  };

  render() {
    return (
      <section className="auth-section">
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
          setLoading={this.context.setLoading}
        />
      </section>
    );
  }
}

export default LoginRoute;
