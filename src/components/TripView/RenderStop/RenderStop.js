import React from 'react';
import images from '../../../assets/images/images';

export default function RenderStop(props) {
  if (!props.stop.img) props.stop.img = images.no_camera;
  return (
    <div className="trip-stop-wrapper" key={props.stop.id}>
      <div className="trip-stop trip-div">
        <figcaption>
          {props.isTripCreator() && (
            <div className="tripView-button-wrapper">
              <button
                className="tripViewButton"
                onClick={() =>
                  props.toggleEditStop(props.stop.id, props.stop.category)
                }
              >
                Edit Stop
              </button>
              <button
                className="tripViewButton"
                onClick={() => props.handleDeleteStop(props.stop.id)}
              >
                Delete Stop
              </button>
            </div>
          )}
        </figcaption>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://www.google.com/maps/search/?api=1&query=${props.stop.stop_name}+${props.stop.city}+${props.stop.state}`}
        >
          <div className="trip-flex">
            <div className="trip-left">
              <img
                className="flikr-img"
                src={props.stop.img}
                alt={props.stop.stop_name}
              />
            </div>
            <div className="trip-right">
              <div
                className={
                  props.isTripCreator() ? 'trip-header-creator' : 'trip-header'
                }
              >
                <h2>{props.stop.stop_name}</h2>
                <span>
                  {props.stop.city}, {props.stop.state}
                </span>
                <br />
                <span className="trip-category">
                  <b>Category: </b>
                  {props.stop.category.replace('_', ' ')}
                </span>
              </div>
            </div>
            <div className="stop-description">{props.stop.description}</div>
          </div>
        </a>
      </div>
      <br />
      {props.index === props.stateStops.length - 1 ? null : props.index % 2 !==
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
