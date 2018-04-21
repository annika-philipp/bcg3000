const express = require('express')
const server = require('../server')
//bodyParser needed?
const bodyParser = require('body-parser')
const router = express.Router()
const db = require('../db/db')


router.use(bodyParser.json())

router.get('/', (req, res) => {
    db.getQuestionsAndAnswers()
    .then(questions => {
         console.log('im here too', questions)

        let questionsList = []
        for(var i = 0; i < questions.length; i=i+2) {
            let question = questions[i]
            let nextQuestion = questions[i+1]
            let q = {
                question: question.question,
                question_id: question.question_id,
                answers: [ 
                    question.answer,
                    nextQuestion.answer
                ],
                scores: [
                    question.score,
                    nextQuestion.score
                ]
            }
            questionsList.push(q)
        }
        console.log(questionsList)

        res.json(questionsList)
    })
    .catch(err => {
        console.log('i dont want to be here', err)
        res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/scores', (req, res) => {
    db.getScores()
    .then(scores => {
        res.json(scores)
    })
    .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/scores', (req, res) => {
    const newScore = req.body
    db.addScore(newScore)
    .then(scoreIds => {
        res.json({scoreIds: {id:scoreIds[0]}}) //check why like this
    })
})

module.exports = router