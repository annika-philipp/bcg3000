const path = require('path')
const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)
//check tomorrow, compare with charlotte's web api
module.exports = {
    getAnswers,
    getQuestions,
    getQuestionsAndAnswers
}

function getAnswers (testConn) {
    const conn = testConn || connection
    return conn('answers').select()
}


function getQuestions (testConn) {
    const conn = testConn || connection
    return conn('questions').select()
}

function getQuestionsAndAnswers (id, testConn) {
    const conn = testConn || connection
    return conn('questions')
    .join('answers', 'questions.id', 'answers.question_id')
    .select()
}

//do I need this, or just have them separate?
function getAnswersForQuestions (id, testConn) {
    const conn = testConn || connection
    return conn('questions')
    .join('answers', 'questions.id', 'answers.question_id')
    .where('questions.id', id)
    .select('answers.question_id', 'question', 'answer', 'answers.id as answer id')
}

// to add when adding scores table (Stretch)
// function getScores (testConn) {
//     const conn = testConn || connection
//     return conn('scores').select()
// }

