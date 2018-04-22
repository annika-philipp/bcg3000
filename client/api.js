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

export function getScoresApi (callback) {
  request
  .get(scores)
  .then(items => {
    console.log("items.body ", items.body)
    let data  = items.body
    let scoreList = data.sort(function(a,b) {
      return b.score - a.score
    })
    var topScoresApi = []
    for (var i = 0; i < 10; i++){
      topScoresApi.push(scoreList[i])
    }
    console.log({scoreList})
    console.log("Api Topscores, ", topScoresApi)
    callback(topScoresApi)
  }) 

}

// Array sort() descending
// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b-a});

export function addScoreApi (score, callback) {
  console.log("score in api, ", score)
  request
  .post(scores)
  .send(score)
  .end((err, res) => {
    callback(res)
  })
}
