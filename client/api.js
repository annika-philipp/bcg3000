import request from 'superagent'

const url = '/api/v1'


export function getQuestions (callback) {
  return request
    .get(url)
    .then(response => {
       // console.log('response', response.body)
        let questionList = response.body
        callback(questionList)
      })
      .catch(err => {
        console.log('err', err)
        throw Error('Cannot GET Questions!')
      })
}

// export function getScores (callback) {
//   request
//   .get (Url)
//   .end((err, res) => {
//     callback(err, res.body)
//   })
// }
