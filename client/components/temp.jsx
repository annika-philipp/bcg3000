import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'

import Score from './Score'
import Questions from './Questions'

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //these are all the parts that will be changed as the game is played
            score: 0,
            questionsId: 0,
            question: '',
            answerOptions: [],
            //or answer1; '',
            //answer2; '',
            //pause: false ? maybe

        }

        // this.showQuestion = this.showQuestion.bind(this)
        // this.showAnswers = this.showAnswers.bind(this)
        //     //this.clickButton = this.clickButton.bind(this)
        //     //this.restart = this.restart.bind(this)

    }


    // showQuestion(question, id){




    //     showAnswers(answer, ?)

    // }

    // clickButton(button)


    //     //pause thingy

    //     //startGame Button thingy

    //     // this.setState({
    // //key:value pairs
    //     // })

    //     //scores logic get score, compare score, check if big enough to be added to scoreboard

    render () {
        //  const {score} = this.state

        return (
        <div>
            <Score score={score} />
            <Questions />
        </div>
        )
        
    }

}

export default Board








