import React from 'react';
import TripView from '../components/TripView/TripView';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import TripContext from '../contexts/TripContext';

describe(`TripView component`, () => {
  it('Renders without crashing', () => {
    shallow(
      <TripContext.Provider>
        <div id="root" name="root">
          <TripView match={{ params: { trips_id: 1 } }} />
        </div>
      </TripContext.Provider>
    );
  });
  it('Matches snapshot', () => {
    const wrapper = shallow(
      <TripContext.Provider>
        <TripView match={{ params: { trips_id: 1 } }} />
      </TripContext.Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
