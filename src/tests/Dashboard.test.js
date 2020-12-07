import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import { shallow } from 'enzyme'
import TripContext from '../contexts/TripContext'
import toJson from 'enzyme-to-json'

describe(`Dashboard component`, () => {
    it('Renders without crashing', () => {
        shallow(
            <TripContext.Provider>
                <Dashboard />
            </TripContext.Provider>
        )
    })
    it('Matches snapshot', () => {
        const wrapper =  shallow(
        <TripContext.Provider>
        <Dashboard />
        </TripContext.Provider>
        )
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})