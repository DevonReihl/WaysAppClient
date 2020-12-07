import React, { Component } from 'react';
import TripViewSelect from '../TripViewSelect/TripViewSelect';
import TripContext from '../../../contexts/TripContext';
import images from '../../../assets/images/images';

class AddStopForm extends Component {
  static contextType = TripContext;

  render() {
    return (
      <div>
        {this.context.loading && (
          <div className="bufffer-img-wrapper ">
            <img
              className="buffer-img"
              src={images.img_loading}
              alt="a plane flying over hearts loading gif"
            />
            <div className="fade-out-screen"></div>
          </div>
        )}
        <img
          className="road-img"
          src={images.road_a}
          alt="road illustration"
        ></img>
        <form
          onKeyDown={(e) => {
            if (e.key === 'Enter') e.preventDefault();
          }}
          className="addStopForm"
          onSubmit={this.props.handleSubmitStop}
        >
          <h2>Add Stop</h2>
          <br />
          <label htmlFor="stop_name">
            Name of the most significant place on this stop!
          </label>
          <input
            placeholder="Grand Canyon, Ceasar's Casino, Time's Square"
            type="text"
            name="stop_name"
            required
            maxLength={40}
          />
          <label htmlFor="city">City or Area</label>
          <input
            placeholder="New York, Las Vegas"
            type="text"
            name="city"
            required
            maxLength={40}
          />
          <label htmlFor="state">State or Country</label>
          <input
            placeholder="NY, NV, PA"
            type="text"
            name="state"
            required
            maxLength={40}
          />
          {this.props.error && (
            <>
              <br />
              {this.props.error}
              <br />
              <br />
            </>
          )}
          <label htmlFor="category">What category of stop is this?</label>
          <br />
          <TripViewSelect
            handleSelect={this.props.handleSelect}
            clearSelections={this.props.clearSelections}
            selections={this.props.selections}
          />
          <br />
          <label htmlFor="description">
            Describe the experience to expect here:
          </label>
          <input
            placeholder="A fun day shopping or the best hiking in the world!"
            type="text"
            name="description"
            required
            maxLength={400}
          />
          <button
            className="tripViewButton"
            type="button"
            onClick={(e) => this.props.toggleAddStop(e)}
          >
            Cancel
          </button>
          <button className="tripViewButton" type="submit">
            Submit!
          </button>
        </form>
      </div>
    );
  }
}

export default AddStopForm;
