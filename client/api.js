import request from 'superagent'

const url = '/api/v1'
const scores = 'api/v2'


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

export function getScores (callback) {
  request
  .get (scores)
  .then(items => {
    let data  = items.body
    let scoreList = data.scores.sort(function(a,b) {
      return b.scores - a.scores
    })
    var topScores = []
    for (var i = 0; i < 9; i++){
      tenTopScores.push(scoreList[i])
    }
    callback(topScores)
  }) 

}

// Array sort() descending
// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b-a});

export function addScore (score, callback) {
  request
  .post(scores)
  .send(score)
  .end((err, res) => {
    callback(res)
  })
}
