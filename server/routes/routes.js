const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const db = require('../db/db')

router.use(bodyParser.json())

router.get('/v1', (req, res) => {
  db.getQuestionsAndAnswers()
    .then(questionsList => {
      res.json(questionsList)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/v2', (req, res) => {
  db.getScores()
    .then(scores => {
      res.json(scores)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/v2', (req, res) => {
  const newScore = req.body
  db.addScore(newScore)
    .then(score => {
      res.sendStatus(201)
    }) // sendStatus sets status as 201 and no body in response.
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
