
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


const GameOver = ({startGame}) => {
    return (<div className="welcome">
                    <div className="welcometext">
                        <h3>GAME OVER</h3>
                        <h3>Consult your nearest handbook...</h3> 
                    </div>
                <button onClick={startGame} className="startbutton">Play again</button>
                </div>
    )
}

export default GameOver