import request from 'superagent'

const url = '/api/v1'
// const answersUrl = 'http://localhost:3000/api/v1/'
//const scoreUrl = 'http://localhost:3000/v1/'

export function getQuestions (callback) {
  return request
    .get(url)
    .then(data => {
       let returnedQuestion = data.body
//       console.log(returnedQuestion)
        callback(returnedQuestion.question, returnedQuestion.id)
      })
      .catch(err => {
             console.log('err', err)
              throw Error('Cannot GET Questions!')
      })
}

// export function getQuestions (callback) {
//   request
//   .get (Url)
//   .end((err, res) => {
//     callback(err, res.body)
//   })
// }

//somewhere in here I join my answers to my questions
// export function getAnswers (callback, id) {
    // request.get(url + '/1')
//       // .then(data => {
//       //   let returnedAnswers = data.body
              //the following is to filter out the two answers associated with each question
//       //   var questionsArray = data.answers.filter(element => id == answer.question_id)
//       //   console.log(questionsArray)
//       //   callback(questionsArray)
//       // })
//       .catch(err => {
//         console.log('err', err)
//         throw Error('Cannot GET Answers!')
//       })
//   }