import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'

import Score from './Score'
import Questions from './Questions'
import Answers from './Answers'

import {getQuestions} from '../api'

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //these are all the parts that will be changed as the game is played
            totalscore: 1,
            questionId: 0,
            question: '',
            answers: ['Yay', 'Nay']
            //pause: false -- maybe


        }

        this.refreshBoard = this.refreshBoard.bind(this)
        this.renderQuestion = this.renderQuestion.bind(this)
        // this.clickButton = this.clickButton.bind(this)
        // this.updateScore = this.updateScore.bind(this)



    }

    componentDidMount() {
        this.refreshBoard()
    }

    renderQuestion(id, question) {
        this.setState({
            questionId: id,
            question: question
        })
    }

    refreshBoard (err) {
        this.setState({
            error: err
        })
        getQuestions(this.renderQuestion)
    }


    // //this is semi-pseudocoded
    // getAnswers (answer1, answer2) {
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
            <Questions question={question}/>
            <Answers answers={answers}/>
        </div>
        )
        
    }

}

export default Board








