import React from 'react';
import AddTripForm from '../components/AddTripForm/AddTripForm';
import { shallow } from 'enzyme';
import TripContext from '../contexts/TripContext';
import toJson from 'enzyme-to-json';

describe(`AddTripForm component`, () => {
  it('Renders without crashing', () => {
    shallow(
      <TripContext.Provider>
        <AddTripForm />
      </TripContext.Provider>
    );
  });
  it('Matches snapshot', () => {
    const wrapper = shallow(
      <TripContext.Provider>
        <AddTripForm />
      </TripContext.Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
