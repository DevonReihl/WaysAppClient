import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets/images/images';
import './LandingPage.css';
import Airplane from '../../assets/images/airplane.png';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page-container-1">
        <div className="background-image">
          <img
            className="landing-page-background"
            src={images.Background}
            alt="plane soaring through sky"
          />
        </div>
        <div className="landing-page-container">
          <div className="background">
            <div className="ways-header">
              <p>Ways!</p>
            </div>
            <div className="airplane-bg">
              <img
                className="airplane-bg zoom"
                src={Airplane}
                alt="airplane taking off"
              />
            </div>
          </div>

          <section className="landing-page">
            <div className="wrapper">
              <div className="one longFade">
                <i className="fas fa-plane-departure xl fa-2x"></i>
                <hr />
                <p>Our goal is getting your vacay off the ground!</p>
              </div>
              <div className="two what-to-do longFade">
                <i className="fas fa-hotel fa-2x"></i>
                <hr />
                <p>
                  Find places to visit, or add places you know to help others!
                </p>
              </div>

              <div className="three call-to-action longFade">
                <i className="fas fa-car fa-2x"></i>
                <hr />
                <p>Plan out every stop, or take a trip another user added!</p>
              </div>
            </div>
            <div className="linkToDashButton">
              <Link to="/dashboard">
                <div className="myButton lets-go-btn">Let's Go!</div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
