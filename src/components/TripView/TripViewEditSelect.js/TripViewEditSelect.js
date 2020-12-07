import React from 'react';
import './TripViewEditSelect.css';

export default class TripViewEditSelect extends React.Component {
  render() {
    return (
      <>
        <div
          onClick={(e) => this.props.handleSelect(e)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') this.props.handleSelect(e);
          }}
          name="category"
          className="select-edit"
          multiple
        >
          <div tabIndex={0}>Amusement Park</div>
          <div tabIndex={0}>Bakery</div>
          <div tabIndex={0}>Bank</div>
          <div tabIndex={0}>Bar</div>
          <div tabIndex={0}>Book Store</div>
          <div tabIndex={0}>Bakery</div>
          <div tabIndex={0}>Cafe</div>
          <div tabIndex={0}>Clothing Store</div>
          <div tabIndex={0}>Convenience Store</div>
          <div tabIndex={0}>Department Store</div>
          <div tabIndex={0}>Drugstore</div>
          <div tabIndex={0}>Electronics Store</div>
          <div tabIndex={0}>Hospital</div>
          <div tabIndex={0}>Jewelry Store</div>
          <div tabIndex={0}>Movie Theater</div>
          <div tabIndex={0}>National Park</div>
          <div tabIndex={0}>Night Club</div>
          <div tabIndex={0}>Park</div>
          <div tabIndex={0}>Pharmacy</div>
          <div tabIndex={0}>Primary School</div>
          <div tabIndex={0}>Restaurant</div>
          <div tabIndex={0}>Secondary School</div>
          <div tabIndex={0}>Shoe Store</div>
          <div tabIndex={0}>Shopping Mall</div>
          <div tabIndex={0}>Stadium</div>
          <div tabIndex={0}>Supermarket</div>
          <div tabIndex={0}>Tourist Attraction</div>
          <div tabIndex={0}>University</div>
        </div>
        <button
          type="button"
          className="tripViewButton"
          onClick={() => this.props.clearSelections()}
          onKeyDown={(e) => {
            if (e.key === 'Enter') this.props.clearSelections();
          }}
        >
          Clear Selections
        </button>
        <br />
        <div className="select-box">
          {this.props.selections.map((select, index) => (
            <span key={index}>
              <span>{select}</span>
            </span>
          ))}
        </div>
      </>
    );
  }
}
