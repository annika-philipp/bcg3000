import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import Display from '../../client/components/Display'

test('Test suite working', () => {
  expect(true).toBeTruthy
})

test('Button text displays correct answers', () => {
  const question = {
    question: 'test question',
    scores: [10, -10],
    answers: ['right answer', 'wrong answer']
  }
  const wrapper = shallow(<Display question={question}/>)
  expect(wrapper.find('button').first().text()).toBe(question.answers[0])
  expect(wrapper.find('button').last().text()).toBe(question.answers[1])
})

test('Button text displays correct answers', () => {
  const updateIndex = jest.fn()
  const question = {
    question: 'test question',
    scores: [10, -10],
    answers: ['right answer', 'wrong answer']
  }
  const props = {
    updateIndex, question
  }
  const wrapper = shallow(<Display {...props} />)
  wrapper.find('button').first().simulate('click')
  expect(updateIndex).toHaveBeenCalledWith(question.scores[0])
  wrapper.find('button').last().simulate('click')
  expect(updateIndex).toHaveBeenCalledWith(question.scores[1])
})

test('Totalscore Text renders', () => {
  const scoreIncreased = true
  const totalscore = 100
  const question = {
    question: 'test question',
    scores: [10, -10],
    answers: ['right answer', 'wrong answer']
  }
  const props = {
    scoreIncreased, totalscore, question
  }
  const wrapper = shallow(<Display {...props}/>)
  expect(wrapper.find('h2').text()).toBe('score: 100')
})
