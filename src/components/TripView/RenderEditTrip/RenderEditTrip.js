import React from 'react'

export default function RenderEditTrip(trip) {
    return (
      <div className="edit-trip">
        <form onSubmit={(e) => trip.handleSubmitEditedTrip(e, trip.trip.id)}>
          <h2 className="trip-name">{trip.trip.destination}</h2>
          <br />
          <input
            defaultValue={trip.trip.short_description}
            name="short_description"
            maxLength={30}
            required
          ></input>
          <br />
          <input
            defaultValue={trip.trip.activities}
            name="activities"
            maxLength={40}
            required
          ></input>
          <br />

          <input
            defaultValue={trip.trip.days}
            type="number"
            min={0}
            name="days"
            max={99}
            required
          />
          <div className="edit-trip-button-container">
            <button
              className="tripViewButton"
              onClick={() => trip.toggleEditTrip}
            >
              Cancel
            </button>
            <button className="tripViewButton" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };