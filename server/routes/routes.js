const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const db = require('../db/db')


router.use(bodyParser.json())

router.get('/', (req, res) => {
    db.getQuestions()
    .then(questions => {
        res.json(questions)
    })
    .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/', (req, res) => {
    db.getAnswers()
    .then(answers => {
        res.json(answers)
    })
    .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router