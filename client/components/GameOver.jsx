
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


const GameOver = ({resetGame}) => {
    return (<div className="container">
                <div className="welcome">
                    <h3>GAME OVER</h3>
                    <h3>Consult your nearest handbook...</h3> 
                </div>
                <div className='row'>  
                    <button onClick={resetGame} className="startbutton">Play again</button>
                </div>
            </div>
    )
}

export default GameOver