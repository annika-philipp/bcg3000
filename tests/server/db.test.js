/* global beforeEach afterEach test expect */
const testEnv = require('./test-environment')
const db = require('../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getScores gets all scores', () => {
  // Arrange
  const expected = 10
  // Act - need to use return when testing with Promises
  return db.getScores(testDb)
    .then(scores => {
      const actual = scores.length
      // Assert
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('getScores gets 2nd score', () => {
  // Arrange
  const expected = 75
  // Act
  return db.getScores(testDb)
    .then(scores => {
      const actual = scores[1].score
      // Assert
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('getQuestionsAndAnswers gets all question/answer pairs', () => {
  // Arrange
  const expected = 12
  // Act
  return db.getQuestionsAndAnswers(1, testDb)
    .then(question => {
      const actual = question.length
      // Assert
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('getQuestionsAndAnswers gets the first answer to question 1', () => {
  // Arrange
  const expected = 'excited!'
  // Act
  return db.getQuestionsAndAnswers(1, testDb)
    .then(question => {
      const actual = question[0].answers[0]
      // Assert
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('addScore adds new score to db', () => {
  const data = {name: 'Ross', score: 100}
  return db.addScore(data, testDb)
    .then(actual => expect(actual).toBeFalsy())
    .catch(err => expect(err).toBeTruthy())
})
