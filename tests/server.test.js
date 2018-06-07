import request from 'supertest'
const server = require('../server/routes/routes')

jest.mock('../server/db/db', () => ({
  getQuestionsAndAnswers: () => Promise.resolve([
    {'question': 'First day of bootcamp, you feel...', 'question_id': 1, 'answers': ['excited!', 'Bootcamp? I did not sign up for this!'], 'scores': [40, -40]},
    {'question': 'function getGreeting (name) {', 'question_id': 2, 'answers': ['return \'Hello\' + name}', 'return a + b}'], 'scores': [10, -10]}
  ])
}))

test('GET works', () => {
  return request(server)
    .get('api/v1')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBeGreaterThan(0)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})
