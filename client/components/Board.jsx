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
            questionId: 0,
            questions: [],
            question: '',
            answers: [],
            currentQuestionObject: null 
            //pause: false -- maybe


        }

        this.refreshBoard = this.refreshBoard.bind(this)
        this.saveQuestions = this.saveQuestions.bind(this)
        // this.clickButton = this.clickButton.bind(this)
        // this.updateScore = this.updateScore.bind(this)
    }

    componentDidMount() {
        console.log('Mount')
        this.refreshBoard()
    }

    saveQuestions(questionsList) {
         console.log('show me questionsList: ' + questionsList)

        // console.log('I got a question: ', question, id)
        
        this.setState({
            questions: questionsList,
            currentQuestionObject: questionsList[0]
        })
        console.log('Board 47 ' + question)
        //link this with answers
        //getAnswers(this.renderAnswers, id) - which will be similar to renderQuestion
    }

    refreshBoard (err) {
        this.setState({
            error: err,
        })
        getQuestions(this.saveQuestions)
        
    }


    // //this is semi-pseudocoded
    // getAnswers (callback) {
    //     const answers = this.state.answers
    //         answers.push(answer1)
    //         answers.push(answer2)
    //         this.setState({answers})
    // }
    


    // updateScore(score){
    //   const totalscore = this.state.totalscore
    //   // if button pressed is answer[0] then totalscore += answer[0]score
    //   //if button pressed is answer[1] then total score += answer[1].score 
    //   //totalscore += testanswers.score  
    //   //this.setState({score})
    // }

  


    render () {
       const {totalscore, question, answers} = this.state
       console.log(totalscore, question, answers)

    //    if (questionsId == 13) return 

        return (
        <div className="game">
            <Score totalscore={totalscore}/>
            {this.state.questions.length > 0 && <Display question={this.state.currentQuestionObject}/>}
            {/* {this.state.questions.length > 0 && <Answers answers={this.state.currentQuestionObject.answers}/>} */}
        </div>
        )
        
    }

}

export default Board








