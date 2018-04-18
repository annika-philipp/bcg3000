import request from 'superagent'

export function getQuestions () {
  return request.get('/v1/questions')
    // .then(data => {
    //   const posts = data.body
    //   return posts.map(post => {
    //   return Object.assign(
    //       {},
    //       post,
    //       { paragraphs: JSON.parse(post.paragraphs) }
    //     )
    //   })
    // })
    .catch(err => {
      console.log('err', err)
      throw Error('Cannot GET Posts!')
    })
}


export function getAnswers () {
    return request.get('/v1/answers')
      // .then(data => {
      //   const posts = data.body
      //   return posts.map(post => {
      //   return Object.assign(
      //       {},
      //       post,
      //       { paragraphs: JSON.parse(post.paragraphs) }
      //     )
      //   })
      // })
      .catch(err => {
        console.log('err', err)
        throw Error('Cannot GET Posts!')
      })
  }