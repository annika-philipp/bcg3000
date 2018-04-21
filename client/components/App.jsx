import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'

import Welcome from './Welcome'
import Score from './Score'
import Display from './Display'
import GameOver from './GameOver'

import {getQuestions} from '../api'


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalscore: 0,
            scores: [],
            questions: [],
            question: '',
            answers: [],
            currentQuestionObject: null, 
            index: 0,
            beforeGame: true,
            gamePlaying: false,
            gameOver: false
            //pause: false -- maybe


        }

        this.refreshBoard = this.refreshBoard.bind(this)
        this.saveQuestions = this.saveQuestions.bind(this)
        this.updateIndex = this.updateIndex.bind(this)
        // this.gameOver = this.gameOver.bind(this)
        this.updateScore = this.updateScore.bind(this)
        this.startGame = this.startGame.bind(this)
        // this.resetGame = this.resetGame.bind(this)
    }

    componentDidMount() {
        // console.log('Mount')
        this.refreshBoard()
    }

    saveQuestions(questionsList) {
        // console.log('show me questionsList: ' + questionsList)
        
        this.setState({
            questions: questionsList,
            currentQuestionObject: questionsList
        })
    
    }
       

    refreshBoard (err) {
        this.setState({
            error: err,
        })
        getQuestions(this.saveQuestions)
        
    }

    // resetGame() {
    //     this.setState({
    //         totalscore: 0,
    //         scores: [],
    //         questions: [],
    //         question: '',
    //         answers: [],
    //         currentQuestionObject: null, 
    //         index: 0,
    //         beforeGame: true,
    //         gamePlaying: false,
    //         gameOver: false
    //     })

    // }

    startGame() {
        this.setState({
            beforeGame: false,
            gameOver: false,
            gamePlaying: true
        })
    }

    gameOver() {
        this.setState({
            beforeGame: false,
            gamePlaying: false,
            gameOver: true

        })
    }

    updateScore(value) {
        console.log('updating score', value)

        var updatedscore = this.state.totalscore + value
        this.setState({
            totalscore: updatedscore
        })
    }

    updateIndex (score) {
    console.log("updating index", score)
    var next = this.state.index == this.state.questions.length -1 ? this.gameOver() : this.state.index + 1

    
    this.setState({
        index: next,
    })
    this.updateScore(score)

    }

    handleUpdate (index) {


        if(this.state.questions.length > 0) {
            return (
                <div>
                     <Display question={this.state.currentQuestionObject[index]} updateIndex={this.updateIndex} totalscore={this.state.totalscore} />
                     
                </div>    
            )}


    }



  


    render () {
        const {totalscore} = this.state

        return (
            <div className="container">
            <div className="row">
                <h1>BCG 3000</h1>
            </div>  
            {this.state.beforeGame && <Welcome startGame={this.startGame} />}
            {this.state.gameOver && <GameOver startGame={this.startGame}/>}
            <div className="game">
                {this.state.gamePlaying && this.handleUpdate(this.state.index)}
            </div>
            </div>
        )

        
    }

}

export default App








