import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'

import Score from './Score'
import Questions from './Questions'

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }
    render () {

        return (
        <div>
            <Score />
            <Questions />
        </div>
        )
        
    }

}

export default Board








