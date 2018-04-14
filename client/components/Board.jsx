import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'

import Score from './Score'
import Questions from './Questions'
import Answers from './Answers'
import testquestions from '../../public/data/testquestions'

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //these are all the parts that will be changed as the game is played
            totalscore: 1,
            questionsId: 1,
            question: 'Day 1 of Bootcamp and you feel....',
            answers: ['Awesome!', 'Frikkin\' Awesome']
            //pause: false -- maybe


        }

        this.showQuestion = this.showQuestion.bind(this)
        this.clickButton = this.clickButton.bind(this)
        this.updateScore = this.updateScore.bind(this)



    }

    //this will somehow have to come from my seeds and api
    showQuestion (id, question) {
        this.setState({
            questionId: questionID + 1,
            question: testquestions.question
        })
    }

    //this is semi-pseudocoded
    showAnswers (answer1, answer2) {
        const answers = this.state.answers
            answers.push(answer1)
            answers.push(answer2)
            this.setState({answers})
    }
    


    updateScore(score){
      console.log(Hello)  
    }


    render () {
       const {totalscore, question, answers} = this.state
       console.log(totalscore, question, answers)

       if (questionsId == 13) return 

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








