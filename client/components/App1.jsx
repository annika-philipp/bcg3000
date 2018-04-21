import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Welcome from './Welcome'
import Board from './Board'
import Score from './Score'
import Display from './Display'
import GameOver from './GameOver'



const App = () => {
    return (
    <Router>
        <div className="container">
            <div className="row">
                <h1>BCG 3000</h1>
            </div>    
            <Route exact path = '/' component = {Welcome} />
            <Route exact path = '/bcg3000' component = {Board} />
            {/* <Route exact path = '/bcg3000/gameover' component = {GameOver} /> */}
        </div>
    </Router>    
    )
}

export default App