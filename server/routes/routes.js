const express = require('express')
const server = require('../server')
//bodyParser needed?
const bodyParser = require('body-parser')
const router = express.Router()
const db = require('../db/db')


router.use(bodyParser.json())

router.get('/bcg3000', (req, res) => {
    db.getQuestions()
    .then(questions => {
        res.json(questions)
    })
    .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/bcg3000', (req, res) => {
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