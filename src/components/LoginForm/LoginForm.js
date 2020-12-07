import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';
import './LoginForm.css';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static contextType = UserContext;

  state = { error: null };

  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { username, password } = ev.target;

    this.setState({ error: null });
    this.props.setLoading(true);
    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = '';
        password.value = '';
        this.context.processLogin(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      })
      .finally(() => {
        this.props.setLoading(false);
      });
  };

  componentDidMount() {
    if (this.refs.firstInput) {
      this.firstInput.current.focus();
    }
  }

  render() {
    const { error } = this.state;
    return (
      <div className="form-wrapper">
        <form action="#" className="LoginForm" onSubmit={this.handleSubmit}>
          <div role="alert">{error && <p>{error}</p>}</div>
          <div>
            <Label htmlFor="login-username-input">Username</Label>
            <br />
            <Input
              ref={this.firstInput}
              id="login-username-input"
              name="username"
              required
            />
          </div>
          <div>
            <Label htmlFor="login-password-input">Password</Label>
            <br />
            <Input
              id="login-password-input"
              name="password"
              type="password"
              required
            />
          </div>
          <br />
          <div className="button-wrapper">
            <Button className="myButton" type="submit">
              Login
            </Button>
          </div>
        </form>
        <br />
        <div style={{ fontSize: '16px' }}>
          <center>
            <p>
              <b>Demo User:</b>
              <br />
              Username: John Rambo
              <br />
              Password: password{' '}
            </p>
          </center>
        </div>
      </div>
    );
  }
}

export default LoginForm;
