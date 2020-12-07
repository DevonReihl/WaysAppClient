import React from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`LoginForm component`, () => {
    it('Renders without crashing', () => {
        shallow(<LoginForm />)
    })
    it('Matches snapshot', () => {
        const wrapper =  shallow(
        <LoginForm />
        )
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})