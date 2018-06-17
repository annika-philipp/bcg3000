import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import AddScore from '../../client/components/AddScore'
import ScoreBoard from '../../client/components/Scoreboard'

test('Test suite working', () => {
  expect(true).toBeTruthy
})

// Initial State
test('initial state returns correctly', () => {
  const totalscore = 100
  const isTopScore = true
  const topScores = [
    {score: 100, name: 'Ben'},
    {score: 110, name: 'Maddy'}
  ]
  const props = {
    totalscore, isTopScore, topScores
  }

  const expected = {
    name: '',
    score: totalscore,
    isTopScore: isTopScore
  }
  
  const wrapper = shallow(<AddScore {...props} />)
  const actual = wrapper.instance().state
    expect(actual).toEqual(expected)
})

test('Text renders on AddScore', () => {
  const topScores = [
    {score: 100, name: 'Ben'},
    {score: 110, name: 'Maddy'}
  ]
  const wrapper = shallow(<AddScore topScores={topScores} />)
  expect(wrapper.find('h3').first().text()).toBe('Well done!')
  expect(wrapper.find('h3').last().text()).toBe('Deploy yourself into phase 3')
})

test('handleChange adds to state', () => {
  const topScores = [
    {score: 100, name: 'Ben'},
    {score: 110, name: 'Maddy'}
  ]

  const initialState = {
    name: ''
  }
  const testEvent = {
    target: {
      name: 'name',
      value: 'Ben'
    }
  }
  const expected = {
    name: testEvent.target.value
  }

  const wrapper = shallow(<AddScore topScores={topScores}/>)
  wrapper.instance().render = () => <div></div>
  wrapper.instance().state = initialState
  wrapper.instance().handleChange(testEvent)

  const actual = wrapper.instance().state
  expect(actual).toEqual(expected)
})

test('render <ScoreBoard /> component', () => {
  const topScores = [
    {score: 100, name: 'Ben'},
    {score: 110, name: 'Maddy'}
  ]
  const wrapper = shallow(<AddScore topScores={topScores} />)
  expect(wrapper.find(ScoreBoard)).toHaveLength(1)
})
