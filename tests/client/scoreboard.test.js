import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import Scoreboard from '../../client/components/Scoreboard'


test('Text renders on Scoreboard', () => {
  const topScores = [
    {score: 100, name: 'Ben'},
    {score: 110, name: 'Maddy'}
  ]
  
  const wrapper = shallow(<Scoreboard topScores={topScores} />)
  expect(wrapper.find('h4').first().text()).toBe('Top Scores')
})