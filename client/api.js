import request from 'superagent'

const questionsUrl = 'http://localhost:3000/api/v1'
const answersUrl = 'http://localhost:3000/api/v1/'
//const scoreUrl = 'http://localhost:3000/v1/'

// export function getQuestions (callback) {
//   request
//     .get(questionsUrl)
//     .then(data => {
//        let returnedQuestion = data.body
//        console.log(returnedQuestion)
//         callback(returnedQuestion.question, returnedQuestion.id)
//       })
// }

export function getQuestions (callback) {
  request
  .get (questionsUrl)
  .end((err, res) => {
    callback(err, res.body)
  })
}

//somewhere in here I join my answers to my questions
// export function getAnswers () {
//     return request.get('/v1/answers')
//       // .then(data => {
//       //   const posts = data.body
//       //   return posts.map(post => {
//       //   return Object.assign(
//       //       {},
//       //       post,
//       //       { paragraphs: JSON.parse(post.paragraphs) }
//       //     )
//       //   })
//       // })
//       .catch(err => {
//         console.log('err', err)
//         throw Error('Cannot GET Answers!')
//       })
//   }