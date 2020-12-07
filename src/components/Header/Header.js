import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import './Header.css';
import images from '../../assets/images/images';

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div>
        <nav>
          <Link onClick={this.handleLogoutClick} to="/login">
            Logout
          </Link>
          <br />
          <span>{this.context.user.username}</span>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <nav>
        <Link to="/login">Login</Link> | <Link to="/register">Sign up</Link>
      </nav>
    );
  }

  render() {
    return (
      <header>
        <div>
        <span>
          <img src={images.map} alt="small globe" />
        </span>
        <h1>
          <Link to="/dashboard">Ways!</Link>
        </h1>
        {this.props.loading && (
          <img
          className="loading-img"
          src={images.loading}
          alt="loading icon"
          />
          )}
          </div>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header;
