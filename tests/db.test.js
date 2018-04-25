/* global beforeEach afterEach test expect */
const testEnv = require('./test-environment')
const db = require('../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getScores gets all scores', () => {
  // Hardcoded 10 scores
  //Arrange
  const expected = 10
  //Act - need to use return when testing with Promises
  return db.getScores(testDb)
    .then(scores => {
      //console.log(scores)
      const actual = scores.length
      //Assert
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('getScores gets 2nd score', () => {
    // Hardcoded 10 scores
    //Arrange
    const expected = 75
    //Act - need to use return when testing with Promises
    return db.getScores(testDb)
      .then(scores => {
        // console.log(scores)
        const actual = scores[1].score
        //Assert
        expect(actual).toBe(expected)
      })
      .catch(err => expect(err).toBeNull())
  })

test('getQuestionsAndAnswers gets all 11 question/answer pairs', () => {

  //Arrange
  const expected = 22
  //Act - need to use return when testing with Promises
  return db.getQuestionsAndAnswers(testDb)
    .then(questions => {
      //console.log(questions)
      const actual = questions.length
      //Assert
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

// test('getAnswersForQuestions gets an object with the two answers per question', () => {
//   // 2 for each week (currently 3 weeks)
//   //Arrange
//   const expected = 2
//   const id = 2
//   //Act - need to use return when testing with Promises
//   return db.getAnswersForQuestions(id, testDb)
//     .then(questionAnswerPair => {
//     //  console.log(questionAnswerPair)
//       const actual = questionAnswerPair.length
//       //Assert
//       expect(actual).toBe(expected)
//     })
//     .catch(err => expect(err).toBeNull())
// })

// test('getAnswersForQuestions gets the second objects answer', () => {
//   // 2 for each week (currently 3 weeks)
//   //Arrange
//   const expected = 'return obj.age++'
//   const id = 2 // this is the question id
//   //Act - need to use return when testing with Promises
//   return db.getAnswersForQuestions(id, testDb)
//     .then(questionAnswerPair => {
//       console.log(questionAnswerPair)
//       const actual = questionAnswerPair[1].answer
//       //Assert
//       expect(actual).toBe(expected)
//     })
//     .catch(err => expect(err).toBeNull())
// })

