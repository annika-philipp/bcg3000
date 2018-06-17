import React from 'react'
import Enzyme, { shallow, mount, render, spyLifecycle } from 'enzyme'
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


// test('componentDidMount gets called', () => {
//   const spy = jest.spyOn(App.prototype, 'componentDidMount')
//   const wrapper = mount(<App />)
//   expect(spy).toHaveBeenCalled()
//   spy.mockReset()
//   spy.mockRestore()
// })
// -- works but doesn't affect test coverage

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
    gameOver: false,
    isPositiveScore: true,
    isTopScore: false,
    scoreIncreased: true
  }

  // using mount (instead of shallow in here actually brings my test of Welcome to 100! including line 4 - look into docs for this?
  const wrapper = mount(<App initialState={initialState}/>)
    wrapper.setState({gameOver: true})
    expect(wrapper.find(AddScore)).toHaveLength(1)
})

// when state gamePlaying is false and gameOver is true GameOver component gets called




test('saveQuestions adds to state', () => {
  const questionsList = [
    {question: 'Test question'},
    {question: 'Another question'}
  ]

  const initialState = {
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

  const expected = {
    totalscore: 0,
    topScores: [],
    questions: questionsList,
    currentQuestionObject: questionsList,
    index: 0,
    beforeGame: true,
    gamePlaying: false,
    gameOver: false,
    isPositiveScore: true,
    isTopScore: false,
    scoreIncreased: true
  }

  const wrapper = shallow(<App />)
  wrapper.instance().render = () => <div></div>
  wrapper.instance().state = initialState
  wrapper.instance().saveQuestions(questionsList)

  const actual = wrapper.instance().state
  expect(actual).toEqual(expected)
})


test('resetGame changes state', () => {
  const resetGame = jest.fn()

  const initialState = {
    totalscore: 10,
    topScores: [],
    questions: [{question: 'test'}, {question: 'another test'}],
    currentQuestionObject: {question: 'test'},
    index: 1,
    beforeGame: false,
    gamePlaying: true,
    gameOver: false,
    isPositiveScore: true,
    isTopScore: false,
    scoreIncreased: true
  }

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
  wrapper.instance().render = () => <div></div>
  wrapper.instance().state = initialState
  wrapper.instance().resetGame()

  const actual = wrapper.instance().state
  expect(actual).toEqual(expected)
})


test('startGame changes state', () => {
  const startGame = jest.fn()

  const initialState = {
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

  const expected = {
    totalscore: 0,
    topScores: [],
    questions: [],
    currentQuestionObject: null,
    index: 0,
    beforeGame: false,
    gamePlaying: true,
    gameOver: false,
    isPositiveScore: true,
    isTopScore: false,
    scoreIncreased: true
  }

  const wrapper = shallow(<App />)
  wrapper.instance().render = () => <div></div>
  wrapper.instance().state = initialState
  wrapper.instance().startGame()

  const actual = wrapper.instance().state
  expect(actual).toEqual(expected)
})

