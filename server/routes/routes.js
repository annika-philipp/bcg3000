const express = require('express')
const server = require('../server')
//bodyParser needed?
const bodyParser = require('body-parser')
const router = express.Router()
const db = require('../db/db')


router.use(bodyParser.json())

router.get('/', (req, res) => {
    console.log('im here')
    db.getQuestionsAndAnswers()
    .then(questions => {
        console.log('im here too', questions)

        let data = []
        for(var i = 0; i < questions.length; i=i+2) {
            let question = questions[i]
            let nextQuestion = questions[i+1]
            let q = {
                question: question.question,
                question_id: question.question_id,
                answers: [
                    question.answer,
                    nextQuestion.answer
                ]
            }
            data.push(q)
        }

        console.log(data)

        res.json(data)
    })
    .catch(err => {
        console.log('i dont want to be here', err)
        res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/1', (req, res) => {
    db.getAnswers()
    .then(answers => {
        res.json(answers)
    })
    .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

//stretch don't forget to give actual patch
// router.get('#', (req, res) => {
//     db.getScores()
//     .then(scores => {
//         res.json(scores)
//     })
//     .catch(err => {
//         res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

// router.post('#', (req, res) => {
//     db.addScore()
//     .then(() =>)
// })

module.exports = router