import React from 'react'
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'

describe(`RegistrationForm component`, () => {
    it('Renders without crashing', () => {
        shallow(<RegistrationForm />)
    })
    it('Matches snapshot', () => {
        const wrapper =  shallow(
        <RegistrationForm  />
        )
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})