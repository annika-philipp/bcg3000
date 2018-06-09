import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import Welcome from '../../client/components/Welcome'


test('Text renders on Welcome', () => {
  const wrapper = shallow(<Welcome />)
  expect(wrapper.find('h3').first().text()).toBe('Welcome to 6 weeks')
  expect(wrapper.find('h3').last().text()).toBe('of fun...')
})

test('Button text renders on Welcome', () => {
  const wrapper = shallow(<Welcome />)
  expect(wrapper.find('button').text()).toBe('Start Game')
})
