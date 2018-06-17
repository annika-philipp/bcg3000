import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import App from '../../client/components/App'
import Welcome from '../../client/components/Welcome'
import AddScore from '../../client/components/AddScore'
import GameOver from '../../client/components/GameOver'
import Display from '../../client/components/Display'

test('Test suite working', () => {
  expect(true).toBeTruthy
})

test('h1 text renders on App', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('h1').text()).toBe('BCG 3000')
})

// Initial State
test('initial state returns correctly', () => {
  const expected = {
    totalscore: 0,
    topScores: [],
    questions: [],
    currentQuestionObject: null,
    index: 0,
    beforeGame: true,
    gamePlaying: false,
    gameOver: false,
    isPositiveScore: true,
    isTopScore: false,
    scoreIncreased: true
  }
  const wrapper = shallow(<App />)
  const actual = wrapper.instance().state
    expect(actual).toEqual(expected)
})

// Welcome renders with initial state
test('render <Welcome /> component', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find(Welcome)).toHaveLength(1)
})

test('AddScore component gets rendered instead of Welcome', () => {
  const initialState = {
    totalscore: 0,
    topScores: [],
    questions: [],
    currentQuestionObject: null,
    index: 0,
    beforeGame: false,
    gamePlaying: false,
    gameOver: true,
    isPositiveScore: true,
    isTopScore: false,
    scoreIncreased: true
  }

  // using mount (instead of shallow in here actually brings my test of Welcome to 100! including line 4 - why?
  const wrapper = mount(<App />)
    wrapper.instance().render = () => <div></div>
    wrapper.instance().state = initialState

    // check for the below. I define actuat but then don't use it in my expect?!?
  const actual = wrapper.instance().state  
    expect(wrapper.find(AddScore)).toBeTruthy()
})

// when state gamePlaying is false and gameOver is true GameOver component gets called

test('GameOver component gets rendered instead of Welcome', () => {
  const initialState = {
    totalscore: 0,
    topScores: [],
    questions: [{}, {}],
    currentQuestionObject: null,
    index: 0,
    beforeGame: false,
    gamePlaying: false,
    gameOver: true,
    isPositiveScore: false,
    isTopScore: false,
    scoreIncreased: true
  }

  // using mount (instead of shallow in here actually brings my test of Welcome to 100! including line 4 - why?
  const wrapper = shallow(<App />)
    wrapper.instance().render = () => <div></div>
    wrapper.instance().state = initialState

  const actual = wrapper.instance().state  
    expect(wrapper.find(GameOver)).toBeTruthy()
})

//test that GameOver gets passed the right props (resetGame) ?


// --- Display tests which as opposed to GameOver requires isPositiveScore to be true
// no matter how I change this it has no effect on the test coverage relating to Display

test('Display component gets rendered instead of Welcome', () => {
  const initialState = {
    totalscore: 10,
    topScores: [],
    questions: [{}, {}],
    currentQuestionObject: null,
    index: 1,
    beforeGame: false,
    gamePlaying: false,
    gameOver: true,
    isPositiveScore: true,
    isTopScore: false,
    scoreIncreased: true
  }

  // using mount (instead of shallow in here actually brings my test of Welcome to 100! including line 4 - why?
  const wrapper = mount(<App />)
    wrapper.instance().render = () => <div></div>
    wrapper.instance().state = initialState

  const actual = wrapper.instance().state  
    expect(wrapper.find(Display)).toBeTruthy()
})