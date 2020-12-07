import React from 'react'
import TripCards from '../components/TripCards/TripCards'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import TripContext from '../contexts/TripContext'

describe(`TripCards component`, () => {
    it('Renders without crashing', () => {
        shallow(
            <TripContext.Provider>
                <TripCards />
            </TripContext.Provider>
        )
    })
    it('Matches snapshot', () => {
        const wrapper =  shallow(
        <TripContext.Provider>
        <TripCards />
        </TripContext.Provider>
        )
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})