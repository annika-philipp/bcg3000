import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import GameOver from '../../client/components/GameOver'

test('Test suite working', () => {
  expect(true).toBeTruthy
})

test('Text renders on GameOver', () => {
  const wrapper = shallow(<GameOver />)
  expect(wrapper.find('h3').first().text()).toBe('GAME OVER')
  expect(wrapper.find('h3').last().text()).toBe('Consult your nearest handbook...')
})

test('Button text renders on GameOver', () => {
  const wrapper = shallow(<GameOver />)
  expect(wrapper.find('button').text()).toBe('Play again')
})