const path = require('path')
const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)
//check tomorrow, compare with charlotte's web api
module.exports = {
    // getAnswers,
    // getQuestions,
    getQuestionsAndAnswers
}


function getQuestionsAndAnswers (id, testConn) {
    const conn = testConn || connection
    return conn('questions')
    .join('answers', 'questions.id', 'answers.question_id')
    .select()
}


// to add when adding scores table (Stretch)
// function getScores (testConn) {
//     const conn = testConn || connection
//     return conn('scores').select()
// }

