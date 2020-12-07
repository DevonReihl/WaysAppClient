import React, { Component } from 'react';
import TripViewEditSelect from '../TripViewEditSelect.js/TripViewEditSelect';
import TripContext from '../../../contexts/TripContext';
import images from '../../../assets/images/images';

class EditStopForm extends Component {
  static contextType = TripContext;

  render() {
    const id = this.props.stop.id;
    return (
      <div className="trip-stop-wrapper">
        <div className="trip-stop edit-stop" key={this.props.index}>
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
          <form
            action="#"
            id="EditStopForm"
            onSubmit={(e) => this.props.handleSubmitEditStop(e, id)}
          >
            <div className="trip-header">
              <div>
                <input
                  defaultValue={this.props.stop.stop_name}
                  name="stop_name"
                  id="edit_stop_name"
                  aria-label="stop_name"
                  maxLength={40}
                  required
                />{' '}
              </div>
              <input
                defaultValue={this.props.stop.city}
                name="city"
                aria-label="city"
                maxLength={40}
                required
              />
              <br />
              <input
                defaultValue={this.props.stop.state}
                name="state"
                aria-label="state"
                maxLength={40}
                required
              />
            </div>
            {this.props.error && (
              <>
                <br />
                {this.props.error}
                <br />
                <br />
              </>
            )}
            <TripViewEditSelect
              handleSelect={this.props.handleSelect}
              clearSelections={this.props.clearSelections}
              selections={this.props.selections}
            />
            <input
              defaultValue={this.props.stop.description}
              name="description"
              aria-label="description"
              maxLength={400}
              required
            />
            {this.props.isTripCreator() && (
              <div className="tripView-button-wrapper">
                <button
                  className="tripViewButton"
                  onClick={() => this.props.toggleEditStop(0)}
                >
                  Cancel
                </button>
                <button className="tripViewButton" type="submit">
                  Submit
                </button>
              </div>
            )}
          </form>
        </div>
        <br />
        {this.props.index === this.props.stops.length - 1 ? null : this.props
            .index %
            2 !==
          0 ? (
          <img
            className="road-img"
            src={images.road_a}
            alt="road illustration"
          ></img>
        ) : (
          <img
            className="road-img"
            src={images.road_b}
            alt="road illustration"
          ></img>
        )}
      </div>
    );
  }
}

export default EditStopForm;
