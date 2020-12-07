import React from 'react'
import LandingPage from '../components/LandingPage/LandingPage'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`LandingPage component`, () => {
    it('Renders without crashing', () => {
        shallow(<LandingPage />)
    })
    it('Matches snapshot', () => {
        const wrapper =  shallow(
        <LandingPage />
        )
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})