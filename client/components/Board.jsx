import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'

import Score from './Score'
import Display from './Display'
import GameOver from './GameOver'

import {getQuestions} from '../api'


class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //these are all the parts that will be changed as the game is played
            totalscore: 0,
            scores: [],
            // questionId: 0,
            questions: [],
            question: '',
            answers: [],
            currentQuestionObject: null, 
            index: 0,
            gameOver: false
            //pause: false -- maybe


        }

        this.refreshBoard = this.refreshBoard.bind(this)
        this.saveQuestions = this.saveQuestions.bind(this)
        this.updateIndex = this.updateIndex.bind(this)
        // this.gameOver = this.gameOver.bind(this)
        this.updateScore = this.updateScore.bind(this)
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

    // gameOver() {
    //     this.setState({
    //         gameOver: true

    //     })
    // }

    updateScore(value) {
        console.log('updating score', value)

        var updatedscore = this.state.totalscore + value
        this.setState({
            totalscore: updatedscore
        })
    }

    updateIndex (score) {
    console.log("updating index", score)
    var next = this.state.index == this.state.questions.length -1 ? gameOver() : this.state.index + 1

    
    this.setState({
        index: next,
    })
    this.updateScore(score)

    }

    handleUpdate (index) {
        // console.log('handleUpdate index :' + index)
        // const {totalscore, question, answers} = this.state

        if(this.state.questions.length > 0) {
            return (
                <div>
                     <Display question={this.state.currentQuestionObject[index]} updateIndex={this.updateIndex} totalscore={this.state.totalscore} />
                     {/* {gameOver
                    ? <GameOver />
                    : <Display question={this.state.currentQuestionObject[index]} updateIndex={this.updateIndex} />
                }  */}
                </div>    
            )}


    }



  


    render () {
        const {totalscore} = this.state
    //    if (questionsId == 13) return 
     console.log("This is totalscore, ", totalscore)
        return (
        <div className="game">
            {/* <Score updateScore={this.updateScore}/> */}
            {/* <Score totalscore={totalscore}/> */}
            {this.handleUpdate(this.state.index)}
            {/* {this.state.questions.length > 0 && <Display question={this.state.currentQuestionObject[index]} updateIndex={this.updateIndex}/>} */}
            {/* {this.state.questions.length > 0 && <Display question={this.state.currentQuestionObject} />} */}
        </div>
        )
        
    }

}

export default Board








