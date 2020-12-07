import React from 'react'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import TripContext from '../contexts/TripContext'

describe(`ErrorBoundary component`, () => {
    it('Renders without crashing', () => {
        shallow(
        <TripContext.Provider>
            <ErrorBoundary />
        </TripContext.Provider>
        )
    })
    it('Matches snapshot', () => {
        const wrapper =  shallow(
        <TripContext.Provider>
        <ErrorBoundary />
        </TripContext.Provider>
        )
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})