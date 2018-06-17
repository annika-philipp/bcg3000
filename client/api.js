import request from 'superagent'
const url = '/api/v1'
const scores = 'api/v2'

export function getQuestions (callback) {
  return request
    .get(url)
    .then(response => {
      let questionList = response.body
      callback(questionList)
    })
    .catch(err => {
      throw Error('Cannot GET Questions!')
    })
}

export function getScoresApi (callback) {
  request
    .get(scores)
    .then(items => {
      let data = items.body
      let scoreList = data.sort(function (a, b) {
        return b.score - a.score
      })
      var topScoresApi = []
      for (var i = 0; i < 10; i++) {
        topScoresApi.push(scoreList[i])
      }
      callback(topScoresApi)
    })
}

export function addScoreApi (score, callback) {
  request
    .post(scores)
    .send(score)
    .end((err, res) => {
      // console.log('res from addScoreApi ', res)
      callback(res)
    })
}
