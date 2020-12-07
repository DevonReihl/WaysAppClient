import React from 'react'
import MyTrips from '../components/MyTrips/MyTrips.js'
import { shallow } from 'enzyme'
import TripContext from '../contexts/TripContext'
import toJson from 'enzyme-to-json'


describe(`MyTrips component`, () => {
    it('Renders without crashing', () => {
        shallow(
        <TripContext.Provider>
            <MyTrips />
         </TripContext.Provider>
        )
    })
    it('Matches snapshot', () => {
        const wrapper =  shallow(
        <TripContext.Provider>
        <MyTrips />
        </TripContext.Provider>
        )
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})