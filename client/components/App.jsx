import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'

import Welcome from './Welcome'
import Display from './Display'
import GameOver from './GameOver'
// import PlayAgain from './PlayAgain'
import AddScore from './AddScore'

import {getQuestions} from '../api'


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // topScores: [],
            totalscore: 0,
            topScores: [],
            questions: [],
            question: '',
            answers: [],
            currentQuestionObject: null, 
            index: 0,
            beforeGame: true,
            gamePlaying: false,
            gameOver: false,
            isNotNegative: true,
            isTopScore: false
            // player: ''
            //pause: false -- maybe


        }

        this.refreshBoard = this.refreshBoard.bind(this)
        this.saveQuestions = this.saveQuestions.bind(this)
        this.updateIndex = this.updateIndex.bind(this)
        this.updateScore = this.updateScore.bind(this)
        this.startGame = this.startGame.bind(this)
        this.resetGame = this.resetGame.bind(this)
        this.fetchScores = this.fetchScores.bind(this)
        this.saveScores = this.saveScores.bind(this)
        this.checkScore = this.checkScore.bind(this)
        this.checkIfTopScore = this.checkIfTopScore.bind(this)


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


    resetGame() {
        this.setState({
            totalscore: 0,
            topScores: [],
            question: '',
            answers: [],
            index: 0,
            beforeGame: true,
            gamePlaying: false,
            gameOver: false,
            isNotNegative: true
        })
    }

    startGame() {
        this.setState({
            beforeGame: false,
            gamePlaying: true,
            gameOver: false
        })
    }

    gameOver() {
        this.setState({
            beforeGame: false,
            gamePlaying: false,
            gameOver: true

        })
        // this.checkScore()
    }

    fetchScores () {
        getScores(this.saveScores)
    }

    saveScores(scores) {
        this.setState({
            topScores: scores
        })
    }

    checkScore() {
        getScores(this.checkIfTopScore)
    }

    checkIfTopScore(scores) {
        if(this.state.totalscore >= scores[8].scores) {
            this.setState({isTopScore:true})
        }
    }

    refreshScores() {
        this.setState({
            isTopScore:false
        })
        this.fetchScores()
    }



    updateScore(value) {
        // console.log('updating score', value)

        var updatedscore = this.state.totalscore + value
        // console.log('updatedscore, ', updatedscore)
        this.setState({
            totalscore: updatedscore
        }) 
        if (updatedscore < 0)  {
            // console.log('noooo', updatedscore)
            this.setState ({
                isNotNegative: false
            })
        }
        else {
            // console.log ("Huzzah")
            }
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


        if(this.state.questions.length > 0 && this.state.isNotNegative) {
            return (
                <div>
                     <Display question={this.state.currentQuestionObject[index]} updateIndex={this.updateIndex} totalscore={this.state.totalscore} />
                     
                </div>    
            )}
        if(this.state.questions.length > 0 && !this.state.isNotNegative) {
            return (
                <div>
                    <GameOver resetGame={this.resetGame}/>
                </div>
            )
        }    


    }
    


  


    render () {
        const {totalscore} = this.state

        return (
            <div className="container">
            <div className="row">
                <h1>BCG 3000</h1>
            </div>  
            {this.state.beforeGame && <Welcome startGame={this.startGame} />}
            {/* {this.state.gameOver && <AddScore topScores={this.state.topScores} score={this.state.totalscore} isTopScore = {this.state.isTopScore} refreshScores ={this.refreshScores}/>} */}
            {this.state.gameOver && <AddScore resetGame={this.resetGame} totalscore={this.state.totalscore}/>}
            <div className="game">
                {this.state.gamePlaying && this.handleUpdate(this.state.index)}
            </div>
            </div>
        )

        
    }

}

export default App








