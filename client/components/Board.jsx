import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'

import Score from './Score'
import Display from './Display'

import {getQuestions} from '../api'

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //these are all the parts that will be changed as the game is played
            totalscore: 1,
            scores: [],
            // questionId: 0,
            questions: [],
            question: '',
            answers: [],
            currentQuestionObject: null, 
            index: 0
            //pause: false -- maybe


        }

        this.refreshBoard = this.refreshBoard.bind(this)
        this.saveQuestions = this.saveQuestions.bind(this)
        this.updateIndex = this.updateIndex.bind(this)
        // this.clickButton = this.clickButton.bind(this)
        // this.updateScore = this.updateScore.bind(this)
    }

    componentDidMount() {
        console.log('Mount')
        this.refreshBoard()
    }

    saveQuestions(questionsList) {
        console.log('show me questionsList: ' + questionsList)
        
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

    updateIndex () {
    console.log("updating index")
    var next = this.state.index + 1

    this.setState({
        index: next
    })

    }

    handleUpdate (index) {
        console.log('handleUpdate index :' + index)
        // const {totalscore, question, answers} = this.state

        if(this.state.questions.length > 0) {
            return (
                <div>
                     <Display question={this.state.currentQuestionObject[index]} updateIndex={this.updateIndex} />
                </div>    
            )}


    }



  


    render () {

    //    if (questionsId == 13) return 

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








