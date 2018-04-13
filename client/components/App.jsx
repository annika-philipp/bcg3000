import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Welcome from './Welcome'
import Board from './Board'
import Score from './Score'
import Questions from './Questions'



const App = () => {
    return (
    <Router>
        <div>
            <h1>BCG 3000</h1>
            <Route exact path = '/' component = {Welcome} />
            <Route exact path = '/bcg3000' component = {Board} />
        </div>
    </Router>    
    )
}

export default App