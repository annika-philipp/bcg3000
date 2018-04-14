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
            score: 1,
            questionsId: 1,
            question: 'Day 1 of Bootcamp and you feel....',


        }


    }


    render () {
       const {score, question} = this.state

        return (
        <div>
            <Score score={score}/>
            <Questions question={question}/>
        </div>
        )
        
    }

}

export default Board








